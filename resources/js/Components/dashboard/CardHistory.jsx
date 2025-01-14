// src/components/OrderCard.jsx
import React from "react";
import undangan from "/public/assets-dashboard/historyview.png";

const CardHistory = ({ status, date, cancelDate, price }) => {
    // Warna berdasarkan status
    const statusColors = {
        Dibatalkan: "bg-[#CE1B1B]",
        Selesai: "bg-[#74CE1B]",
    };

    return (
        <div className="flex border-4 gap-5 border-[#763201] rounded-md p-4 mb-4 shadow-md">
            {/* Gambar Produk */}
            <div className="w-1/3 gap-[50px] rounded-[20px]">
                <div className="w-[479px] h-[264px] rounded-[20px]">
                    <img src={undangan} alt="Product" className="rounded-md" />
                </div>
            </div>

            {/* Detail Produk */}
            <div className="flex flex-col w-[633px] gap-[17px] shadow-md justify-between items-center">
                <div className=" pl-5">
                    {/* Status */}
                    <div
                        className={`inline-block px-3 py-1 text-white text-sm rounded-md ${
                            statusColors[status] || "bg-gray-500"
                        }`}
                    >
                        {status}
                    </div>

                    {/* Detail Pesanan */}
                    <h3 className="flex flex-col font-poppins font-bold text-[24px] leading-[36px] gap-[17px]">
                        Wedding Produk
                    </h3>
                    <p className="font-poppins font-medium text-[16px] leading-[24px]">
                        Tanggal Pesanan: {date}
                    </p>
                    {status === "Dibatalkan" && (
                        <p className="font-poppins font-medium text-[16px] leading-[24px]">
                            Tanggal Dibatalkan: {cancelDate}
                        </p>
                    )}
                    <p className="font-poppins  font-bold text-[16px] leading-[24px]">
                        Total: Rp. {price}
                    </p>

                    {/* Tombol Detail */}
                    <button className="w-full mt-4 rounded-md pt-[8px] pr-[10px] pb-[8px] pl-[10px] gap-[10px] bg-[#8B4513] text-white hover:bg-[#8B4513]">
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardHistory;
