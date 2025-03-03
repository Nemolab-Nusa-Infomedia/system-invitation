import React from "react";
import { useEffect } from "react";
import "../css/natal-v2/main.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


function NatalV2() {

    useEffect(() => {
        AOS.init();
      }, [])

    const toggleDetails = (id) => {
        const content = document.getElementById(id);
        const allContents = document.querySelectorAll('.detail-content-natv2');

        allContents.forEach((item) => {
            if (item.id !== id) {
                item.classList.remove('active');
            }
        });

        content?.classList.toggle('active'); 
    };

    return (
        <div className="bg-green-950">

            <audio hidden autoPlay loop>
                <source
                    src="/audio/Nat King Cole - Deck The Halls.mp3"
                    type="audio/mp3"
                />
            </audio>

            <div
                className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 mx-auto latar-natv2"
            >

                <div
                    className="text-center py-20 px-5"
                    data-aos="zoom-in-up"
                    data-aos-duration="3000"
                >

                    <div className="img-top-natv2">

                        <img
                            src="/invitation-asset/natal-v2/Group(1).png"
                            alt=""
                            className="img-left-natv2"
                        />
                        <img
                            src="/invitation-asset/natal-v2/Group(2).png"
                            alt=""
                            className="img-center-natv2"
                        />
                        <img
                            src="/invitation-asset/natal-v2/Group.png"
                            alt=""
                            className="img-right-natv2"
                        />
                    </div>

                
                    <p className="text-invite-natv2">halooo!!!</p>
                    <h1 className="title-invite-natv2">
                        Evan Juliet <br /> & Keluarga
                    </h1>
                    <p className="info-1-navt2">kamu di undang dalam acara :</p>
                    <p className="info-2-natv2">Christmas Party</p>
                    <p className="info-3-natv2">~ Avilda Family ~</p>
                    <p className="info-4-natv2">
                        lihat detail acaranya dibawah yah!!
                    </p>

                    <div className="space-y-4">

                        {/* JADWAL ACARA */}
                            <button
                                className="detail-btn-natv2 "
                                onClick={() => toggleDetails('schedule')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5" /></svg>
                                Jadwal Acara
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5" /></svg>

                            </button>
                        <div id="schedule" className="detail-content-natv2">
                            <div className="detail-item-natv2">Hari, Tanggal:</div>
                            <div className="subitem-natv2">
                                <strong>Jum'at, 25 Desember 2025</strong>
                            </div>
                            <div className="detail-item-natv2">Waktu:</div>
                            <div className="subitem-natv2">
                                <strong>09.00 - 15.00 WIB</strong>
                            </div>
                            <div className="detail-item-natv2">Dresscode:</div>
                            <div className="subitem-natv2">
                                <strong>Pria: Kemeja Putih - Wanita: Gaun Putih</strong>
                            </div>
                        </div>

                        {/* ALAMAT DAN LOKASI */}
                            <button
                                className="detail-btn-natv2"
                                onClick={() => toggleDetails('location')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" /></svg>
                                Alamat/Lokasi
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" /></svg>
                            </button>
                        
                        <div id="location" className="detail-content-natv2">
                            <div className="detail-item-natv2">
                                Alamat:
                                <div className="subitem-natv2">
                                    <strong>Jalan Kavaicha Amasya no. 11</strong>
                                    <br />
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Jalan+Kaviacha+Amasya+No.+11"
                                        target="_blank"
                                        className="open-btn-natv2 gap-2"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" /></svg> 
                                        Lihat di maps
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* KONTAK */}
                            <a
                                href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konfirmasi%20kehadiran%20untuk%20Christmas%20Party"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="detail-btn-natv2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" /></svg>
                                Hubungi Kami
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" /></svg>
                            </a>

                    </div>
                </div>
                <div className="bawahh">
                    <img
                        src="/invitation-asset/natal-v2/Group 9.png"
                        alt=""
                        className="img-btm bawah"
                    />
                </div>

            </div>

        </div>

    );
}

export default NatalV2;
