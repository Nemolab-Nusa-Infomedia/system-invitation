import React from "react";
import banner from "/public/asset-landing-page/Frame 100.png";
import cart from "/public/asset-landing-page/cart.svg";
import Button from "@/Components/landing-page/Button";

function Beranda() {
    return (
        <section className="flex justify-center bg-white w-full pt-[90px] ">
            <div className="max-w-[1440px] flex h-[507px] px-[104px] py-[40px] justify-between gap-[104px]">
                <div className="">
                    <img
                        src={banner}
                        className=" rounded-[30px] h-auto w-auto"
                        alt="banner"
                    />
                </div>
                <div className="flex w-[527px] flex-col justify-center gap-[21px]">
                    <div className="flex flex-col gap-[21px]">
                        <h1 className="font-bold text-3xl font-poppins leading-[46.5px]">
                            Rayakan Momen Spesial dengan Undangan Digital yang
                            Berkesan.
                        </h1>
                        <p className="font-poppins font-medium text-base leading-[24px]">
                            Kirim kabar gembira lebih mudah dengan undangan
                            digital yang dapat disesuaikan untuk acara apapun
                            cepat, praktis, dan ramah lingkungan.
                        </p>
                    </div>
                    <div>
                        <Button
                            image={cart}
                            text_class={"text-white"}
                            text={"Pesan Sekarang"}
                            button_class={"py-3 px-5 bg-[#F72585]"}
                            link={"/"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Beranda;
