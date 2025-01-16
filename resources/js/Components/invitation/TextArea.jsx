import React from "react";

export default function TextArea({
    placeholder,
    rows,
    value,
    onChange,
    className,
}) {
    return (
        <textarea
            placeholder={placeholder}
            rows={rows}
            value={value}
            onChange={onChange}
            className={`text-gray-500 w-full border border-gray-300 resize-none scrollbar-vertical rounded-lg  ${className}`}
        />
    );
}
