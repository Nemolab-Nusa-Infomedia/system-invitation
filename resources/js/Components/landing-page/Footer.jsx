import React from "react";
import logo from "/public/asset-landing-page/loremipsum_logo.png";
import { footer_kontak, menuItems } from "@/lib";

function Footer() {
    return (
        <section className="flex justify-center w-full py-[30px] px-[110px] bg-[#60002C]">
            <div className="max-w-[1440px] w-full flex flex-col">
                <div className="flex justify-between">
                    <div className="max-w-[316px] flex flex-col gap-[10px]">
                        <img src={logo} alt="logo" className="w-[100px]" />
                        <p className="font-poppins font-medium leading-[18px] text-xs text-white">
                            Hadirkan inovasi dalam cara Anda mengundang.
                            platform kreatif untuk membuat undangan digital yang
                            memukau!
                        </p>
                    </div>
                    <div className="text-white">
                        <h1 className="poppins font-semibold text-lg leading-7 mb-1">
                            Navigasi
                        </h1>
                        {menuItems.map((items) => (
                            <a
                                className="poppins font-semibold text-base leading-6 "
                                href={`${items.href}`}
                            >
                                <p>{items.label}</p>
                            </a>
                        ))}
                    </div>
                    {footer_kontak.map((items) => (
                        <div className="w-[348px] flex flex-col gap-1 text-white">
                            <h1 className="poppins font-semibold text-lg leading-7 mb-1">
                                {items.title}
                            </h1>
                            {items.info.map((info) => (
                                <span className="flex gap-2">
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
                </div>
                <div className="h-[1px] w-full mt-5 bg-white" />
                <div className="flex items-center justify-between w-full mt-6">
                    <div className="text-white">
                        <h1 className="font-poppins font-medium text-xl leading-[30px]">
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
