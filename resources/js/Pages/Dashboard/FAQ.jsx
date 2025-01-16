import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import Footer from "@/Components/dashboard/Footer";

function FAQ() {
    const faqs = [
        {
            question: "Ini beneran gratis ?",
            answer: "Ya, layanan ini sepenuhnya gratis untuk digunakan.",
        },
        {
            question: "Kenapa harus diaktifkan ?",
            answer: "Aktivasi diperlukan untuk memastikan layanan dapat digunakan dengan baik.",
        },
        {
            question: "Bagaimana cara mengaktifkan undangan ?",
            answer: "Ikuti langkah-langkah yang diberikan pada halaman aktivasi.",
        },
        {
            question: "THORIQ ABDUL",
            answer: "Ya Itu Saya",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <AuthenticatedLayout>
            <main>
                <div className="flex flex-col gap-10 p-6 px-10 pb-20 bg-white rounded-lg">
                    <h2 className=" left-[674px] font-poppins font-semibold text-[50px] leading-[67.5px] text-center">
                        FAQ
                    </h2>
                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-lg shadow-sm"
                            >
                                <div
                                    className="flex justify-between items-center p-4 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className=" font-poppins font-semibold">
                                        {faq.question}
                                    </h3>
                                    <span
                                        className={`transform transition-transform ${
                                            openIndex === index
                                                ? "rotate-45"
                                                : "rotate-10"
                                        } text-[#4e32ff]`}
                                    >
                                        +
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <div className="p-4 border-t border-gray-300 text-black font-poppins">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </main>
        </AuthenticatedLayout>
    );
}

export default FAQ;
