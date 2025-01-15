import React from "react";
import Button from "@/Components/landing-page/Button";
import cart from "/public/asset-landing-page/cart.svg";
import ceklist from "/public/asset-landing-page/ceklist.svg";
import cross from "/public/asset-landing-page/cross.svg";

function PaketCard() {
    return (
        <>
            <div className="card bg-[#FFEFF6] rounded-2xl  flex flex-col gap-[14px] py-[18px] px-5">
                {/* Header */}
                <div className="font-poppins flex flex-col gap-[14px]">
                    <h2 className="font-bold text-xl leading-[30px]">
                        Paket Cuma-cuma
                    </h2>
                    <h1 className="font-bold text-[28px] leading-[42px]">
                        Rp 0/
                        <span className="text-sm font-normal leading-[21px] ">
                            3hari
                        </span>
                    </h1>
                    <p className="font-medium text-xs leading-[18px]">
                        Gratis, tapi tetap keren!
                    </p>
                </div>

                {/* Button */}
                <Button
                    image={cart}
                    text_class={"text-white font-poppins font-bold leading-6 "}
                    text={"Piliih Paket"}
                    button_class={
                        "bg-[#C20059] w-full justify-center gap-[10px] py-[13px] px-4 bg-[#FF61A2] transition-all hover:bg-[#a31543]"
                    }
                    link={"/"}
                />

                <div className="flex flex-col gap-[10px]">
                    <h3 className="font-poppins font-semibold text-sm leading-[21px]">
                        Fitur Utama Paket Cuma - Cuma
                    </h3>
                    <div className="font-poppins flex flex-col gap-[6px]">
                        <span className="flex gap-1 items-center">
                            <img
                                src={ceklist}
                                alt="ceklist"
                                className="h-5 w-5"
                            />

                            <p className="font-semibold leading-[18px] text-xs">
                                Tamu Undangan
                            </p>
                        </span>
                        <span className="flex gap-1 items-center">
                            <img
                                src={cross}
                                alt="ceklist"
                                className="h-5 w-5"
                            />

                            <p className="font-semibold leading-[18px] text-xs">
                                Tidak Ada Fitur Custom
                            </p>
                        </span>
                        <span className="flex gap-1 items-center">
                            <img
                                src={cross}
                                alt="ceklist"
                                className="h-5 w-5"
                            />

                            <p className="font-semibold leading-[18px] text-xs">
                                Tidak Ada Fitur Custom
                            </p>
                        </span>
                        <span className="flex gap-1 items-center">
                            <img
                                src={cross}
                                alt="ceklist"
                                className="h-5 w-5"
                            />

                            <p className="font-semibold leading-[18px] text-xs">
                                Tidak Ada Fitur Custom
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaketCard;
