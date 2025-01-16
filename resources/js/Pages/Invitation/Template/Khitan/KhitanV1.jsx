import React, { useEffect } from "react";
import styles from "../css/khitan-v1/main.module.css"; // Import CSS Module
import Aos from "aos";

function KhitanV1() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="flex justify-center items-center mx-auto w-full">
            <div
                className={`${styles.cover}  flex lg:w-1/3 flex-col items-center justify-center border relative`}
            >
                <img
                    src="/invitation-asset/khitan-v1/item-1.png"
                    className={`${styles.itemImage1} `}
                    alt="Item 1"
                />
                <img
                    src="/invitation-asset/khitan-v1/item-2.png"
                    className={`${styles.itemImage2} `}
                    alt="Item 2"
                />
                <img
                    src="/invitation-asset/khitan-v1/item-3.png"
                    className={styles.itemImage3}
                    alt="Item 3"
                />
                <img
                    src="/invitation-asset/khitan-v1/item-4.png"
                    className={styles.itemImage4}
                    alt="Item 4"
                />
                <img
                    src="/invitation-asset/khitan-v1/item-5.png"
                    className={styles.itemImage5}
                    alt="Item 5"
                />

                <div className="text-center py-2 mb-10">
                    <h3
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                        className="text-xl font-bold"
                    >
                        Undangan <br /> walimatul Khitan
                    </h3>
                </div>

                <div
                    className={styles.imageCoverWrapper}
                    data-aos="zoom-in-up"
                    data-aos-duration="3000"
                >
                    <img
                        src="/invitation-asset/khitan-v1/item-6.png"
                        className={styles.imageCoverBorder}
                        alt="Cover Border"
                    />
                    <div className={`${styles.imageCover} `}>
                        <img
                            src="/invitation-asset/khitan-v1/people-2.png"
                            className={styles.imageCoverPeople}
                            alt="People"
                        />
                    </div>
                </div>

                <div
                    className="text-center py-2 mt-10"
                    data-aos="zoom-in-up"
                    data-aos-duration="3000"
                >
                    <h3 className="text-lg font-semibold">Raden Adhitama</h3>

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
    );
}

export default KhitanV1;
