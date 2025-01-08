import React from "react";
import banner from "/public/asset-landing-page/Content.png";
import cart from "/public/asset-landing-page/cart.svg";
import Button from "@/Components/landing-page/Button";

function Beranda() {
    return (
        <section className="flex justify-center bg-white w-full" id="beranda">
            <div className="max-w-[1440px] flex pl-[90px] justify-between items-center ">
                <div className="flex w-[654px] flex-col justify-center gap-[21px] h-fit">
                    <div className="flex flex-col gap-[21px]">
                        <h1 className="font-bold text-[50px] leading-[75px] font-poppins ">
                            Rayakan Momen Spesial dengan Undangan Digital yang
                            Berkesan.
                        </h1>
                        <p className="font-poppins font-medium text-lg leading-[27px]">
                            Kirim kabar gembira dengan undangan digital yang
                            cepat, praktis, dan ramah lingkungan.
                        </p>
                    </div>
                    <div>
                        <Button
                            image={cart}
                            text_class={"text-white"}
                            text={"Pesan Sekarang"}
                            button_class={"py-3 px-5 bg-[#FF61A2]"}
                            link={"/"}
                        />
                    </div>
                </div>
                <div className="">
                    <img
                        src={banner}
                        className="h-auto w-[695px]"
                        alt="banner"
                    />
                </div>
            </div>
        </section>
    );
}

export default Beranda;
