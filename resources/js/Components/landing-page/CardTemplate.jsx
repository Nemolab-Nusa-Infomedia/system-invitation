import React from "react";
import preview_1 from "/public/asset-landing-page/preview-undangan-1.png";
import Button from "./Button";

function CardTemplate() {
    return (
        <div className="w-calc_3">
            <img
                className="w-[409px] max-h-[386px]"
                src={preview_1}
                alt="preview"
            />
            <div className="bg-green-300">
                <h1>Rawah Suci</h1>
                <div className="grid grid-cols-2 gap-3">
                    <Button
                        text="Lihat Demo"
                        link="/demo"
                        button_class="bg-pink-500 text-white w-full"
                        text_class="text-white"
                    />
                    <Button
                        text="Pesan"
                        link="/pesan"
                        button_class="bg-pink-200 text-pink-500 w-full"
                        text_class="text-pink-500"
                    />
                </div>
            </div>
        </div>
    );
}

export default CardTemplate;
