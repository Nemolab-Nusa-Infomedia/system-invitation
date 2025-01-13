import React from "react";

const Card = ({ title, description, Image }) => {
    return (
        <div className="flex flex-col items-center w-[294px] rounded-[10px] border-[5px] border-[#D4A302] pt-[40px] pr-[20px] pb-[40px] pl-[20px] gap-[36px]">
            <div className="h-[71.23px] gap-[10px] mb-[36px] flex justify-center items-center">
                {Image}
            </div>
            <h1 className="w-[254px] h-[36px] text-[rgb(0,0,0)] font-poppins font-semibold text-[24px] leading-[36px] text-center">
                {title}
            </h1>
            <p className="w-[254px] h-[36px] font-poppins font-normal text-[12px] leading-[18px] text-center">
                {description}
            </p>
            <button className="w-[161px] h-[40px] rounded-[10px] bg-[#8B4513] text-[#FFFFFF] py-[5px] px-[10px] cursor-pointer">
                Pilih
            </button>
                    
        </div>
    );
};

export default Card;
