import React from "react";
import image_group from "/public/asset-landing-page/Group.png";
import image_mingcute from "/public/asset-landing-page/mingcute.png";
import image_management from "/public/asset-landing-page/management.png";
import image_symbol from "/public/asset-landing-page/symbol.png";
import cart from "/public/asset-landing-page/cart.svg";
import Button from "@/Components/landing-page/Button";

function Keunggulan() {
    return (
        <section
            className="flex flex-col items-center bg-purple-700 w-full "
            id="keunggulan"
        >
            <div className="flex max-w-[1440px] w-full justify-center">
                <div className="flex items-center flex-col">
                    <h1 className="font-poppins font-bold text-[32px] leading-[48px]">
                        Kenapa Memilih Kami?
                    </h1>
                    <p className="font-poppins">
                        Pilihan tepat untuk undangan digital yang praktis dan
                        berkesan.
                    </p>
                </div>
            </div>
            <div className="flex max-w-[1440px] w-full px-[27px] py-[52px] gap-[59px] ">
                cek
            </div>
        </section>
    );
}

export default Keunggulan;
