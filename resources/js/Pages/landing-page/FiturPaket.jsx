import React from "react";
import PaketCard from "@/Components/landing-page/PaketCard";
import { paket_gratis, paket_kece, paket_santai, paket_spesial } from "@/lib";

function FiturPaket() {
    return (
        <section className="flex relative justify-center w-full">
            <div className="max-w-[1440px] w-full px-[84px] py-[80px]">
                <div className="text-center">
                    <h1 className="font-poppins font-bold text-[29px] leading-[43.5px]">
                        Semua Paket, Semua Fitur: Pilih Sesuai Kebutuhan Anda!
                    </h1>
                    <p className="font-poppins font-medium text-[19px] leading-[28.5px]">
                        Mudah dan Terjangkau: Pelayanan Ramah, Respon Cepat, dan
                        Desain Undangan Tanpa Repot!
                    </p>
                </div>
                <div className="flex justify-around items-center mt-8 w-full gap-6 ">
                    {/* card start */}
                    <PaketCard paket={paket_gratis} />
                    <PaketCard paket={paket_santai} />
                    <PaketCard paket={paket_kece} />
                    <PaketCard paket={paket_spesial} />
                </div>
            </div>
        </section>
    );
}

export default FiturPaket;
