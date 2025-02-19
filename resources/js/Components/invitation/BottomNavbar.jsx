import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaCog, FaLock, FaEye } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import Modal from "./Modal";
import "/resources/css/scrollbar.css";

export default function BottomNavbar() {
    // State untuk membuka modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    // Fungsi untuk membuka modal
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const listNav = [
        {
            name: "Menu",
            icon: FiMenu,
        },
        {
            name: "Pengaturan",
            icon: FaCog,
        },
        {
            name: "Pratinjau",
            icon: FaEye,
        },
        {
            name: "Aktivasi",
            icon: FaLock,
        },
        {
            name: "Sebar",
            icon: PiShareFatFill,
        },
    ];

    const listMenuNav = [
        {
            icon: FaHome,
            menuName: "Dashboard Admin",
            description: "Lihat daftar acara yang dibuat dan keloka akun anda",
        },
        {
            icon: FaHome,
            menuName: "Buat Acara Baru",
            description: "Ulang buat acara untuk hasil yang lebih fresh",
        },
        {
            icon: FaHome,
            menuName: "Laporan Kehadiran",
            description:
                "Lihat siapa yang mengkonfirmasi hadir dan balas ucapannya",
        },
        {
            icon: FaHome,
            menuName: "Laporan QRCode Buku Tamu",
            description:
                "Lihat siapa yang telah mengisi buku tamu di acara annda",
        },
        {
            icon: FaHome,
            menuName: "Laporan Sebar Undangan",
            description:
                "Lihat berapa orang yang melihat undangan dan laporan lainnya",
        },
        {
            icon: FaHome,
            menuName: "Laporan Kado Fisik",
            description:
                "Lihat tamu undangan yang memberikan kado fisik ke acara anda",
        },
        {
            icon: FaHome,
            menuName: "Laporan Kado Virtual",
            description:
                "Lihat tamu undangan yang memberikan kado virtual ke acara anda",
        },
        {
            icon: FaHome,
            menuName: "Masukkan dan Saran",
            description:
                "Berikan masukkan & saran untuk kami bisa terus berkembang dan melayani anda",
        },
    ];
    // Pengaturan
    const listMenuPengaturan = [
        {
            icon: FaHome,
            menuName: "Komponen Undangan",
            description:
                "Ubah urutan undangan atau sembunyikan komponen yang ada",
        },
        {
            icon: FaHome,
            menuName: "Tema",
            description: "Ubah tema undangan tanpa batas",
        },
        {
            icon: FaHome,
            menuName: "Musik",
            description: "Ubah musik atau upload musik Anda sendiri",
        },
        {
            icon: FaHome,
            menuName: "Warna & Font Tema",
            description: "Ubah warna dan jenis font sesuai selera Anda",
        },
        {
            icon: FaHome,
            menuName: "Foto Sampul",
            description: "Ubah fot sampul pada undangan",
        },
        {
            icon: FaHome,
            menuName: "Sampul Depan",
            description: "Sesuaikan tulisan pada sampul depan undangan",
        },
        {
            icon: FaHome,
            menuName: "Custom Form Kehadiran",
            description: "Tambahkan isian form baru pada form kehadiran",
        },
        {
            icon: FaHome,
            menuName: "Auto Scroll",
            description: "Sesuaikan fitur Auto Scroll pada undangan",
        },
        {
            icon: FaHome,
            menuName: "Tampilan WhatsApp",
            description:
                "Sesuaikan preview undangan ketika disebar ke sosial media lainnya",
        },
        {
            icon: FaHome,
            menuName: "Kado Fisik",
            description: "Pilih kado fisik yang akan ditampilkan pada undangan",
        },
        {
            icon: FaHome,
            menuName: "Notifikasi",
            description:
                "Atur notifikasi ketika anda yang memberikan konfirmasi kehadiran",
        },
        {
            icon: FaHome,
            menuName: "Pengaturan Lainnya",
            description: "Lihat pengaturan lainnya di undangan",
        },
    ];

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
                    <div className=" flex flex-col p-3 border-y h-[30rem] overflow-scroll scrollbar-vertical rounded-md ">
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
                                            {item.menuName}
                                        </span>
                                        <p className="text-[10px] text-gray-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}

                        {/* Menu end */}

                        {/* Settings */}

                        {/* Setting end */}

                        {/* Preview */}

                        {/* Preview end */}

                        {/* Aktivasi */}

                        {/* Aktivasi end */}

                        {/* Share */}
                    </div>
                </Modal>
            </div>
            {/* Modal */}
        </div>
    );
}
