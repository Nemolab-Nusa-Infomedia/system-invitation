import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import Footer from "@/Components/dashboard/Footer";
import undangan from "/public/assets-dashboard/undangan.png";

function Detail() {
    return (
        <AuthenticatedLayout>
            <main>
                <div className="flex flex-col bg-white rounded-[10px] pb-10 gap-10">
                    <div className="bg-[#D4AF37] flex flex-col rounded-tl-[10px] rounded-tr-[10px] p-[10px] gap-[10px]">
                        <h2 className="w-[1198px] h-[42px] font-poppins text-white font-semibold text-[28px] leading-[42px] text-center">
                            Detail Pesanan
                        </h2>
                    </div>
                    <div className="flex flex-col w-[1218px] h-[395px] pr-[30px] pl-[30px] gap-[22px]">
                        <div className=" w-[1158px] border-b-2 border-[black] h-[101px] pr-[0] pb-[20px] gap-[3px]">
                            <div className="flex">
                                <h3 className="w-[231px] h-[42px] font-poppins font-bold text-[26px] leading-[45px]">
                                    Indi Rahmadani
                                </h3>
                                <p className="w-[326px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]">
                                    (+62 8572547389)
                                </p>
                            </div>
                            <p className="w-[1158px] h-[36px] font-poppins font-normal text-[24px] leading-[36px]">
                                Jalan Mawar No. 5, RT 001/004 Kec. Bawang, Kota
                                Banjarnegara
                            </p>
                        </div>
                        <div className="mt-6">
                            <div className="flex flex-col items-center sm:flex-row sm:items-start">
                                <img
                                    src={undangan}
                                    alt="Product preview"
                                    className="w-full sm:w-1/3 rounded-lg"
                                />
                                <div className="sm:ml-5 mt-4 sm:mt-0 w-full ">
                                    <h4 className="w-[633px] h-[42px] font-poppins font-bold text-[26px] leading-[42px]">
                                        Wedding Produk - Undangan Digital
                                    </h4>
                                    <p className="w-[633px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]">
                                        No. Pesanan :{" "}
                                        <span className="w-[633px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]">
                                            #19UFDNM2
                                        </span>
                                    </p>
                                    <p className="w-[633px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]">
                                        Status :{" "}
                                        <span className="w-[633px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]">
                                            Sedang Diproses
                                        </span>
                                    </p>
                                    <p className="w-[633px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]">
                                        Estimasi Selesai :{" "}
                                        <span className="w-[633px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]">
                                            20 September 2024
                                        </span>
                                    </p>
                                    <p className="w-[633px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]">
                                        Total :{" "}
                                        <span className="w-[633px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]">
                                            Rp. 100.000
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" pr-[30px] pl-[30px] mt-[10px] flex justify-end space-x-4">
                        <button className="bg-[#CE1B1B] hover:bg-[#CE1B1B] text-white w-[206px] h-[50px] rounded-[10px] p-[10px] gap-[10px]">
                            <span className="w-[186px] h-[30px] font-poppins font-semibold text-[20px] leading-[30px] text-center">
                                Batalkan Pesanan
                            </span>
                        </button>
                        <button className="bg-[#74CE1B] hover:bg-[#74CE1B] text-white w-[255px] h-[50px] rounded-[10px] p-[10px] gap-[10px]">
                            <span className="w-[205px] h-[30px] font-poppins font-semibold text-[20px] leading-[30px] text-center">
                                Konfirmasi Pesanan
                            </span>
                        </button>
                    </div>
                </div>
                {/* footer */}
                <div>
                    <Footer />
                </div>
            </main>
        </AuthenticatedLayout>
    );
}

export default Detail;
