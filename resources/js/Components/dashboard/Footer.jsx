import { Link } from "@inertiajs/react";
import logo from "/public/assets-dashboard/logo-footer.png";
import facbookImg from "/public/assets-dashboard/facebook.png";
import instagramImg from "/public/assets-dashboard/instagram.png";
import twitterImg from "/public/assets-dashboard/twitter.png";
export default function Footer() {
    return (
        <footer className="w-full bg-[#8B4513] px-[6.875rem] flex flex-col gap-y-[20px] text-white">
            <div className="flex justify-between mt-[20px] ">
                <ul className="navigasi text-[20px]  flex  items-center">
                    <Link href="" className="p-[10px] pl-0 font-bold">
                        Home
                    </Link>
                    <Link href="" className="p-[10px] font-bold">
                        Tema
                    </Link>
                    <Link href="" className="p-[10px] font-bold">
                        Paket
                    </Link>
                </ul>
                <div className="w-[200px] h-[134px]">
                    <img src={logo} alt="" />
                </div>
                <div className="social-media flex  gap-[14px] items-center">
                    <Link className="w-[50px] h-[50px]">
                        <img src={instagramImg} alt="" />
                    </Link>
                    <Link className="w-[50px] h-[50px]">
                        <img src={twitterImg} alt="" />
                    </Link>
                    <Link className="w-[50px] h-[50px]">
                        <img src={facbookImg} alt="" />
                    </Link>
                </div>
            </div>
            <div
                id="coppyright"
                className="border-t border-gray-300 pt-[20px] mb-[20px]"
            >
                <p className="text-center text-[20px] ">
                    Copyright © 2024 Logo | Powered by Vibrant Ecosystem
                </p>
            </div>
        </footer>
    );
}
