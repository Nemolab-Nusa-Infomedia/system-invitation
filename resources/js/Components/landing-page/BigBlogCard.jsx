import React from "react";
import image_banner from "/public/asset-landing-page/image.jpg";

function BigBlogCard() {
    return (
        <div className="w-full flex flex-col gap-[10px]">
            <img
                src={image_banner}
                alt="preview"
                className="h-[283] object-contain rounded-2xl"
            />
            <div className="font-poppins flex flex-col gap-[10px]">
                <p className="leading-[18px] text-xs">Oktober 10, 2024</p>
                <h1 className="font-semibold text-[21px] leading-[31px]">
                    Keuntungan Memilih Undangan Digital untuk Pernikahan Anda
                </h1>
                <p className="line-clamp-3 text-xs text-[#818181] leading-[18px]">
                    Undangan pernikahan digital memberikan banyak keuntungan
                    yang tidak dimiliki oleh undangan fisik tradisional. Dengan
                    desain yang bisa disesuaikan secara personal, undangan
                    digital lebih mudah diakses dan dapat dikirimkan langsung
                    melalui berbagai platform seperti email atau media sosial.
                </p>
            </div>
        </div>
    );
}

export default BigBlogCard;
