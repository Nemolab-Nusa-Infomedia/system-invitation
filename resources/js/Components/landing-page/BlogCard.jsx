import React from "react";
import icons_calendar from "/public/asset-landing-page/icons-calendar.svg";
import list from "/public/asset-landing-page/list.svg";

function BlogCard({ image, title, description, date, category }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[10px] w-full sm:max-w-[615px] bg-white rounded-xl font-poppins overflow-hidden">
            <div className="w-full sm:w-6/12 h-48 sm:h-auto">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-[10px]"
                />
            </div>
            <div className="flex flex-col h-fit gap-4 sm:gap-[18px] px-4 sm:pr-4 sm:pl-0 w-full sm:w-6/12">
                <div className="space-y-2">
                    <h2 className="font-semibold text-lg sm:text-base lg:text-base xl:text-[21px] text-gray-900">
                        {title}
                    </h2>
                    <p className="text-[#818181] text-sm sm:text-xs line-clamp-3">
                        {description}
                    </p>
                </div>
                <div className="flex items-center gap-4 sm:gap-[25px] text-xs lg:text-[9px] xl:text-xs font-semibold">
                    <span className="flex items-center gap-2 sm:gap-[10px]">
                        <img
                            src={icons_calendar}
                            alt="date"
                            className="w-4 sm:w-auto"
                        />
                        <p>{date}</p>
                    </span>
                    <span className="flex items-center gap-2 sm:gap-[10px]">
                        <img src={list} alt="date" className="w-4 sm:w-auto" />
                        <p>{category}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
