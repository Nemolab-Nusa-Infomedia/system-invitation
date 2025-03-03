import React, { useState, useRef } from "react";
import { listNav, listMenuNav, listPengaturanNav } from "@/lib";
import { FaCopy } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import Modal from "./Modal";
import { PiShareFatFill } from "react-icons/pi";

import "/resources/css/scrollbar.css";

export default function BottomNavbar() {
    // State untuk membuka modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [isCopy, setIsCopy] = useState(false);
    const textAreaRef = useRef(null);

    // Fungsi untuk membuka modal
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCopy = () => {
        // Fokus pada textarea dan pilih teks
        textAreaRef.current.select();
        textAreaRef.current.setSelectionRange(0, 99999); // Untuk mobile devices

        // Salin teks ke clipboard
        document.execCommand("copy");

        setIsCopy(true);

        setTimeout(() => {
            setIsCopy(true);
            setIsCopy(false);
        }, 1000);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-10">
            <section
                id="bottom-navigation"
                className="mx-auto flex text-[12px] justify-between w-fit items-center bg-white rounded-xl shadow-xl overflow-hidden h-14 mb-3 text-gray-800"
            >
                {listNav.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => openModal(item.name)}
                        className={`flex flex-col justify-center px-4 items-center hover:text-gray-400 transition-colors h-full flex-1 duration-300 `}
                    >
                        <item.icon size={24} className="flex-shrink-0" />
                        <span>{item.name}</span>
                    </button>
                ))}

                <Link
                    href=""
                    className={`flex flex-col justify-center px-4 items-center hover:text-gray-400 transition-colors h-full flex-1 duration-300 `}
                >
                    <PiShareFatFill size={24} className="flex-shrink-0" />
                    <span>Sebar</span>
                </Link>
            </section>

            {/* Modal */}
            <div className=" lg:w-1/3 bg-slate-400 mx-auto text-gray-700">
                <Modal
                    show={isModalOpen}
                    onClose={closeModal}
                    ml={"-ml-[0rem]"}
                >
                    {/* Menu */}

                    <h1 className="text-lg mb-1">{modalContent}</h1>
                    <div className=" flex flex-col py-3 pr-3  border-y h-[30rem] overflow-scroll scrollbar-vertical rounded-md ">
                        {modalContent === "Menu" &&
                            listMenuNav.map((item, index) => (
                                <Link
                                    key={index}
                                    href=""
                                    className="border-b flex py-3 hover:bg-gray-100 rounded-lg"
                                >
                                    <div className="icon flex justify-center items-center w-12">
                                        <item.icon size={30} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg">
                                            {item.name}
                                        </span>
                                        <p className="text-[10px] text-gray-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}

                        {/* Menu end */}

                        {/* Settings */}
                        {modalContent === "Pengaturan" &&
                            listPengaturanNav.map((item, index) => (
                                <Link
                                    key={index}
                                    href=""
                                    className="border-b flex py-3 hover:bg-gray-100 rounded-lg"
                                >
                                    <div className="icon flex justify-center items-center w-12">
                                        <item.icon size={30} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg">
                                            {item.name}
                                        </span>
                                        <p className="text-[10px] text-gray-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        {/* Setting end */}

                        {/* Preview */}
                        {modalContent === "Pratinjau" && (
                            <section className="flex flex-col gap-5 text-[14px]">
                                <div className="bg-blue-200 p-2 rounded-lg ">
                                    Berhasil menyimpan silahkan preview atau
                                    sebarkan undangan
                                </div>

                                <div className="bg-yellow-200 flex p-2 rounded-lg justify-between items-center">
                                    <p className=" w-80">
                                        <strong>peringatan</strong>: Aktifkan
                                        undangan sebelum disebar. Klik tombol
                                        <strong> Aktifkan</strong> pada bilah
                                        menu
                                    </p>
                                    <button className="bg-blue-500 h-fit py-2 px-3 rounded-lg hover:bg-blue-700 text-white tracking-wider">
                                        Aktifkan
                                    </button>
                                </div>

                                <div className="link">
                                    <div className="generate-link flex flex-col gap-2">
                                        <label htmlFor="">
                                            Hasil Link Undangan
                                            <Link
                                                href=""
                                                className="text-blue-600"
                                            >
                                                {" "}
                                                Edit Link
                                            </Link>
                                        </label>
                                        <div className="flex ">
                                            <textarea
                                                ref={textAreaRef}
                                                name=""
                                                id=""
                                                cols={1}
                                                readOnly
                                                className="rounded-lg border-blue-600 border-[3px] flex-1 text-blue-600 selection:bg-none "
                                                value="https://id.indoinvite.com/s/734237/undangan?kpd=Bapak+Budi"
                                            ></textarea>

                                            <div className="mx-2 bg-inherit rounded flex items-center  gap-1 relative">
                                                <div
                                                    className="cursor-pointer  selection:bg-none"
                                                    onClick={handleCopy}
                                                >
                                                    <FaCopy size={20} />
                                                    <p>Copy</p>
                                                </div>

                                                <div
                                                    className={`absolute -top-3 rounded-r-lg rounded-tl-lg bg-slate-300 p-1 text-xs ${
                                                        isCopy
                                                            ? "flex"
                                                            : "hidden"
                                                    }`}
                                                >
                                                    Copied
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="link-alternatif">
                                    <span>Link Alternatif</span>
                                    <div className="link"></div>
                                    <div className="ekspor"></div>
                                    <div className="custom-ekspor"></div>
                                </div>
                            </section>
                        )}
                        {/* Preview end */}

                        {/* Aktivasi */}
                        {modalContent === "Aktivasi" && (
                            <section>
                                <div className="bg-blue-200 p-2 rounded-lg">
                                    <strong>Info</strong>: Setelah aktif
                                    undangan masih bisa di Edit kembali, tanpa
                                    batasan waktu!
                                </div>
                            </section>
                        )}
                        {/* Aktivasi end */}
                    </div>
                </Modal>
            </div>
            {/* Modal */}
        </div>
    );
}
