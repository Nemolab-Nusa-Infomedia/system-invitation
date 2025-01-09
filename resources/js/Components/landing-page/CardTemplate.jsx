import React from "react";
import preview_1 from "/public/asset-landing-page/preview-undangan-1.png";
import Button from "./Button";

function CardTemplate() {
    return (
        <div className="flex flex-col w-calc_3 gap-5">
            <img
                className="w-[409px] max-h-[386px]"
                src={preview_1}
                alt="preview"
            />
            <div className="flex flex-col font-poppins gap-5">
                <h1 className="font-semibold text-[27px] leading-10">
                    Rawah Suci
                </h1>
                <div className="grid grid-cols-2 gap-3">
                    <Button
                        text="Lihat Demo"
                        link="/demo"
                        button_class="bg-pink-500 flex justify-center rounded-[10px] px-4 py-[13px] w-full transition-all hover:bg-[#f464a1]"
                        text_class="text-white font-medium"
                    />
                    <Button
                        text="Pesan"
                        link="/pesan"
                        button_class="bg-pink-500 flex justify-center rounded-[10px] px-4 py-[13px] w-full transition-all hover:bg-[#f464a1]"
                        text_class="text-white font-medium"
                    />
                </div>
            </div>
        </div>
    );
}

export default CardTemplate;
