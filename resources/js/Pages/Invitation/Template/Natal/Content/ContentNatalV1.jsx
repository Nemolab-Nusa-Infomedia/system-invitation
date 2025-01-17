import React from "react";
import "../../css/natal-v1/main.css";

function ContentNatalV1() {
    return (
        <body>
            <audio hidden autoPlay loop>
                <source
                    src="/audio/MariahCareyAllIWantforChristmas.mp3"
                    type="audio/mp3"
                />
            </audio>

            <div className="flex w-full justify-center lg:w-1/3 mx-auto">
                <div
                    className="cover items-center justify-center flex"
                    style={{
                        backgroundImage:
                            "url('/invitation-asset/natal-v1/background-section.jpg')",
                    }}
                >
                    <img
                        data-aos="zoom-in-down"
                        src="/invitation-asset/natal-v1/item-1.png"
                        className="item-image-1"
                        alt=""
                    />
                    <img
                        data-aos="zoom-in-up"
                        src="/invitation-asset/natal-v1/item-2.png"
                        className="item-image-2"
                        alt=""
                    />
                    <div
                        className="salam-content flex flex-col items-center text-center p-5 gap-3"
                        data-aos="zoom-in-up"
                    >
                        <img
                            src="/invitation-asset/natal-v1/image-1.png"
                            width="200px"
                            className="mb-3"
                            alt=""
                        />
                        <p>
                            <i>Salam Damai Dalam Kasih Tuhan</i>
                        </p>
                        <p>
                            Dalam rangka merayakan Natal tahun ini dengan penuh
                            sukacita, kami mengundang Bapak/Ibu/Saudara/i untuk
                            berkenan hadir dalam acara kami
                        </p>
                    </div>
                </div>
            </div>

            {/* Jadwal Section */}
            <div className="flex w-full lg:w-1/3 mx-auto">
                <div
                    className="cover items-center justify-center flex"
                    style={{
                        backgroundImage:
                            "url('/invitation-asset/natal-v1/background-section.jpg')",
                    }}
                >
                    <img
                        data-aos="zoom-in-down"
                        data-aos-duration="3000"
                        src="/invitation-asset/natal-v1/item-1.png"
                        class="item-image-1"
                        alt=""
                    />
                    <img
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                        src="/invitation-asset/natal-v1/item-2.png"
                        class="item-image-2"
                        alt=""
                    />
                    <div
                        className="jadwal-content flex flex-col items-center justify-center text-center p-2 gap-3"
                        data-aos="zoom-in-up"
                    >
                        <h3>Christmast Party</h3>
                        <p>
                            25 Desember 2024 <br /> Pukul 17.00 WIB - Selesai
                        </p>
                        <p className="nama-lokasi">WYNDHAM HOTEL</p>
                        <p>
                            Jl. Basuki Rahmat No.67 - 73, Embong Kaliasin, Kec.
                            Genteng, Surabaya, Jawa Timur 60271
                        </p>
                        <div className="flex gap-4 text-center">
                            {["Hari", "Jam", "Menit", "Detik"].map(
                                (label, index) => (
                                    <div
                                        key={index}
                                        className="w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-3 text-base"
                                    >
                                        <div className="countdown-box p-3">
                                            <h4
                                                className="mb-0"
                                                id={label.toLowerCase()}
                                            >
                                                0
                                            </h4>
                                            <p className="mb-0">{label}</p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lokasi Section */}
            <div className="w-full lg:w-1/3 mx-auto">
                <div
                    className="cover items-center justify-center flex"
                    style={{
                        backgroundImage:
                            "url('/invitation-asset/natal-v1/background-section.jpg')",
                    }}
                >
                    <img
                        data-aos="zoom-in-down"
                        data-aos-duration="3000"
                        src="/invitation-asset/natal-v1/item-1.png"
                        class="item-image-1"
                        alt=""
                    />
                    <img
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                        src="/invitation-asset/natal-v1/item-2.png"
                        class="item-image-2"
                        alt=""
                    />
                    <div
                        className="lokasi-content  text-center p-2 gap-3"
                        data-aos="zoom-in-up"
                    >
                        <img
                            src="/invitation-asset/natal-v1/image-3.png"
                            width="300px"
                            className="mb-3"
                            alt=""
                        />
                        <p className="mb-5">
                            <i>WYNDHAM HOTEL</i>
                        </p>
                        <a
                            href="https://maps.app.goo.gl/kBronwiVt1uRpH6p9"
                            className="btn rounded-full h-auto text-base px-4 py-3 hover:bg-transparent transition-all"
                        >
                            Petunjuk ke Lokasi
                        </a>
                    </div>
                </div>
            </div>

            {/* RSVP Section */}
            <div className="w-full lg:w-1/3 mx-auto">
                <div
                    className="cover items-center justify-center flex"
                    style={{
                        backgroundImage:
                            "url('/invitation-asset/natal-v1/background-section.jpg')",
                    }}
                >
                    <img
                        data-aos="zoom-in-down"
                        data-aos-duration="3000"
                        src="/invitation-asset/natal-v1/item-1.png"
                        class="item-image-1"
                        alt=""
                    />
                    <img
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                        src="/invitation-asset/natal-v1/item-2.png"
                        class="item-image-2"
                        alt=""
                    />
                    <div
                        className="rsvp-content flex flex-col items-center text-center gap-4"
                        data-aos="zoom-in-up"
                    >
                        <img
                            src="/invitation-asset/natal-v1/image-2.png"
                            width="300px"
                            className="mb-3"
                            alt=""
                        />
                        <p>
                            Tekan tombol dibawah untuk mengirim ucapan &
                            konfirmasi kehadiran Anda
                        </p>
                        <a
                            href="#"
                            className="btn rounded-full px-6 py-2 hover:bg-transparent text-base"
                        >
                            Kirim Ucapan
                        </a>
                    </div>
                </div>
            </div>

            {/* Penutup Section */}
            <div className="w-full lg:w-1/3 mx-auto">
                <div
                    className="cover items-center justify-center flex p-4"
                    style={{
                        backgroundImage:
                            "url('/invitation-asset/natal-v1/background-section.jpg')",
                    }}
                >
                    <img
                        data-aos="zoom-in-down"
                        data-aos-duration="3000"
                        src="/invitation-asset/natal-v1/item-1.png"
                        class="item-image-1"
                        alt=""
                    />
                    <img
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                        src="/invitation-asset/natal-v1/item-2.png"
                        class="item-image-2"
                        alt=""
                    />
                    <div
                        className="penutup-content text-center flex flex-col justify-center gap-4 p-2"
                        data-aos="zoom-in-up"
                    >
                        <p>
                            Merupakan suatu kebanggaan dan kehormatan bagi kami
                            apabila Bapak/Ibu/Saudara/i berkenan hadir
                            memeriahkan acara perayaan Natal ini.
                        </p>
                        <p>See you at</p>
                        <h3>Christmast Party</h3>
                        <p className="mt-5">Yohaness and Family</p>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default ContentNatalV1;
