import React from "react";
import banner from "/public/asset-landing-page/Content.png";
import banner2 from "/public/asset-landing-page/Content2.png";
import cart from "/public/asset-landing-page/cart.svg";
import Button from "@/Components/landing-page/Button";

function Beranda() {
    return (
        <section className="flex justify-center bg-white w-full" id="beranda">
            <div className="max-w-[1440px] flex flex-col lg:flex-row lg:pl-[44px] pt-32  lg:pt-[70px] xl:pt-[0px] xl:pl-[90px] justify-between items-center ">
                <div className="flex lg:w-[654px] flex-col justify-center gap-[21px] h-fit p-5 lg:p-0">
                    <div className="flex flex-col gap-[21px] w-full">
                        <h1 className="font-bold text-[27px] leading-10 lg:text-[32px] lg:leading-[48px] xl:text-[50px] xl:leading-[75px] font-poppins ">
                            Rayakan Momen Spesial dengan Undangan Digital yang
                            Berkesan.
                        </h1>
                        <p className="font-poppins font-medium text-[15px] lg:text-lg leading-[22px] lg:leading-[27px]">
                            Kirim kabar gembira dengan undangan digital yang
                            cepat, praktis, dan ramah lingkungan.
                        </p>
                    </div>
                    <div>
                        <Button
                            image={cart}
                            text_class={"text-white"}
                            text={"Pesan Sekarang"}
                            button_class={
                                "py-3 px-4 lg:px-5 bg-[#FF61A2] transition-all hover:bg-[#a31543]"
                            }
                            link={"/"}
                        />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img
                        src={banner}
                        className="h-auto lg:w-[500px] xl:w-[695px]"
                        alt="banner"
                    />
                </div>
                <div className="sm:relative lg:hidden mt-[35px] ">
                    <img src={banner2} className="w-full" alt="banner" />
                </div>
            </div>
        </section>
    );
}

export default Beranda;
