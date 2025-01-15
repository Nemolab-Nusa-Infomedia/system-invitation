import React from "react";
import logo from "/public/asset-landing-page/logo-white.svg";
import arrow_top from "/public/asset-landing-page/arrow-top.svg";
import { footer_kontak, menuItems } from "@/lib";

function Footer() {
    return (
        <section className="flex  justify-center w-full  bg-[#a31543]">
            <div className="max-w-[1440px] w-full flex py-[30px] px-[55px] relative lg:px-[69px] flex-col ">
                <div className="flex flex-col lg:flex-row justify-between gap-5 ">
                    <div className="w-full lg:w-1/2 flex flex-col gap-[10px]">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-[162px] lg:w-[183px]"
                        />
                        <p className="font-poppins font-medium leading-[18px] max-w-[316px] mt-[10px] text-xs text-white">
                            Hadirkan inovasi dalam cara Anda mengundang.
                            platform kreatif untuk membuat undangan digital yang
                            memukau!
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full gap-5 lg:w-1/2 justify-between">
                        <div className="text-white">
                            <h1 className="poppins font-semibold text-lg leading-7 mb-1">
                                Navigasi
                            </h1>
                            {menuItems.map((items) => (
                                <a
                                    className="poppins font-semibold text-base leading-6 "
                                    href={`/${items.href}`}
                                    key={items.label}
                                >
                                    <p>{items.label}</p>
                                </a>
                            ))}
                        </div>
                        {footer_kontak.map((items, index) => (
                            <div
                                className="w-full lg:w-[348px] flex flex-col gap-1 text-white"
                                key={index}
                            >
                                <h1 className="poppins font-semibold text-lg leading-7 mb-1">
                                    {items.title}
                                </h1>
                                {items.info.map((info) => (
                                    <span
                                        className="flex gap-2"
                                        key={info.text}
                                    >
                                        <img
                                            src={`${info.image}`}
                                            alt={info.text}
                                            className="h-[21px] w-[21px] mt-[2px]"
                                        />
                                        <p>{info.text}</p>
                                    </span>
                                ))}
                            </div>
                        ))}
                        <a
                            href="#"
                            className="animate-upDown absolute top-5 right-7"
                        >
                            <div className="bg-white flex justify-center items-center rounded-full w-[60px] h-[60px]">
                                <img src={arrow_top} alt="arrow" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="h-[1px] w-full mt-7 lg:mt-5 bg-white" />
                <div className="flex flex-col lg:flex-row lg:items-center gap-[10px] justify-between w-full mt-6">
                    <div className="text-white">
                        <h1 className="font-poppins font-medium text-[10px] lg:text-xl leading-[15px] lg:leading-[30px]">
                            Copyright © 2024 Logo | Powered by Vibrant Ecosystem
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                            <img
                                src="/asset-landing-page/instagram.svg"
                                alt="instagram"
                            />
                        </span>
                        <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                            <img
                                src="/asset-landing-page/twiteer.svg"
                                alt="facebook"
                            />
                        </span>
                        <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                            <img
                                src="/asset-landing-page/facebook.svg"
                                alt="facebook"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
