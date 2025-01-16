import React, { useEffect, useState } from "react";
import "/resources/css/modal.css";
import { IoIosClose } from "react-icons/io";

const Modal = ({ show, onClose, children, ml }) => {
    const [isVisible, setIsVisible] = useState(false); // Mengontrol keberadaan modal di DOM
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        if (show) {
            setIsVisible(true); // Tampilkan modal di DOM
            setAnimationClass("show"); // Tambahkan animasi masuk
            document.body.style.overflow = "hidden"; // Mencegah scroll
        } else if (!show && isVisible) {
            setAnimationClass("hide"); // Tambahkan animasi keluar
            setTimeout(() => setIsVisible(false), 400); // Hapus modal setelah animasi selesai (400ms sesuai CSS)
            document.body.style.overflow = "unset"; // Mengembalikan scroll
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [show, isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className={`modal-overlay lg:w-1/3 mx-auto fixed  bottom-0 z-50 ${animationClass} ${
                ml ? ml : "-ml-[0.75rem]"
            }`}
            onClick={onClose}
        >
            <div className="bg-gray-900/75 lg:w-1/3 fixed h-screen top-0"></div>
            <div
                className={`modal-content w-full h-[35rem] rounded-t-xl  bg-white  ${animationClass}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col py-2 ">
                    <div className=" flex justify-end mb-2">
                        <button
                            className="close-button mr-2 text-black  "
                            onClick={onClose}
                        >
                            <IoIosClose size={30} />
                        </button>
                    </div>
                    <div className="px-4  h-[32.5rem] ">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
