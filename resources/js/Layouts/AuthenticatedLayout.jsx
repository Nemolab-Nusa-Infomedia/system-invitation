import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/dashboard/Footer";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import notifIcon from "/public/assets-dashboard/notification.svg";
import profileImg from "/public/assets-dashboard/profile.png";
import { menuItemsDashboard } from "@/lib";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [activeTab, setActiveTab] = useState("");
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const getUrlNavbar = () => {
        const path = window.location.pathname.split("/").pop();
        return path === "" ? "dashboard" : path;
    };

    useEffect(() => {
        setActiveTab(getUrlNavbar());
    }, [getUrlNavbar]);

    return (
        <div className="min-h-screen bg-white font-poppins">
            <nav className=" shadow-md bg-white h-[96px] px-[8.7rem]">
                <div className="mx-auto  h-full">
                    <div className="flex  justify-between items-center h-[96px]">
                        <div className="flex ">
                            <div className="flex shrink-0 items-center">
                                <Link href={route("dashboard")}>
                                    <span className="text-[20px]">Logo</span>
                                </Link>
                            </div>
                        </div>

                        <div className="h-[50px] gap-[22px] flex items-center text-[20px] font-[500] transition-all ease-in-out duration-150">
                            {menuItemsDashboard.map((link) => (
                                <Link
                                    key={link.id}
                                    href={route(link.href)}
                                    className="relative h-full flex items-center group"
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-1/2 h-[4px] bg-[#8B4513] transform -translate-x-1/2 transition-all duration-300 ease-in-out ${
                                            activeTab === link.id
                                                ? "w-full"
                                                : "w-0 group-hover:w-full"
                                        }`}
                                    ></span>
                                </Link>
                            ))}
                        </div>
                        <div className="hidden sm:ms-6 sm:flex sm:items-center ">
                            <div className="relative gap-[20px] flex items-center">
                                <div className="notif">
                                    <img src={notifIcon} alt="notifikasi" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center    bg-white rounded-full  outline-1 transition duration-150 ease-in-out hover:outline hover:outline-black focus:outline-none "
                                            >
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
                                            {user.name}
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
                                        (previousState) => !previousState
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
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
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
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
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

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="w-[1222px] mt-[69px] bg-white mx-auto ">
                {children}
            </main>
            <Footer />
        </div>
    );
}
