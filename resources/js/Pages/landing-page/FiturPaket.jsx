import React from "react";
import PaketCard from "@/Components/landing-page/PaketCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../../css/app.css";
import { Paket } from "@/lib";

const FiturPaket = () => {
    return (
        <section className="flex relative justify-center w-full">
            <div className="max-w-[1440px] w-full px-[18px] lg:px-[90px] pt-[97px]">
                <div className="text-start max-w-[940px]">
                    <h1 className="font-poppins font-bold text-[23px] lg:text-[32px] leading-[34px] lg:leading-[48px]">
                        Temukan Paket Terbaik untuk Anda Sesuaikan dengan
                        Kebutuhan Nikmati Semua Fitur
                    </h1>
                    <p className="font-poppins text-xs lg:text-[18px] leading-[18px] lg:leading-[27px] mt-2">
                        Dapatkan semua fitur terbaik yang kami tawarkan,
                        disesuaikan dengan preferensi dan tujuan Anda.
                    </p>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 justify-around items-center mt-8 w-full gap-5">
                    {Paket.map((items) => (
                        <PaketCard
                            key={items.judul}
                            judul={items.judul}
                            harga={items.harga}
                            durasi={items.durasi}
                            deskripsi={items.deskripsi}
                            href={items.href}
                            fitur={items.fitur}
                        />
                    ))}
                </div>

                {/* Mobile Carousel dengan Swiper */}
                <div className="lg:hidden mt-8">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass:
                                "swiper-pagination-bullet-active",
                        }}
                        className="mySwiper relative"
                    >
                        {Paket.map((items) => (
                            <SwiperSlide key={items.judul}>
                                <div className="pb-12">
                                    <PaketCard
                                        judul={items.judul}
                                        harga={items.harga}
                                        durasi={items.durasi}
                                        deskripsi={items.deskripsi}
                                        href={items.href}
                                        fitur={items.fitur}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default FiturPaket;
