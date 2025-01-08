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
            className="flex flex-col relative justify-center bg-[#ffffff] w-full "
            id="keunggulan"
        >
            {/* desain */}
            <div className="" />
            <div className="bg-[#FFF5E1] flex w-fill-[1440px] w-full h-hug-[347px] px-[27px] py-[52px] gap-[59px] ">
                <div className="w-[302px] h-[243px] rounded-[16px] px-[12px] py-[18px]">
                    <img src={image_group} className="" />
                    <h1>Desain Mudah</h1>
                    <p className="font-poppins text-size-[15px] font-normal leading-[30px]">
                        Sesuaikan desain undangan dengan tema acara Anda dengan
                        cepat dan mudah.
                    </p>
                </div>
                <div className="w-[302px] h-[220px] rounded-[16px] px-[12px] py-[18px]">
                    <img src={image_mingcute} className="" />
                    <h1>Akses Tanpa Batas</h1>
                    <p className="font-poppins text-sm font-normal leading-5">
                        Tamu dapat mengakses undangan dari perangkat apa pun,
                        kapan saja.
                    </p>
                </div>
                <div className="w-[302px] h-[243px] rounded-[16px] px-[12px] py-[18px]">
                    <img src={image_management} className="" />
                    <h1>Pengelolaan Mudah</h1>
                    <p className="font-poppins text-sm font-normal leading-5">
                        Kelola semua undangan dan konfirmasi kehadiran dalam
                        satu platform yang efisien.
                    </p>
                </div>
                <div className="w-[302px] h-[243px] rounded-[16px] px-[12px] py-[18px]">
                    <img src={image_symbol} className="" />
                    <h1>Pembaruan Instan</h1>
                    <p className="font-poppins text-sm font-normal leading-5 text-justify">
                        Update undangan secara langsung dan beri tahu semua tamu
                        tanpa perlu mencetak ulang.
                    </p>
                </div>
            </div>
            {/* keunggulan */}
            <div className="w-fixed-[1,222px] h-hug-[660.29px] justify-space-between bg-[#FFFFFF]">
                <div className="w-[1222px] flex h-[660.29px] justify-between">
                    <div className="w-[530px] h-[660.29px] px-[20px] py-[100px] gap-[32px]">
                        <h1 className="w-[490px] h-[88px] font-poppins xl-[700] sm-[20px] leading-[43,5px]">
                            Keunggulan Undangan Digital untuk Acara Anda
                        </h1>
                        <p className="font-poppins  leading-[22.5px]">
                            Undangan digital memungkinkan Anda menyesuaikan
                            desain dengan tema acara secara fleksibel dan mudah
                            melakukan perubahan. Edit elemen desain dan kirim
                            pembaruan instan, memastikan semua tamu mendapatkan
                            informasi terbaru tanpa perlu mencetak ulang.
                        </p>
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
            </div>
        </section>
    );
}

export default Keunggulan;
