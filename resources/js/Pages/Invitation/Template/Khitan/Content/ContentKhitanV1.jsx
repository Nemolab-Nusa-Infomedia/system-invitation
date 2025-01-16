import React, { useEffect } from "react";
import "../../css/khitan-v1/main.css";
import location from "/public/asset-landing-page/location.svg";

function ContentKhitanV1() {
    return (
        <body className="w-full">
            <audio hidden autoPlay loop>
                <source src="/audio/lir-ilir.mp3" type="audio/mp3" />
            </audio>

            <div className="flex flex-wrap justify-center lg:w-1/3 bg-white mx-auto">
                <div className="cover flex items-center justify-center w-full relative">
                    <img
                        data-aos="fade-down-right"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-1.png"
                        className="item-image-1"
                        alt="cek"
                    />
                    <img
                        data-aos="fade-down-left"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-2.png"
                        className="item-image-2"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/khitan-v1/item-3.png"
                        className="item-image-3"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/khitan-v1/item-4.png"
                        className="item-image-4"
                        alt=""
                    />

                    <div
                        className="tentang-content text-center flex flex-col gap-2 items-center p-3"
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                    >
                        <h3 className="mb-4 text-xl">
                            Assalamualaikum Wr. Wb.
                        </h3>
                        <p>
                            Tanpa mengurangi rasa hormat kami bermaksud
                            mengundang Bapak/Ibu/Saudara/i pada acara syukuran
                            khitan anak kami:
                        </p>
                        <img
                            data-aos="flip-left"
                            data-aos-duration="3000"
                            src="/invitation-asset/khitan-v1/people.jpg"
                            className="tentang-image mt-2 mb-4"
                            alt=""
                        />

                        <h4 className="text-2xl">Raden Adhitama</h4>

                        <p>Putra Bapak Sugeng dan Ibu Tri Rahayu</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center w-full lg:w-1/3 mx-auto">
                <div className="cover flex items-center w-full justify-center relative">
                    <img
                        data-aos="fade-down-right"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-1.png"
                        className="item-image-1"
                        alt=""
                    />
                    <img
                        data-aos="fade-down-left"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-2.png"
                        className="item-image-2"
                        alt=""
                    />
                    <img
                        data-aos="fade-up-right"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-3.png"
                        className="item-image-3"
                        alt=""
                    />
                    <img
                        data-aos="fade-up-left"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-4.png"
                        className="item-image-4"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/khitan-v1/item-7.png"
                        className="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/khitan-v1/item-7.png"
                        className="item-image-7"
                        alt=""
                    />

                    <div className="acara-content text-center p-3 flex flex-col items-center gap-3">
                        <h3
                            data-aos="zoom-in-up"
                            data-aos-duration="3000"
                            className="mb-4"
                        >
                            Walimatul Khitan
                        </h3>
                        <p
                            data-aos="zoom-in-up"
                            data-aos-duration="3000"
                            className="fw-bold"
                        >
                            Insya allah akan di laksanakan pada:
                        </p>

                        <div className="countdown">
                            <span
                                className="time-box"
                                data-aos="zoom-out-right"
                                data-aos-duration="3000"
                            >
                                <span className="time" id="days">
                                    0
                                </span>
                                <span className="label">Hari</span>
                            </span>
                            <span
                                className="time-box"
                                data-aos="zoom-in-down"
                                data-aos-duration="3000"
                            >
                                <span className="time" id="hours">
                                    0
                                </span>
                                <span className="label">Jam</span>
                            </span>
                            <span
                                className="time-box"
                                data-aos="zoom-in-down"
                                data-aos-duration="3000"
                            >
                                <span className="time" id="minutes">
                                    0
                                </span>
                                <span className="label">Menit</span>
                            </span>
                            <span
                                className="time-box"
                                data-aos="zoom-out-left"
                                data-aos-duration="3000"
                            >
                                <span className="time" id="seconds">
                                    0
                                </span>
                                <span className="label">Detik</span>
                            </span>
                        </div>

                        <h4 data-aos="zoom-in-up" data-aos-duration="3000">
                            Minggu, 15 September 2024
                        </h4>

                        <p data-aos="zoom-in-up" data-aos-duration="3000">
                            Pukul : 10.00 WIB s/d Selesai
                        </p>

                        <p data-aos="zoom-in-up" data-aos-duration="3000">
                            Dukuh sendangrejo, Desa Kalinanas Rt 006/Rw 003 Kec.
                            Japah, Kab. Blora, Jawa Tengah
                        </p>

                        <iframe
                            data-aos="zoom-in-up"
                            data-aos-duration="3000"
                            className="mb-3"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.772680752605!2d109.24018927357322!3d-7.379354272630928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f0339a721f9%3A0xb01aeec6c163775e!2sHugo%20Studio%20Purwokerto%20by%20Anton%20Group!5e0!3m2!1sid!2sid!4v1725269277626!5m2!1sid!2sid"
                            width="80%"
                            height="auto"
                            style={{ borderRadius: "15px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        <a
                            data-aos="zoom-in-up"
                            data-aos-duration="3000"
                            href="#"
                            className="btn gap-2 inline-flex items-center justify-center px-4 py-2 text-white rounded hover:bg-transparent"
                        >
                            <img src={location} alt="location" />
                            Lihat Lokasi
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center w-full lg:w-1/3 mx-auto">
                <div className="cover flex items-center justify-center relative">
                    {/* Gambar dengan animasi */}
                    <img
                        data-aos="fade-down-right"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-1.png"
                        className="absolute top-0 left-0 w-32"
                        alt="item-1"
                    />
                    <img
                        data-aos="fade-down-left"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-2.png"
                        className="absolute top-0 right-0 w-32"
                        alt="item-2"
                    />
                    <img
                        data-aos="fade-up-right"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-3.png"
                        className="absolute bottom-0 left-0 w-32"
                        alt="item-3"
                    />
                    <img
                        data-aos="fade-up-left"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-4.png"
                        className="absolute bottom-0 right-0 w-32"
                        alt="item-4"
                    />

                    {/* Konten Tanda Kasih */}
                    <div
                        className="tanda-content text-center p-4"
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                    >
                        {/* Judul */}
                        <h3
                            className="text-xl font-bold mb-4"
                            data-aos="zoom-in-up"
                            data-aos-duration="3000"
                        >
                            Tanda Kasih
                        </h3>

                        {/* Paragraf */}
                        <p
                            className="text-base mb-4"
                            data-aos="zoom-in-up"
                            data-aos-duration="3000"
                        >
                            Terima kasih atas kehadiran dan hadiah indah Anda.
                            Kehadiran Anda membuat acara khitan kami semakin
                            istimewa. Semoga doa dan dukungan Anda selalu
                            membawa berkah.
                        </p>

                        {/* Div tanda ucapan */}
                        <div
                            data-aos="flip-right"
                            data-aos-duration="3000"
                            className="tanda-ucapan w-40 h-40 bg-gray-200 mx-auto mb-5 mt-5"
                        ></div>

                        {/* Tombol kirim ucapan */}
                        <a
                            data-aos="zoom-in-up"
                            data-aos-duration="3000"
                            href="#"
                            className="btn inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-transparent"
                        >
                            <i className="fa-regular fa-pen-to-square mr-2"></i>{" "}
                            Kirim ucapan
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center w-full lg:w-1/3 mx-auto">
                <div className="cover flex items-center justify-center relative">
                    {/* Gambar dengan animasi */}
                    <img
                        data-aos="fade-down-right"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-1.png"
                        className="absolute top-0 left-0 w-32"
                        alt="item-1"
                    />
                    <img
                        data-aos="fade-down-left"
                        data-aos-duration="2000"
                        src="/invitation-asset/khitan-v1/item-2.png"
                        className="absolute top-0 right-0 w-32"
                        alt="item-2"
                    />
                    <img
                        src="/invitation-asset/khitan-v1/item-3.png"
                        className="absolute bottom-0 left-0 w-32"
                        alt="item-3"
                    />
                    <img
                        src="/invitation-asset/khitan-v1/item-4.png"
                        className="absolute bottom-0 right-0 w-32"
                        alt="item-4"
                    />

                    {/* Konten undangan */}
                    <div
                        className="close-content text-center p-4"
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                    >
                        {/* Gambar orang */}
                        <img
                            data-aos="flip-left"
                            data-aos-duration="3000"
                            src="/invitation-asset/khitan-v1/people.jpg"
                            className="mb-5 mx-auto rounded-lg shadow-lg"
                            alt="people"
                        />

                        {/* Teks undangan */}
                        <p className="mb-4">
                            Merupakan suatu kehormatan dan kebahagiaan bagi kami
                            sekeluarga jika Bapak/Ibu/Saudara/i berkenan hadir,
                            sekaligus memberikan doa restu kepada putra kami
                        </p>

                        <p className="italic">Hormat Kami Yang Mengundang</p>

                        <p className="font-bold">
                            Putra Bapak Sugeng dan Ibu Tri Rahayu
                        </p>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default ContentKhitanV1;
