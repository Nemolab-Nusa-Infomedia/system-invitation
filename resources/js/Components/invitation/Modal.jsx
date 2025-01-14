import React, { useEffect, useState } from "react";
import "/resources/css/modal.css";

const Modal = ({ show, onClose, children }) => {
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
            className={`modal-overlay lg:w-1/3 mx-auto fixed -ml-[0.8rem] bottom-0 z-50 ${animationClass}`}
            onClick={onClose}
        >
            <div className="bg-gray-900/75 lg:w-1/3 fixed h-screen top-0"></div>
            <div
                className="modal-content w-full h-64 bg-fuchsia-500"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col py-2">
                    <button
                        className="close-button self-end mr-5  "
                        onClick={onClose}
                    >
                        X
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
