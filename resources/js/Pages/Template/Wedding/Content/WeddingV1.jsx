import React from "react";
import "../../css/undangan-v1/main.css";

function ContentWeddingV1() {
    return (
        <div className="flex flex-col w-screen">
            <audio hidden autoPlay loop>
                <source
                    src="/audio/Yovie-Nuno-Janji-Suci.mp"
                    type="audio/mp3"
                />
            </audio>

            {/** Quotes Section */}
            <div className="flex lg:w-1/3 mx-auto">
                <div className="cover items-center justify-center flex">
                    <img
                        src="/invitation-asset/undangan-v1/item-1.png"
                        className="item-image-1"
                        alt=""
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
                        src="/invitation-asset/undangan-v1/item-3.png"
                        className="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        class="item-image-7"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-4.png"
                        class="item-image-8"
                        alt=""
                    />

                    <div className="quotes-content text-center p-3 animate-fadeInUp">
                        <h3 className="mb-3">
                            Rama <b>&</b> Shinta
                        </h3>
                        <div className="flex justify-center gap-2 mb-3">
                            <img
                                src="/invitation-asset/undangan-v1/item-6.png"
                                width="30px"
                                alt=""
                            />
                            <img
                                src="/invitation-asset/undangan-v1/item-6.png"
                                width="30px"
                                alt=""
                            />
                            <img
                                src="/invitation-asset/undangan-v1/item-6.png"
                                width="30px"
                                alt=""
                            />
                        </div>
                        <p className="mb-3">
                            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa
                            Dia menciptakan pasangan-pasangan untukmu dari
                            (jenis) dirimu sendiri agar kamu merasa tenteram
                            kepadanya. Dia menjadikan di antaramu rasa cinta dan
                            kasih sayang. Sesungguhnya pada yang demikian itu
                            benar-benar terdapat tanda-tanda (kebesaran Allah)
                            bagi kaum yang berpikir.
                        </p>
                        <p>(Ar-Rum: 21)</p>
                    </div>
                </div>
            </div>

            {/** Mempelai Section */}
            <div className="flex lg:w-1/3 mx-auto">
                <div className="cover items-center justif-center flex">
                    <img
                        src="/invitation-asset/undangan-v1/item-1.png"
                        className="item-image-1"
                        alt=""
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
                        src="/invitation-asset/undangan-v1/item-3.png"
                        className="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        class="item-image-7"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-4.png"
                        class="item-image-8"
                        alt=""
                    />

                    <div className="mempelai-content text-center p-3">
                        <h5 className="mb-3">
                            بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
                        </h5>
                        <i>Assalamu'alaikum Warahmatullahi Wabarakatuh</i>
                        <p className="mt-4 mb-4">
                            Maha suci Allah SWT, yang telah menciptakan
                            makhluk-Nya berpasang-pasangan, Ya Allah, dengan
                            kerendahan hati, perkenankanlah kami menikahkan
                            putri-putri kami:
                        </p>
                        <div className="nama-mempelai">
                            <h3>Rama Bagus Pramana</h3>
                            <p>Putra dari Bapak Sugeng dan Ibu Tri Rahayu</p>
                        </div>
                        <span>dengan</span>
                        <div className="nama-mempelai">
                            <h3>Shinta Dwi Maharani</h3>
                            <p>Putri dari Bapak Mulyadi dan Ibu Sulastri</p>
                        </div>
                    </div>
                </div>
            </div>

            {/** Acara Section */}
            <div className="w-full lg:w-1/3 mx-auto">
                <div className="cover items-center justify-center flex">
                    <img
                        src="/invitation-asset/undangan-v1/item-1.png"
                        className="item-image-1"
                        alt=""
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
                        src="/invitation-asset/undangan-v1/item-3.png"
                        className="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        class="item-image-7"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-4.png"
                        class="item-image-8"
                        alt=""
                    />

                    <div className="acara-content text-center p-3">
                        <i>Akad Nikah</i>
                        <p className="tanggal-acara mb-0">
                            Sabtu, 30 Agustus 2024
                        </p>
                        <p className="jam-acara">
                            Pukul : 09.00 WIB s/d Selesai
                        </p>
                        <p>
                            <b>Kediaman Mempelai Wanita</b> <br /> Dukuh
                            sendangrejo, Desa Kalinanas Rt 006/Rw 003 Kec.
                            Japah, Kab. Blora, Jawa Tengah
                        </p>
                        <i>Undangan</i>
                        <div className="tanggal-pernikahan flex gap-3 justify-center mt-2 mb-4">
                            <span className="border-end px-2">Kamis</span>
                            <span>29 Agustus</span>
                            <span className="border-start px-2">2024</span>
                        </div>
                        <div className="flex w-full justify-center">
                            <a
                                href=""
                                className="btn btn-lokasi flex gap-1 items-center mt-3 rounded-md p-3"
                            >
                                <img
                                    src="/asset-landing-page/location.svg"
                                    alt=""
                                />
                                Lihat lokasi
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/** Doa Section */}
            <div className="flex w-full lg:w-1/3 mx-auto">
                <div className="cover items-center justify-center flex">
                    <img
                        src="/invitation-asset/undangan-v1/item-1.png"
                        className="item-image-1"
                        alt=""
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
                        src="/invitation-asset/undangan-v1/item-3.png"
                        className="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        class="item-image-7"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-4.png"
                        class="item-image-8"
                        alt=""
                    />
                    <div className="doa-content text-center p-4">
                        <h3 className="mb-3">
                            Rama <b>&</b> Shinta
                        </h3>
                        <div className="flex justify-center gap-2 mb-2">
                            <img
                                src="/invitation-asset/undangan-v1/item-6.png"
                                width="30px"
                                alt=""
                            />
                            <img
                                src="/invitation-asset/undangan-v1/item-6.png"
                                width="30px"
                                alt=""
                            />
                            <img
                                src="/invitation-asset/undangan-v1/item-6.png"
                                width="30px"
                                alt=""
                            />
                        </div>
                        <p>
                            "Semoga Allah memberkahimu di waktu bahagia dan
                            memberkahimu di waktu susah, serta semoga Allah
                            mempersatukan kalian berdua dalam kebaikan"
                        </p>
                        <p>[HR. Abu Daud]</p>
                    </div>
                </div>
            </div>
            <div class="flex lg:w-1/3 mx-auto">
                <div class="cover items-center justify-center flex">
                    <img
                        src="/invitation-asset/undangan-v1/item-1.png"
                        class="item-image-1"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        class="item-image-2"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-2.png"
                        class="item-image-3"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-1.png"
                        class="item-image-4"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-1.png"
                        class="item-image-5"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-3.png"
                        class="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        class="item-image-7"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-4.png"
                        class="item-image-8"
                        alt=""
                    />

                    <div class="doa-content flex flex-col gap-3 text-center p-3">
                        <h3 class="mb-3">
                            Rama <b>&</b> Shinta
                        </h3>

                        <div class="item-quotes-img mb-3 flex justify-center gap-2">
                            <img
                                src="/invitation-asset/undangan-v1/item-6.png"
                                width="30px"
                                alt=""
                            />
                            <img
                                src="/invitation-asset/undangan-v1/item-6.png"
                                width="30px"
                                alt=""
                            />
                            <img
                                src="/invitation-asset/undangan-v1/item-6.png"
                                width="30px"
                                alt=""
                            />
                        </div>

                        <p>
                            Merupakan suatu kehormatan dan kebahagiaan bagi kami
                            apabila Bapak/Ibu/Saudara/i berkenan hadir untuk
                            memberikan doa restu kepada putra-putri kami.
                        </p>

                        <p>
                            Atas kehadiran dan do’a restunya, kami ucapkan
                            terima kasih{" "}
                        </p>

                        <p>Kami yang berbahagia</p>

                        <div class="ttd flex justify-around w-full text-center mx-auto">
                            <div class="col-6 col-md-6">
                                <p class="mb-0">Keluarga</p>
                                <p>Bpk Mulyadi & Ibu Sulastri</p>
                            </div>
                            <div class="col-6 col-md-6">
                                <p class="mb-0">Keluarga</p>
                                <p>Bpk Mulyadi & Ibu Sulastri</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentWeddingV1;
