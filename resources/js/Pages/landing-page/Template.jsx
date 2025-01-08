import CardTemplate from "@/Components/landing-page/CardTemplate";
import React from "react";

function Template() {
    return (
        <section
            className="flex relative justify-center bg-[#FFF5E1] w-full"
            id="template"
        >
            <div className="flex flex-col max-w-[1440px] w-full min-h-[500px] py-10 px-[69px] gap-[50px]">
                <div className="w-full flex flex-col gap-[13px] items-center">
                    <h1 className="font-poppins font-bold text-3xl leading-[46.5px]">
                        Temukan Inspirasi dari Beragam Template Kami
                    </h1>
                    <p className="font-poppins font-medium text-xl leading-[30px]">
                        Lihat preview template kami dan temukan desain yang
                        paling cocok untuk kebutuhan Anda.
                    </p>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex justify-center">cek</div>
                    <div className="flex justify-between gap-9">
                        <CardTemplate />
                        <CardTemplate />
                        <CardTemplate />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Template;
