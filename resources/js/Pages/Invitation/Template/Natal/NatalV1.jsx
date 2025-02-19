import React from "react";
import "../css/natal-v1/main.css";

function NatalV1() {
    return (
        <div>
            <audio hidden autoPlay loop>
                <source
                    src="/audio/Nothings Gonna Change My Love For You.mp3"
                    type="audio/mp3"
                />
            </audio>

            <div className="flex w-1/3 mx-auto justify-center">
                <div
                    className="cover w-full  items-center justify-center flex"
                    style={{
                        backgroundImage:
                            "url('/invitation-asset/natal-v1/background-section.jpg')",
                    }}
                >
                    <img
                        data-aos="zoom-in-down"
                        data-aos-duration="3000"
                        src="/invitation-asset/natal-v1/item-1.png"
                        className="item-image-1"
                        alt=""
                    />
                    <img
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                        src="/invitation-asset/natal-v1/item-2.png"
                        className="item-image-2"
                        alt=""
                    />

                    <div
                        className="cover-content flex flex-col items-center gap-3 text-center p-2 "
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                    >
                        <p>You are invited to</p>
                        <h3>Christmast Party</h3>
                        <p>at Wyndham Hotel, Surabaya</p>
                        <img
                            src="/invitation-asset/natal-v1/items-3.png"
                            className="mb-3"
                            alt=""
                        />
                        <p>Kepada Yth;</p>
                        <p className="nama-tamu">Vindra Arya Yulian</p>
                        <a
                            href="content/index.html"
                            className="py-2 px-5  rounded-full text-base hover:bg-transparent transition-all"
                        >
                            Open Invitation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NatalV1;
