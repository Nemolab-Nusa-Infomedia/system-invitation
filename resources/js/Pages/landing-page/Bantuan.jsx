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
            <div className="max-w-[1440px] w-full h-[713px] px-[93px] py-[60px] z-10">
                <div className="text-center text-white">
                    <h1 className="font-poppins font-bold text-3xl leading-[43.5px]">
                        Langkah Mudah Memesan Undangan
                    </h1>
                    <p className="font-poppins font-medium text-xl leading-[28.5px]">
                        Ikuti langkah mudah untuk mendapatkan undangan impian
                        Anda.
                    </p>
                </div>
                <div className="mt-14 flex w-full gap-5">
                    <div className="w-1/3 h-[411px] flex flex-col justify-around">
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
                    <div className="w-[300px]">
                        <img
                            src={mockup_phone}
                            alt="mockup phone"
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="w-1/3 h-[411px] flex flex-col justify-around">
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
