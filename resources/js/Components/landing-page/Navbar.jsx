import React, { useEffect, useState } from "react";
import logo from "/public/asset-landing-page/logo.svg";
import { menuItems } from "@/lib";
import Button from "./Button";
import Menu from "./Menu";

function Navbar() {
    const [activeHash, setActiveHash] = useState("");
    const [clickNav, setClickNav] = useState(false);

    const handleNavClcik = () => {
        setClickNav(!clickNav);
    };

    // Update hash aktif saat hash berubah atau saat scroll
    useEffect(() => {
        const handleHashChange = () => {
            const currentPath = window.location.pathname;
            const currentHash = window.location.hash;

            // Periksa hash atau path aktif
            const activeMenu = menuItems.find((menu) =>
                menu.href.startsWith("#")
                    ? currentHash === menu.href
                    : currentPath.includes(menu.href)
            );

            setActiveHash(activeMenu ? activeMenu.href : "#beranda"); // Default ke #beranda
        };

        const handleScroll = () => {
            menuItems.forEach((menu) => {
                if (menu.href.startsWith("#")) {
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
                }
            });
        };

        window.addEventListener("hashchange", handleHashChange);
        window.addEventListener("scroll", handleScroll);

        handleHashChange();
        handleScroll();

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className="max-h-[126px] flex justify-between w-full items-center lg:py-5 p-[21px] lg:px-[26px] xl:px-[110px] fixed bg-white shadow-md z-50">
                <a href="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[143px] lg:w-[180px]"
                    />
                </a>
                <div className=" gap-[22px] justify-center hidden lg:flex items-center">
                    {menuItems.map((menu) => (
                        <a
                            key={menu.href}
                            href={`/${menu.href}`}
                            className={`relative font-poppins font-bold text-base lg:text-xl pb-1 transition-all
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
                    link={"/login"}
                    button_class="p-4 bg-[#FF61A2] text-[#ffffff] transition-all hover:bg-[#a31543] hidden lg:block"
                    text_class="font-poppins font-medium text-base"
                />
                {clickNav ? (
                    <img
                        src="/asset-landing-page/hamburger-menu.svg"
                        className="block lg:hidden"
                        onClick={handleNavClcik}
                        alt=""
                    />
                ) : (
                    <img
                        src="/asset-landing-page/x.svg"
                        className="block lg:hidden w-[25px] h-auto"
                        alt=""
                        onClick={handleNavClcik}
                    />
                )}
            </nav>
            <div
                className={`fixed top-0 left-0 w-[65%] lg:hidden h-full bg-white shadow-lg pt-[126px] px-4 shadow-custom transition-transform duration-700 z-40 ${
                    clickNav ? "-translate-x-full" : "translate-x-0"
                }`}
            >
                <Menu activeHash={activeHash} />
            </div>
        </>
    );
}

export default Navbar;
