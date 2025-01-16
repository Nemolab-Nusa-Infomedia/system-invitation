import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Ikon Menu dari Feather Icons
import { FaCog, FaLock, FaEye } from "react-icons/fa"; // Ikon dari FontAwesome
import { PiShareFatFill } from "react-icons/pi";
import Modal from "./Modal";
import Form from "./Form";
import FormBottomNav from "./FormBottomNav";

export default function BottomNavbar() {
    // State untuk membuka modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    // Fungsi untuk membuka modal
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
        setActiveButton(content); // Set button yang aktif
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setIsModalOpen(false);
        setActiveButton(""); // Reset aktif button saat modal ditutup
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 ">
            <section
                id="bottom-navigation"
                className="mx-auto flex text-[12px] justify-between w-fit items-center bg-white rounded-xl shadow-xl overflow-hidden h-14 mb-3 text-gray-800"
            >
                <button
                    onClick={() => openModal("Menu")}
                    className={`flex flex-col justify-center px-4 items-center hover:text-gray-400 transition-colors h-full flex-1 duration-300 `}
                >
                    <FiMenu size={24} className="flex-shrink-0" />
                    <span>Menu</span>
                </button>
                <button
                    onClick={() => openModal("Pengaturan")}
                    className={`flex flex-col justify-center px-4 items-center hover:text-gray-400 transition-colors h-full flex-1 duration-300`}
                >
                    <FaCog size={24} className="flex-shrink-0" />
                    <span>Pengaturan</span>
                </button>
                <button
                    onClick={() => openModal("Pratinjau")}
                    className={`flex flex-col justify-center px-4 items-center hover:text-gray-400 transition-colors h-full flex-1 duration-300 `}
                >
                    <FaEye size={24} className="flex-shrink-0" />
                    Pratinjau
                </button>
                <button
                    onClick={() => openModal("Aktivasi")}
                    className={`flex flex-col justify-center px-4 items-center hover:text-gray-400 transition-colors h-full flex-1 duration-300 `}
                >
                    <FaLock size={24} className="flex-shrink-0" />
                    <span>Aktivasi</span>
                </button>
                <button
                    onClick={() => openModal("Sebar")}
                    className={`flex flex-col justify-center px-4 items-center hover:text-gray-400 transition-colors h-full flex-1 duration-300 `}
                >
                    <PiShareFatFill size={24} className="flex-shrink-0" />
                    Sebar
                </button>
            </section>

            {/* Modal */}
            <div className=" lg:w-1/3 bg-slate-400 mx-auto">
                <Modal
                    show={isModalOpen}
                    onClose={closeModal}
                    ml={"-ml-[0rem]"}
                >
                    {/* Menu */}
                    <FormBottomNav></FormBottomNav>
                    {/* Menu end */}

                    {/* Settings */}

                    {/* Setting end */}

                    {/* Preview */}

                    {/* Preview end */}

                    {/* Aktivasi */}

                    {/* Aktivasi end */}

                    {/* Share */}
                </Modal>
            </div>
            {/* Modal */}
        </div>
    );
}
