import React from "react";
import "../css/khitan-v1/main.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function KhitanV1() {
    
    useEffect(() => {
            AOS.init();
          }, [])

    return (
        
    <div className="bg-yellow-200">
        <div className="flex w-1/3 mx-auto justify-center">
            <div className="w-full max-w-md bg-white p-0">
                {/* Bagian Atas */}
                <div className="atass-khitv1 flex justify-center items-center" data-aos="fade-down" data-aos-duration="3000">
                    <img src="/invitation-asset/khitan-v1/lampu-kiri.png" alt="" className="img-1-khitv1" />
                    <img src="/invitation-asset/khitan-v1/logo-tengah.png" alt="" className="img-2-khitv1" />
                    <img src="/invitation-asset/khitan-v1/lampu-kanan.png" alt="" className="img-3-khitv1" />
                </div>
                
                {/* Konten */}
                <div className="text-center">
                    <h1 className="title-khitv1" data-aos="zoom-in" data-aos-duration="2000">
                        Walimatul <br /> Khitan
                    </h1>
                    <p className="text-op-khitv1" data-aos="zoom-in" data-aos-duration="2000">
                        Kepada Yth; <br />
                        Bapak/Ibu/Saudara/i
                        <br /><br />
                        Sulissieee
                    </p>

                    {/* Tombol Undangan */}
                    <a href="/dashboard/khitan/edit/content" 
                    className="btn-khitv1 flex justify-center items-center gap-2 p-2 w-fit" 
                    data-aos="zoom-in" data-aos-duration="2000">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg> 
                        Buka Undangan
                    </a>
                </div>

                {/* Bagian Daun */}
                <div className="bawahh-khitv1">
                    <img src="/invitation-asset/khitan-v1/daunlagi-kanan.png" alt="" className="bawah-lagi-khitv1" />
                    <img src="/invitation-asset/khitan-v1/daun-kanan.png" alt="" className="bawah-khitv1" />
                    <img src="/invitation-asset/khitan-v1/daunlagi-kiri.png" alt="" className="bawah2-lagi-khitv1" />
                    <img src="/invitation-asset/khitan-v1/daun-kiri.png" alt="" className="bawah2-khitv1" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default KhitanV1;
