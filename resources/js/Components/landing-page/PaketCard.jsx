import React from "react";
import maps from "/public/asset-landing-page/maps.svg";
import Button from "@/Components/landing-page/Button";

function PaketCard({ paket }) {
    return (
        <>
            {paket.map((item, index) => (
                <div
                    key={index}
                    className="card max-w-[300px] w-calc_4 rounded-2xl border flex flex-col gap-3 border-black py-[22px] px-5"
                >
                    {/* Header */}
                    <div className="text-start border-b border-black pb-2">
                        <h2 className="font-poppins font-bold text-base leading-6 text-[#B10051]">
                            {item.title}
                        </h2>
                        <p className="font-poppins font-medium text-xs leading-[18px]">
                            {item.description}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-2">
                        {item.features.map((feature, featureIndex) => (
                            <span
                                key={featureIndex}
                                className="flex gap-[5px] items-center"
                            >
                                <img
                                    src={maps}
                                    alt="maps"
                                    className="h-6 w-6"
                                />
                                <p className="font-poppins font-medium text-xs leading-[18px]">
                                    {feature}
                                </p>
                            </span>
                        ))}
                    </div>

                    {/* Button */}
                    <Button
                        text="Pilih Paket"
                        link=""
                        button_class="bg-[#C20059] w-full justify-center py-[11px] px-4"
                        text_class="text-white font-poppins text-base font-medium"
                    />
                </div>
            ))}
        </>
    );
}

export default PaketCard;
