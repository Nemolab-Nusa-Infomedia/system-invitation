import { Link, Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/dashboard/PrimaryButton";
import loginImg from "/public/assets-dashboard/login.png";
import emailIcon from "/public/assets-dashboard/clarity_email-line.png";
import hideEye from "/public/assets-dashboard/hide-eye.png";
import showEye from "/public/assets-dashboard/show-eye.png";
import Footer from "@/Components/dashboard/Footer";
import NavbarAuth from "@/Components/dashboard/NavbarAuth";

export default function Login({ status }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible); // Toggle visibilitas password
    };

    return (
        <div className=" ">
            <Head title="Log in" />
            <NavbarAuth router={"register"} />
            <div className="flex mb-20 items-center w-full px-[6.875rem]  mt-[39px]  mx-auto justify-center gap-x-[6.875rem] sm:pt-0">
                <section className=" w-[504px] h-[406px]   ">
                    {/* Children Login */}

                    {/* {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )} */}

                    <div className="text h-[95px] mb-5">
                        <h1 className="font-extrabold text-[27px]">
                            Masuk ke Akun Anda
                        </h1>
                        <p className="text-[16px]">
                            Akses undangan pernikahan, kedukaan, dan acara
                            lainnya dengan mudah.
                        </p>
                    </div>

                    <form
                        onSubmit={submit}
                        className=" flex flex-col gap-y-[30px] w-[451px]"
                    >
                        <div className="relative " id="email">
                            <div className="relative ">
                                <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none ">
                                    <img src={emailIcon} alt="" />
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full h-[53px] border-2   text-[14px]"
                                    autoComplete="username"
                                    placeholder="Email"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="relative " id="password">
                            <div className="relative">
                                <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
                                    <img src={emailIcon} alt="Email icon" />
                                </div>
                                <div className="relative">
                                    <TextInput
                                        id="password"
                                        type={
                                            passwordVisible
                                                ? "text"
                                                : "password"
                                        } // Tipe berubah
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block h-[53px] w-full border-2 text-[14px] transition-all duration-300" // Tambahkan transisi
                                        placeholder="Kata Sandi"
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 end-0 flex items-center pr-3.5 transition-transform duration-300" // Transisi untuk tombol
                                    >
                                        {passwordVisible ? (
                                            <img
                                                src={showEye}
                                                alt="Show password"
                                                className="transition-transform duration-300"
                                            />
                                        ) : (
                                            <img
                                                src={hideEye}
                                                alt="Hide password"
                                                className="transition-transform duration-300"
                                            />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className=" flex">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                className="ml-1 hover:bg-[#763201] cursor-pointer"
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />

                            <span className="ms-2 text-sm text-gray-600 hover:bg-none">
                                Ingat Saya
                            </span>
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            <PrimaryButton
                                className="w-full h-[52px] flex justify-center text-[20px] rounded-[12px]"
                                disabled={processing}
                            >
                                Masuk
                            </PrimaryButton>
                        </div>
                    </form>

                    {/* Children Login end*/}
                </section>

                <section className="bg-[#E2B933]  rounded-[25px]">
                    <img
                        src={loginImg}
                        alt=""
                        width={500}
                        height={500}
                        className="px-[50px] p-[78px]"
                    />
                </section>
            </div>

            <Footer />
        </div>
    );
}
