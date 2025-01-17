import React, { useEffect } from "react";
import "../css/main.css";
import Aos from "aos";
import dad from "/public/invitation-asset/khitan-v1/item-1.png";

function KhitanV1() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <body>
            <div className="flex justify-center items-center mx-auto w-full ">
                <div className="cover flex flex-col items-center justify-center lg:w-1/3">
                    <img
                        src="/public/invitation-asset/khitan-v1/item-1.png"
                        className="item-image-1"
                        alt="Item 1"
                    />
                    <img
                        src="/public/invitation-asset/khitan-v1/item-2.png"
                        className="item-image-2"
                        alt="Item 2"
                    />
                    <img
                        src="/public/invitation-asset/khitan-v1/item-3.png"
                        className="item-image-3"
                        alt="Item 3"
                    />
                    <img
                        src="/public/invitation-asset/khitan-v1/item-4.png"
                        className="item-image-4"
                        alt="Item 4"
                    />
                    <img
                        src="../../asset/img/undangan-v3/item-5.png"
                        className="item-image-5"
                        alt="Item 5"
                    />

                    <div className="text-center py-2 mb-4">
                        <h3
                            data-aos="zoom-in-up"
                            data-aos-duration="3000"
                            className="text-xl font-bold"
                        >
                            Undangan <br /> walimatul Khitan
                        </h3>
                    </div>

                    <div
                        className="image-cover-wrapper mb-5"
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                    >
                        <img
                            src="../../asset/img/undangan-v3/item-6.png"
                            className="image-cover-border"
                            alt="Cover Border"
                        />
                        <div className="image-cover">
                            <img
                                src="../../asset/img/undangan-v3/people-2.png"
                                className="image-cover-people"
                                alt="People"
                            />
                        </div>
                    </div>

                    <div
                        className="text-center py-2"
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                    >
                        <h3 className="text-lg font-semibold">
                            Raden Adhitama
                        </h3>

                        <p className="mt-2">
                            Kepada Yth; <br /> Bapak/Ibu/Saudara/i
                        </p>
                        <p className="font-bold">Vindra Arya Yulian</p>

                        <a
                            href="content/index.html"
                            className="btn bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center mt-4"
                        >
                            <i className="fa-regular fa-envelope-open mr-2"></i>{" "}
                            Buka Undangan
                        </a>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default KhitanV1;
