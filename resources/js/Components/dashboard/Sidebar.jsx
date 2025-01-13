import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import logo from "/public/assets-dashboard/logo-dashboard.svg";
import homeIcon from "/public/assets-dashboard/home-icon.svg";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("");

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const getUrlNavbar = () => {
        const path = window.location.pathname.split("/").pop();
        return path === "" ? "dashboard" : path;
    };

    useEffect(() => {
        setActiveTab(getUrlNavbar());
    }, [getUrlNavbar]);

    return (
        <div className="flex md:fixed ">
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity  md:hidden ${
                    isOpen ? "block" : "hidden"
                }`}
                onClick={toggleSidebar}
            ></div>
            <div
                className={`fixed  md:w-[36,6px] w-64 sm:w-64 h-[780px] md:rounded-[12px] bg-white shadow-lg transition-transform transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0`}
            >
                <div className="flex items-center justify-between p-4 md:p-0 border-b md:border-none">
                    <button onClick={toggleSidebar} className="md:hidden">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <nav className="mt-4 flex flex-col justify-center px-5">
                    <Link
                        href=""
                        className="px-4 py-2 text-gray-700  flex justify-center"
                    >
                        <img src={logo} alt="" width={200} />
                    </Link>
                    <div className="flex flex-col   justify-center w-full mt-[53px]">
                        <Link
                            href=""
                            className="w-full h-[60px] bg-[#E2B933] rounded-[12px] px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center gap-3 "
                        >
                            <img
                                src={homeIcon}
                                alt=""
                                width={22.5}
                                height={22.5}
                            />
                            <span className="text-[20px] font-[500] text-black">
                                Beranda
                            </span>
                        </Link>
                        <Link
                            href=""
                            className="w-full h-[60px]  rounded-[12px] px-4 py-2 text-gray-700 hover:bg-[#E2B933] flex items-center gap-3 "
                        >
                            <img
                                src={homeIcon}
                                alt=""
                                width={22.5}
                                height={22.5}
                            />
                            <span className="text-[20px] font-[500] text-black">
                                Pesanan Saya
                            </span>
                        </Link>
                        <Link
                            href=""
                            className="w-full h-[60px] hover:bg-[#E2B933] rounded-[12px] px-4 py-2 text-gray-700 flex items-center gap-3 "
                        >
                            <img
                                src={homeIcon}
                                alt=""
                                width={22.5}
                                height={22.5}
                            />
                            <span className="text-[20px] font-[500] text-black">
                                Beranda
                            </span>
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Hamburger Button */}
            <button onClick={toggleSidebar} className="md:hidden p-4">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {/* Main Content */}
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-bold">Main Content</h1>
                {/* Konten utama Anda di sini */}
            </div>
        </div>
    );
};

export default Sidebar;
