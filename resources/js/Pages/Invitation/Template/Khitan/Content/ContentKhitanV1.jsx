import React from "react";
import "../../css/khitan-v1/main.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContentKhitanV1() {
    
    useEffect(() => {
                AOS.init();
              }, [])

    return (
        <body className="bg-yellow-200">

            <audio hidden autoPlay loop>
                <source src="/audio/Humood - Kun Anta.mp3" type="audio/mp3" />
            </audio>

            {/* PAGE 1 */}
            <div className="w-full flex justify-center container-fluid-khitV1">
                <div className="w-full max-w-md bg-white p-0">

                    <div className="atass-khitv1 flex justify-center items-center" data-aos="fade-down" data-aos-duration="3000">
                        <img src="/invitation-asset/khitan-v1/lampu-kiri.png" alt="" className="img-1-khitv1" />
                        <img src="/invitation-asset/khitan-v1/logo-tengah.png" alt="" className="img-2-khitv1" />
                        <img src="/invitation-asset/khitan-v1/lampu-kanan.png" alt="" className="img-3-khitv1" />
                    </div> 

                    <div className="text-center p-0" >
                        <h1 className="bhismillah-khitv1" data-aos="zoom-in" data-aos-duration="2000">
                            بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
                        </h1>

                        <p className="text-content-khitv1" data-aos="zoom-in" data-aos-duration="2000">
                            Assalamu'alaikum Warahmatullahi Wabarakatuh
                            <br /><br />
                            Tanpa mengurangi rasa hormat kami bermaksud <br />
                            mengundang Bapak/Ibu/Saudara/i pada acara <br />
                            syukuran khitan anak kami:
                        </p>

                        <h1 className="name-khitv1" data-aos="zoom-in" data-aos-duration="2000">“Alam Savana”</h1>

                        <div className="img-btm-khitv1">
                            <img src="/invitation-asset/khitan-v1/daunlagi-kanan.png" alt="" className="img-btm-right1-khitv1" />
                            <img src="/invitation-asset/khitan-v1/daun-kanan.png" alt="" className="img-btm-right2-khitv1" />
                            <img src="/invitation-asset/khitan-v1/daunlagi-kiri.png" alt="" className="img-btm-left1-khitv1" />
                            <img src="/invitation-asset/khitan-v1/daun-kiri.png" alt="" className="img-btm-left2-khitv1" />
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2 */}
            <div className="w-full flex justify-center">
                <div className="w-full max-w-md bg-white p-0">

                    <div className="atass-khitv1 flex justify-center items-center" data-aos="fade-down" data-aos-duration="3000">
                        <img src="/invitation-asset/khitan-v1/lampu-kiri.png" alt="" className="img-1-khitv1" />
                        <img src="/invitation-asset/khitan-v1/logo-tengah.png" alt="" className="img-2-khitv1" />
                        <img src="/invitation-asset/khitan-v1/lampu-kanan.png" alt="" className="img-3-khitv1" />
                    </div>

                    <div className="text-center p-0">
                        <p className="event-khitv1" data-aos="zoom-in" data-aos-duration="2000">
                            Insya Allah akan di laksanakan pada:
                        </p>

                        <p className="event-text-khitv1" data-aos="zoom-in" data-aos-duration="2000">
                            Sabtu, 17 Desember 2024
                            <br />
                            10.00 AM - 01.00 PM
                        </p>

                        <p className="event-addres-khitv1" data-aos="zoom-in" data-aos-duration="2000">
                            kompleks Mangga Tengah
                            <br />
                            Blok A-17-06, Banjar
                        </p>

                        <div className="countdown-khitv1" data-aos="zoom-in" data-aos-duration="2000">
                            <div className="countdown-box-khitv1">
                                <div id="days" className="countdown-value-khitv1">00</div>
                                <div className="countdown-label-khitv1">Hari</div>
                            </div>
                            <div className="countdown-box-khitv1">
                                <div id="hours" className="countdown-value-khitv1">00</div>
                                <div className="countdown-label-khitv1">Jam</div>
                            </div>
                            <div className="countdown-box-khitv1">
                                <div id="minutes" className="countdown-value-khitv1">00</div>
                                <div className="countdown-label-khitv1">Menit</div>
                            </div>
                            <div className="countdown-box-khitv1">
                                <div id="seconds" className="countdown-value-khitv1">00</div>
                                <div className="countdown-label-khitv1">Detik</div>
                            </div>
                        </div>

                        <div className="img-btm-khitv1">
                            <img src="/invitation-asset/khitan-v1/daunlagi-kanan.png" alt="" className="img-btm-right1-khitv1" />
                            <img src="/invitation-asset/khitan-v1/daun-kanan.png" alt="" className="img-btm-right2-khitv1" />
                            <img src="/invitation-asset/khitan-v1/daunlagi-kiri.png" alt="" className="img-btm-left1-khitv1" />
                            <img src="/invitation-asset/khitan-v1/daun-kiri.png" alt="" className="img-btm-left2-khitv1" />
                        </div>

                    </div>
                </div>
            </div>

            {/* PAGE 3 */}
            <div className="w-full flex justify-center">
                <div className="w-full max-w-md bg-white p-0">

                    <div className="atass-khitv1 flex justify-center items-center" data-aos="fade-down" data-aos-duration="3000">
                        <img src="/invitation-asset/khitan-v1/lampu-kiri.png" alt="" className="img-1-khitv1" />
                        <img src="/invitation-asset/khitan-v1/logo-tengah.png" alt="" className="img-2-khitv1" />
                        <img src="/invitation-asset/khitan-v1/lampu-kanan.png" alt="" className="img-3-khitv1" />
                    </div>

                    <div className="text-center p-0">
                        <div className="gmaps-khitv1 flex justify-center">
                            <iframe data-aos="zoom-in" data-aos-duration="2000"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5737951193064!2d109.34375887413175!3d-7.401558172877827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6559b084ba3d11%3A0xccf44109f7b9b6d8!2sJl.%20Mangga%20Tengah%2C%20Selabaya%2C%20Kec.%20Kalimanah%2C%20Kabupaten%20Purbalingga%2C%20Jawa%20Tengah%2053371!5e0!3m2!1sid!2sid!4v1735801934808!5m2!1sid!2sid"
                                width="300" height="200" className="border-0 gmaps-khitv1"
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        <p className="event-addres-khitv1" data-aos="zoom-in" data-aos-duration="2000">
                            kompleks Mangga Tengah
                            <br />
                            Blok A-17-06, Banjar
                        </p>

                        <div className="btn-addres-invit-khitv1" data-aos="zoom-in" data-aos-duration="2000">
                            <a href="https://maps.app.goo.gl/HrmR7PY2BZYJCfDk8" className="btn-addres-khitv1">
                                Cek Lokasi
                            </a>
                        </div>

                        <div className="img-btm-khitv1">
                            <img src="/invitation-asset/khitan-v1/daunlagi-kanan.png" alt="" className="img-btm-right1-khitv1 " />
                            <img src="/invitation-asset/khitan-v1/daun-kanan.png" alt="" className="img-btm-right2-khitv1" />
                            <img src="/invitation-asset/khitan-v1/daunlagi-kiri.png" alt="" className="img-btm-left1-khitv1" />
                            <img src="/invitation-asset/khitan-v1/daun-kiri.png" alt="" className="img-btm-left2-khitv1" />
                        </div>

                    </div>
                </div>
            </div>

        </body>

    );
}

export default ContentKhitanV1;