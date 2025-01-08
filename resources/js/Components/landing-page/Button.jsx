import React from "react";

function Button({ text, image, link, button_class, text_class }) {
    return (
        <a href={link}>
            <button
                className={`flex gap-[10px] ${button_class} rounded-[10px] items-center`}
            >
                {image ? <img src={image} alt="icon" /> : null}
                <p className={`font-poppins ${text_class}`}>{text}</p>
            </button>
        </a>
    );
}

export default Button;
