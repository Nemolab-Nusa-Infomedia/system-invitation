import React from "react";
import logo from "/public/asset-landing-page/hugo-logo.png";
import { menuItems } from "@/lib";
import Button from "./Button";

function Navbar() {
    return (
        <nav className="max-h-[90px] flex justify-between w-full items-center py-5 px-24 fixed bg-white shadow-md">
            <div>
                <img src={logo} alt="logo" className="w-20" />
            </div>
            <div className="flex gap-[22px] justify-center items-center">
                {menuItems.map((menu) => (
                    <a href={menu.href}>
                        <p className="font-poppins font-medium ">
                            {menu.label}
                        </p>
                    </a>
                ))}
                <Button
                    text_class="text-[#F72585]"
                    text={"Masuk"}
                    link={"/"}
                    button_class="border-2 border-[#F72585] py-2 px-6 bg-[#ffffff]"
                />
                <Button
                    text_class="text-[#ffffff]"
                    text={"Coba Template Gratis"}
                    link={"/"}
                    button_class="border-2 border-[#F72585] py-2 px-6 bg-[#F72585]"
                />
            </div>
        </nav>
    );
}

export default Navbar;
