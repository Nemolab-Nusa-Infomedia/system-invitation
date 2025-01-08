import React, { useEffect, useState } from "react";
import logo from "/public/asset-landing-page/logo.svg";
import { menuItems } from "@/lib";
import Button from "./Button";

function Navbar() {
    const [activeHash, setActiveHash] = useState(""); // State untuk hash aktif

    // Update hash aktif saat hash berubah atau saat scroll
    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || "#beranda"); // Default ke #beranda jika hash kosong
        };

        const handleScroll = () => {
            menuItems.forEach((menu) => {
                const element = document.querySelector(menu.href);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (
                        rect.top <= window.innerHeight / 2 &&
                        rect.bottom >= window.innerHeight / 2
                    ) {
                        setActiveHash(menu.href);
                    }
                }
            });
        };

        // Tambahkan event listener untuk perubahan hash dan scroll
        window.addEventListener("hashchange", handleHashChange);
        window.addEventListener("scroll", handleScroll);

        // Panggil sekali saat komponen pertama kali dimuat
        handleHashChange();
        handleScroll();

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="max-h-[126px] flex justify-between w-full items-center py-5 px-[110px] fixed bg-white shadow-md z-50">
            <div>
                <img src={logo} alt="logo" className="w-[180px]" />
            </div>
            <div className="flex gap-[22px] justify-center items-center">
                {menuItems.map((menu) => (
                    <a
                        key={menu.href}
                        href={menu.href}
                        className={`relative font-poppins font-bold  text-xl pb-1 text-black transition-all
                            ${
                                activeHash === menu.href
                                    ? "text-[#FF61A2] after:w-full"
                                    : "text-gray-600 hover:text-[#FF61A2] after:w-0"
                            }
                            after:absolute after:h-[3px] after:bg-[#A31643] after:left-0 after:bottom-[-2px]
                            after:transition-all after:duration-300 hover:after:w-full `}
                    >
                        {menu.label}
                    </a>
                ))}
            </div>
            <Button
                text={"Coba Template Gratis"}
                link={"/"}
                button_class="border-2 border-[#FF61A2] py-2 px-6 bg-[#FF61A2] text-[#ffffff] transition-all hover:bg-[#ffffff] hover:text-[#FF61A2]"
                text_class="font-poppins font-medium text-base"
            />
        </nav>
    );
}

export default Navbar;
