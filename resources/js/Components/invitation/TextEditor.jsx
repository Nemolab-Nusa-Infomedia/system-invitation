import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

const TextEditor = ({ value, onChange }) => {
    const editorRef = useRef(null);
    const quillRef = useRef(null);

    useEffect(() => {
        quillRef.current = new Quill(editorRef.current, {
            modules: {
                syntax: {
                    highlight: (text) => hljs.highlightAuto(text).value,
                },
                toolbar: [
                    [{ font: [] }, { size: [] }],
                    ["bold", "italic", "underline", "strike"], // Removed space before 'underline'
                    [{ color: [] }, { background: [] }],
                    [{ script: "sub" }, { script: "super" }],
                    [{ header: [1, 2, false] }],
                    ["blockquote", "code-block"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ direction: "rtl" }],
                    [{ align: [] }],
                    ["link", "image", "video", "formula"],
                    ["clean"], // Clear formatting
                ],
            },
            theme: "snow",
        });

        // Set initial content
        quillRef.current.root.innerHTML = value;

        // Handle text change
        quillRef.current.on("text-change", () => {
            const content = quillRef.current.root.innerHTML;
            onChange(content); // Call the onChange prop to update the parent component
        });

        // Cleanup function
        return () => {
            quillRef.current = null;
        };
    }, [value, onChange]);

    return <div ref={editorRef} style={{ minHeight: "300px" }}></div>;
};

export default TextEditor;
