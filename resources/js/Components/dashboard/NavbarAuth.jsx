import { Link } from "@inertiajs/react";
export default function NavbarAuth({ router }) {
    return (
        <nav class="bg-white shadow-md min-h-[87px] px-[6.875rem] w-full items-center flex ">
            <div class="w-full flex flex-wrap items-center justify-between mx-auto   ">
                <a
                    href="https://flowbite.com/"
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    {/* <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    class="h-8"
                    alt="Flowbite Logo"
                /> */}
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">
                        Logo
                    </span>
                </a>
                <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link
                        href={route(router)}
                        className="border-2 px-[25px] h-[47px] justify-center items-center flex rounded-[35px] border-[#763201] text-[#763201] font-semibold hover:bg-[#763201] hover:text-white transition-all duration-200"
                    >
                        <span>
                            {router === "register" ? "Buat Akun" : "Masuk"}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
