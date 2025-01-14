import React from "react";
import "../css/main.css";

function WeddingV1() {
    return (
        <div className="">
            <div className="lg:w-1/3  mx-auto">
                <div className="cover items-center justify-center flex ">
                    <img
                        src="/invitation-asset/undangan-v1/item-1.png"
                        className="item-image-1"
                        alt="coba"
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        className="item-image-2"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-2.png"
                        className="item-image-3"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-1.png"
                        className="item-image-4"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-1.png"
                        className="item-image-5"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-3.png"
                        className="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        className="item-image-7"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-4.png"
                        className="item-image-8"
                        alt=""
                    />

                    <div className="flex flex-col items-center cover-content text-center p-3 animate-fadeInUp border">
                        <img
                            src="/invitation-asset/undangan-v1/gunungan.png"
                            className="mb-4"
                            width="120px"
                            alt=""
                        />
                        <div className="flex flex-col gap-2 mb-4">
                            <p>THE WEDDING OF</p>
                            <h3>
                                Rama <b>&</b> Shinta
                            </h3>
                            <h5>19 . 09 . 2024</h5>
                            <p>
                                Kepada Yth; <br /> Bapak/Ibu/Saudara/i
                            </p>
                            <span>Vindra Arya Yulian</span>
                        </div>
                        <a
                            href="/dashboard/wedding/edit/content"
                            className="flex btn items-center gap-2 p-2 rounded-md"
                        >
                            <img
                                src="\asset-landing-page\envelope-open.svg"
                                alt=""
                                className="w-5"
                            />
                            Buka Undangan
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeddingV1;
