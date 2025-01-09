import React from "react";
import PaketCard from "@/Components/landing-page/PaketCard";

function FiturPaket() {
    return (
        <section className="flex relative justify-center w-full">
            <div className="max-w-[1440px] w-full px-[90px] pt-[97px]">
                <div className="text-start w-[940px]">
                    <h1 className="font-poppins font-bold text-[32px] leading-[48px]">
                        Temukan Paket Terbaik untuk Anda Sesuaikan dengan
                        Kebutuhan Nikmati Semua Fitur
                    </h1>
                    <p className="font-poppins text-[18px] leading-[27px] mt-2">
                        Dapatkan semua fitur terbaik yang kami tawarkan,
                        disesuaikan dengan preferensi dan tujuan Anda.
                    </p>
                </div>
                <div className="grid grid-cols-4 justify-around items-center mt-8 w-full gap-5 ">
                    <PaketCard />
                    <PaketCard />
                    <PaketCard />
                    <PaketCard />
                </div>
            </div>
        </section>
    );
}

export default FiturPaket;
