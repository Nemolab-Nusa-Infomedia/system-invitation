import React from "react";
import icons_calendar from "/public/asset-landing-page/icons-calendar.svg";
import list from "/public/asset-landing-page/list.svg";

function BlogCard({ image, title, description, date, category }) {
    return (
        <div className="flex gap-4 max-w-[615px] w-full bg-white rounded-xl font-poppins overflow-hidden">
            <div className="w-[240px] h-[160px] flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
            <div className="flex flex-col gap-[18px] pr-4">
                <div className="space-y-2">
                    <h2 className="font-semibold text-[21px] leading-[31.5px] text-gray-900">
                        {title}
                    </h2>
                    <p className="text-[#818181] text-xs line-clamp-2">
                        {description}
                    </p>
                </div>
                <div className="flex items-center gap-[25px] text-sm font-semibold">
                    <span className="flex items-center">
                        <span className="flex items-center gap-[10px]">
                            <img src={icons_calendar} alt="date" />
                            <p>{date}</p>
                        </span>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <img src={icons_calendar} alt="date" />
                        <p>{category}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
