import React from "react";

function Button({ text_color, button_color, text, image, link }) {
    return (
        <a href={link}>
            <button
                className={`flex gap-[10px] bg-[${button_color}] rounded-[10px] py-3 px-4 items-center`}
            >
                {image ? <img src={image} alt="icon" /> : null}
                <p
                    className={`font-poppins font-medium text-base text-[${text_color}]`}
                >
                    {text}
                </p>
            </button>
        </a>
    );
}

export default Button;
