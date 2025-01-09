import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import notifIcon from "/public/assets-dashboard/notification.svg";
import profileImg from "/public/assets-dashboard/profile.png";
import { menuItemsDashboard } from "@/lib";
import Sidebar from "@/Components/dashboard/Sidebar";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen w-full h-[1000px]  font-poppins md:flex bg-[#F5F5F5]  justify-center gap-[38px] md:py-4">
            <aside className="relative w-[366px] ">
                <Sidebar />
            </aside>

            <div className="  w-[1050px]">
                <div className="relative h-[96px]">
                    <nav className=" shadow-md fixed w-[1050px] bg-white h-[96px] px-10 rounded-[12px]">
                        <div className="mx-auto  h-full">
                            <div className="flex   items-center h-[96px]  justify-end">
                                <div className="hidden sm:ms-6 sm:flex sm:items-center  ">
                                    <div className="relative gap-[20px] flex items-center">
                                        <div className="notif">
                                            <img
                                                src={notifIcon}
                                                alt="notifikasi"
                                            />
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="flex items-center rounded-md">
                                                    <button
                                                        type="button"
                                                        className="flex gap-2  items-center    bg-white rounded-full  outline-1 transition duration-150 ease-in-out focus:outline-none "
                                                    >
                                                        <p className="text-[20px] font-[500]">
                                                            {user.name}
                                                        </p>
                                                        <img
                                                            src={profileImg}
                                                            alt=""
                                                            className="w-[56px] h-[56px]"
                                                            width={56}
                                                            height={56}
                                                        />
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <h1 className="px-2 font-semibold">
                                                    {" "}
                                                    {/* {user.name} */} Rizki T
                                                </h1>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="-me-2 flex items-center sm:hidden ">
                                    <button
                                        onClick={() =>
                                            setShowingNavigationDropdown(
                                                (previousState) =>
                                                    !previousState
                                            )
                                        }
                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                className={
                                                    !showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            <path
                                                className={
                                                    showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            className={
                                (showingNavigationDropdown
                                    ? "block"
                                    : "hidden") + " sm:hidden"
                            }
                        >
                            <div className="space-y-1 pb-3 pt-2">
                                <ResponsiveNavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    Dashboard
                                </ResponsiveNavLink>
                            </div>

                            <div className="border-t border-gray-200 pb-1 pt-4">
                                <div className="px-4">
                                    <div className="text-base font-medium text-gray-800">
                                        {/* {user.name} */} Rizki T
                                    </div>
                                    <div className="text-sm font-medium text-gray-500">
                                        {/* {user.email} */} rizki@gmail
                                    </div>
                                </div>

                                <div className="mt-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("profile.edit")}
                                    >
                                        Profile
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        Log Out
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <main className="w-full    border border-gray-700 mx-auto mt-[36px]">
                    {children}
                </main>
            </div>
        </div>
    );
}
