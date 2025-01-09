import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import cartIcon from "/public/assets-dashboard/cart-icon.svg";
import clockIcon from "/public/assets-dashboard/clock-icon.svg";
import filterIcon from "/public/assets-dashboard/filter-icon.svg";
import thumbnail from "/public/assets-dashboard/undangan.png";
import PrimaryButton from "@/Components/dashboard/PrimaryButton";

function Orders() {
    return (
        <AuthenticatedLayout>
            <main className=" flex flex-col gap-[34px] mb-[265px]   w-full">
                <div className="flex justify-between items-center">
                    {/* action */}
                    <div className="action">
                        <div className=" flex gap-[22px]">
                            <Link
                                href={route("orders")}
                                className={`my-orders flex gap-[10px] h-[67px] rounded-[8px] border-[#D4AF37]  bg-[#F1DA8F66] px-[10px] border justify-center items-center hover:bg-inherit`}
                            >
                                <img
                                    src={cartIcon}
                                    alt="cart"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-[31px] font-[600]">
                                    Pesanan Saya
                                </span>
                            </Link>
                            <Link
                                href={route("history")}
                                className={`my-orders flex gap-[10px] h-[67px] rounded-[8px] border-[#D4AF37] px-[10px] border justify-center items-center hover:bg-[#F1DA8F66]`}
                            >
                                <img
                                    src={clockIcon}
                                    alt="cart"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-[31px] font-[600]">
                                    History Pesanan
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Filter */}
                    <div className="filter flex">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="flex gap-[5px] items-center w-[210px]  h-[24px]  bg-white rounded-sm outline-1 transition duration-150 ease-in-out  "
                                    >
                                        <img
                                            src={filterIcon}
                                            alt=""
                                            width={24}
                                            height={24}
                                        />
                                        <span className="text-[12px] font-[500]">
                                            Urutkan berdasarkan tanggal
                                        </span>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <h1 className="px-2 font-semibold">hello</h1>
                                <Dropdown.Link href={route("profile.edit")}>
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

                {/* Cards */}
                <section className="cards flex flex-wrap justify-between ">
                    <figure className="border-[3px] border-[#763201] rounded-[24px] w-fit p-[20px] gap-[24px] flex flex-col ">
                        <img
                            src={thumbnail}
                            alt=""
                            width={354}
                            height={226}
                            className="border rounded-[20px] overflow-hidden"
                        />

                        <figcaption className=" flex flex-col gap-[4px]">
                            <div className="badge bg-[#FAC418] rounded-[36px] text-[12px] font-[600] w-fit text-white leading-[16px] py-[5px] px-[15px]">
                                Sedang Diproses
                            </div>
                            <h3 className="text-[24px] font-[700] leading-[36px] text-black">
                                Acara Lainnya
                            </h3>
                            <p className="text-[16px] font-[600] leading-[24px]">
                                Tanggal : 12 September 2024
                            </p>
                        </figcaption>
                        <PrimaryButton className="font-normal rounded-[10px] w-[161px]  flex justify-center h-[40px] self-end text-[20px] ">
                            Detail
                        </PrimaryButton>
                    </figure>
                    <figure className="border-[3px] border-[#763201] rounded-[24px] w-fit p-[20px] gap-[24px] flex flex-col ">
                        <img
                            src={thumbnail}
                            alt=""
                            width={354}
                            height={226}
                            className="border rounded-[20px] overflow-hidden"
                        />

                        <figcaption className=" flex flex-col gap-[4px]">
                            <div className="badge bg-[#FAC418] rounded-[36px] text-[12px] font-[600] w-fit text-white leading-[16px] py-[5px] px-[15px]">
                                Sedang Diproses
                            </div>
                            <h3 className="text-[24px] font-[700] leading-[36px] text-black">
                                Acara Lainnya
                            </h3>
                            <p className="text-[16px] font-[600] leading-[24px]">
                                Tanggal : 12 September 2024
                            </p>
                        </figcaption>
                        <PrimaryButton className="font-normal rounded-[10px] w-[161px]  flex justify-center h-[40px] self-end text-[20px] ">
                            Detail
                        </PrimaryButton>
                    </figure>
                    <figure className="border-[3px] border-[#763201] rounded-[24px] w-fit p-[20px] gap-[24px] flex flex-col ">
                        <img
                            src={thumbnail}
                            alt=""
                            width={354}
                            height={226}
                            className="border rounded-[20px] overflow-hidden"
                        />

                        <figcaption className=" flex flex-col gap-[4px]">
                            <div className="badge bg-[#FAC418] rounded-[36px] text-[12px] font-[600] w-fit text-white leading-[16px] py-[5px] px-[15px]">
                                Sedang Diproses
                            </div>
                            <h3 className="text-[24px] font-[700] leading-[36px] text-black">
                                Acara Lainnya
                            </h3>
                            <p className="text-[16px] font-[600] leading-[24px]">
                                Tanggal : 12 September 2024
                            </p>
                        </figcaption>
                        <PrimaryButton className="font-normal rounded-[10px] w-[161px]  flex justify-center h-[40px] self-end text-[20px]">
                            Detail
                        </PrimaryButton>
                    </figure>
                </section>
                {/* Cards end */}
            </main>
        </AuthenticatedLayout>
    );
}

export default Orders;
