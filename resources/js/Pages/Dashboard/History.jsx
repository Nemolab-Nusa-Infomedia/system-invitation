import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import Footer from "@/Components/dashboard/Footer";
import CardHistory from "@/Components/dashboard/CardHistory";
import troll from "/public/assets-dashboard/troll.png";
import history from "/public/assets-dashboard/history.png";
import tanggal from "/public/assets-dashboard/tanggal.png";

function History() {
    return (
        <AuthenticatedLayout>
            <main>
                <div className="bg-white p-5 shadow-md flex justify-between items-center">
                    {/* Buttons */}
                    <div className="flex gap-4">
                        {/* Pesanan Saya */}
                        <button className="flex items-center gap-2 px-4 py-2 border border-yellow-500 rounded-md hover:bg-yellow-100">
                            <img
                                src={troll}
                                className="tect-black w-[40px] h-[40px]"
                            />
                            <span className="font-semibold">Pesanan Saya</span>
                        </button>

                        {/* History Pesanan */}
                        <button className="flex items-center gap-2 px-4 py-2 border border-yellow-500 bg-yellow-100 rounded-md hover:bg-yellow-200">
                            <img
                                src={history}
                                className="tect-black w-[40px] h-[40px]"
                            />
                            <span className="font-semibold">
                                History Pesanan
                            </span>
                        </button>
                    </div>

                    {/* Sort Filter */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src={tanggal} className="tect-black" />
                        <span className="text-sm font-medium">
                            Urutkan berdasarkan tanggal
                        </span>
                    </div>
                </div>
                {/* BORDERS */}
                <div className="bg-white">
                    <div className="p-5">
                        <CardHistory
                            status="Dibatalkan"
                            date="12 September 2024"
                            cancelDate="12 September 2024"
                            price="150.000"
                        />
                        <CardHistory
                            status="Dibatalkan"
                            date="12 September 2024"
                            cancelDate="12 September 2024"
                            price="150.000"
                        />
                        <CardHistory
                            status="Selesai"
                            date="12 September 2024"
                            cancelDate="12 September 2024"
                            price="150.000"
                        />
                    </div>
                </div>
                <div className="bg-white">
                    <Footer />
                </div>
            </main>
        </AuthenticatedLayout>
    );
}

export default History;
