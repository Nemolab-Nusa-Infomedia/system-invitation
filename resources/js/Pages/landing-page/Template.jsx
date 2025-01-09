import Button from "@/Components/landing-page/Button";
import CardTemplate from "@/Components/landing-page/CardTemplate";
import { NAV_TEMPLATE } from "@/lib";
import React, { useState } from "react";

function Template() {
    const [activeNav, setActiveNav] = useState("semua");

    const handleNavClick = (key) => {
        setActiveNav(key);
    };

    return (
        <section
            className="flex relative justify-center py-32 w-full sm:scroll-mt-10"
            id="template"
        >
            <div className="flex flex-col max-w-[1440px] w-full min-h-[500px] px-[69px] gap-[44px]">
                <div className="font-poppins w-full flex flex-col gap-[13px] items-center">
                    <h1 className="font-bold text-3xl leading-[46.5px]">
                        Temukan Inspirasi dari Beragam Template Kami
                    </h1>
                    <p className="font-medium text-[20px] leading-[30px]">
                        Lihat preview template kami dan temukan desain yang
                        paling cocok untuk kebutuhan Anda.
                    </p>
                    <div className="mt-6 flex gap-[10px]">
                        {NAV_TEMPLATE.map((item) => (
                            <div onClick={() => handleNavClick(item.key)}>
                                <Button
                                    text={item.label}
                                    button_class={`p-4 text-[#ffffff] transition-all hover:bg-[#a31543]  ${
                                        activeNav === item.key
                                            ? "bg-[#FF61A2]"
                                            : "bg-[#EEEEEE]"
                                    }`}
                                    text_class="font-poppins font-medium text-base"
                                />
                            </div>
                        ))}

                        <Button
                            text={"Acara Lainya"}
                            link={"/"}
                            button_class="p-4 bg-[#EEEEEE] text-[#ffffff] transition-all hover:bg-[#a31543]"
                            text_class="font-poppins font-medium text-base"
                        />
                    </div>
                </div>
                <div className="flex w-full justify-between gap-9 mt-5">
                    <CardTemplate />
                    <CardTemplate />
                    <CardTemplate />
                </div>
            </div>
        </section>
    );
}

export default Template;
