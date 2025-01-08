import React, { useEffect, useState } from "react";
import logo from "/public/asset-landing-page/logo.png";
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
        <nav className="max-h-[90px] flex justify-between w-full items-center py-5 px-24 fixed bg-white shadow-md z-50">
            <div>
                <img src={logo} alt="logo" className="w-20" />
            </div>
            <div className="flex gap-[22px] justify-center items-center">
                {menuItems.map((menu) => (
                    <a
                        key={menu.href}
                        href={menu.href}
                        className={`relative font-poppins font-medium text-black transition-all
                            ${
                                activeHash === menu.href
                                    ? "text-[#F72585] after:w-full"
                                    : "text-gray-600 hover:text-[#F72585] after:w-0"
                            }
                            after:absolute after:h-[2px] after:bg-[#F72585] after:left-0 after:bottom-[-2px]
                            after:transition-all after:duration-300 hover:after:w-full`}
                    >
                        {menu.label}
                    </a>
                ))}
                <Button
                    text_class=""
                    text={"Masuk"}
                    link={"/"}
                    button_class="border-2 border-[#F72585] text-[#F72585] py-2 px-6 bg-[#ffffff] transition-all hover:text-[#ffffff] hover:bg-[#F72585]"
                />
                <Button
                    text={"Coba Template Gratis"}
                    link={"/"}
                    button_class="border-2 border-[#F72585] py-2 px-6 bg-[#F72585] text-[#ffffff] transition-all hover:bg-[#ffffff] hover:text-[#F72585]"
                />
            </div>
        </nav>
    );
}

export default Navbar;
