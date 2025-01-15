import React from "react";
import Card from "@/Components/landing-page/Card";
import user_add from "/public/asset-landing-page/user-add.svg";
import email_search from "/public/asset-landing-page/mail-search.svg";
import dekstop_edit from "/public/asset-landing-page/dekstop-edit.svg";
import text_svg from "/public/asset-landing-page/text.svg";
import wallet from "/public/asset-landing-page/wallet.svg";
import envelope_open from "/public/asset-landing-page/envelope-open.svg";
import mockup_phone from "/public/asset-landing-page/mockup-mobile.png";

function Bantuan() {
    return (
        <section
            className="flex relative justify-center bg-[#FF6FAA] w-full  sm:scroll-mt-32"
            id="bantuan"
        >
            <div className="absolute inset-0 bg-help-section opacity-10" />
            <div className="max-w-[1440px] w-full px-[18px]  lg:px-[93px] py-[60px] z-10">
                <div className="text-center text-white">
                    <h1 className="font-poppins text-[23px] font-bold lg:text-3xl leading-[35px] lg:leading-[43.5px]">
                        Langkah Mudah Memesan Undangan
                    </h1>
                    <p className="font-poppins font-normal lg:font-medium text-base lg:text-xl leading-6 lg:leading-[28.5px]">
                        Pilih Desain Undangan yang Memukau dan Sesuai dengan
                        Tema, Konsep, serta Ciri Khas Acara Anda yang Tak
                        Terlupakan
                    </p>
                </div>
                <div className="mt-14 lg:flex w-full gap-5">
                    <div className="lg:w-1/3 h-[411px] flex flex-col justify-around">
                        <Card
                            image={user_add}
                            class_card="flex-row-reverse text-end"
                            alt="user create"
                            title="Buat Akun"
                            description="Anda dapat membuat akun pribadi atau akun perusahaan"
                        />
                        <Card
                            image={email_search}
                            alt="search"
                            class_card="flex-row-reverse text-end"
                            title="Temukan Acaranya"
                            description="Cari acara yang ingin Anda buat undangannya."
                        />
                        <Card
                            image={dekstop_edit}
                            alt="template"
                            class_card="flex-row-reverse text-end"
                            title="Pilih template desain"
                            description="Pilih dari berbagai template yang tersedia."
                        />
                    </div>
                    <div className="w-full flex justify-center lg:w-1/3">
                        <img
                            src={mockup_phone}
                            alt="mockup phone"
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="lg:w-1/3 h-[411px] flex flex-col justify-around">
                        <Card
                            image={text_svg}
                            alt="text"
                            title="Sesuaikan teks"
                            description="Edit teks sesuai kebutuhan Anda."
                        />
                        <Card
                            image={wallet}
                            alt="wallet"
                            title="Bayar online"
                            description="Lakukan pembayaran secara online untuk memproses pesanan."
                        />
                        <Card
                            image={envelope_open}
                            alt="env_open"
                            title="Undangan Anda sudah Tayang!"
                            description="Undangan siap untuk dibagikan."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bantuan;
