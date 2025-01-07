import React from "react";

function Card({ image, alt, title, description }) {
    return (
        <div className="flex items-center gap-5 card w-full ">
            <div className="flex items-center justify-center min-w-[70px] h-[70px] bg-[#F72585] rounded-full">
                <img src={image} alt={alt} className="h-10 w-10" />
            </div>
            <div className="w-auto">
                <h2 className="font-semibold text-xl leading-[30px]">
                    {title}
                </h2>
                <p className="font-poppins text-sm font-normal leading-5">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Card;
