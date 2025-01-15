import { menuItems } from "@/lib";
import React from "react";

function Menu({ activeHash }) {
    return (
        <div className=" flex flex-col gap-5">
            <h1 className="font-poppins text-[#FF61A2] text-2xl font-bold">
                Menu
            </h1>
            {menuItems.map((menu) => (
                <a
                    key={menu.href}
                    href={`/${menu.href}`}
                    className={`relative font-poppins font-semibold text-base  pb-1 transition-all
                            ${
                                activeHash === menu.href
                                    ? "text-[#FF61A2] after:w-full"
                                    : "text-gray-600 hover:text-[#FF61A2] after:w-0"
                            }
                            after:absolute after:h-[3px] after:bg-[#A31643] after:left-0 after:bottom-[-2px]
                            after:transition-all after:duration-300 hover:after:w-full `}
                >
                    {menu.label}
                </a>
            ))}
        </div>
    );
}

export default Menu;
