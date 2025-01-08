import { Link, Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/dashboard/PrimaryButton";
import registerImg from "/public/assets-dashboard/register.png";
import emailIcon from "/public/assets-dashboard/clarity_email-line.png";
import companyIcon from "/public/assets-dashboard/company.png";
import whatshappIcon from "/public/assets-dashboard/whatshapp.png";
import userIcon from "/public/assets-dashboard/user.png";
import hideEye from "/public/assets-dashboard/hide-eye.png";
import showEye from "/public/assets-dashboard/show-eye.png";
import Footer from "@/Components/dashboard/Footer";
import NavbarAuth from "@/Components/dashboard/NavbarAuth";

export default function Register() {
    // State untuk mengelola visibilitas password
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    // Menggunakan useForm untuk mengelola data form dan status
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        phone_number: "",
        name: "",
        password: "",
        password_confirmation: "",
        company: "",
        remember: false,
    });

    // Fungsi untuk mengirimkan form
    const submit = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        post(route("register"), {
            onFinish: () =>
                reset(
                    "email",
                    "phone_number",
                    "name",
                    "password",
                    "password_confirmation",
                    "company"
                ),
        });
    };

    // Fungsi untuk toggle visibilitas password
    const togglePasswordVisibility = (field) => {
        if (field === "password") {
            setPasswordVisible(!passwordVisible);
        } else if (field === "confirmPassword") {
            setConfirmPasswordVisible(!confirmPasswordVisible);
        }
    };

    console.log(data);

    return (
        <div>
            <Head title="Log in" />
            <NavbarAuth router={"login"} />
            <div className="flex  items-center  w-[1222px]  mt-[39px] mx-auto justify-center gap-x-[6.875rem] sm:pt-0">
                <section className="w-[504px]  font-poppins flex  flex-col gap-y-[23px] text-[#552401]  ">
                    <div className="text h-[95px] flex flex-col ">
                        <h1 className="font-[700]  text-[27px]">
                            Masuk ke Akun Anda
                        </h1>
                        <p className="text-[16px]">
                            Akses undangan pernikahan, kedukaan, dan acara
                            lainnya dengan mudah.
                        </p>
                    </div>

                    {/* Form untuk login */}
                    <form
                        onSubmit={submit}
                        className="flex flex-col gap-y-[24px] w-[451px]"
                    >
                        {/* Input untuk email */}
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                placeholder="Email"
                                isFocused={true}
                                icon={emailIcon}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                } // Mengupdate state email
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        {/* Input No Telp. */}
                        <div>
                            <TextInput
                                id="noTelp"
                                type="text"
                                name="noTelp"
                                value={data.phone_number}
                                autoComplete="noTelp"
                                placeholder="No Telephone"
                                inputMode="numeric"
                                icon={whatshappIcon}
                                onChange={(e) =>
                                    setData("phone_number", e.target.value)
                                } // Mengupdate state email
                            />
                            <InputError
                                message={errors.phone_number}
                                className="mt-2"
                            />
                        </div>

                        {/* Input Full name */}
                        <div>
                            <TextInput
                                id="fullName"
                                type="text"
                                name="fullName"
                                value={data.name}
                                autoComplete="nama lengkap"
                                placeholder="Nama Lengkap"
                                icon={userIcon}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                } // Mengupdate state email
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        {/* Input untuk password dan konfirmasi password */}
                        <div>
                            <div className="flex gap-[12px]">
                                {["password", "password_confirmation"].map(
                                    (field, index) => (
                                        <div
                                            className="relative flex w-full border"
                                            key={index}
                                        >
                                            <input
                                                id={field}
                                                type={
                                                    field === "password"
                                                        ? passwordVisible
                                                            ? "text"
                                                            : "password"
                                                        : confirmPasswordVisible
                                                        ? "text"
                                                        : "password"
                                                }
                                                name={field}
                                                className="mt-1 block h-[53px] w-full rounded-[12px] border-2 border-[#763201] text-[14px] transition-all duration-300 pr-10"
                                                value={data[field]}
                                                placeholder={
                                                    field === "password"
                                                        ? "Kata Sandi"
                                                        : " Konfirmasi Kata Sandi"
                                                }
                                                autoComplete={
                                                    field === "password"
                                                        ? "current-password"
                                                        : "new-password"
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        field,
                                                        e.target.value
                                                    )
                                                } // Mengupdate state untuk password atau konfirmasi password
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    togglePasswordVisibility(
                                                        field
                                                    )
                                                } // Mengubah visibilitas password
                                                className="absolute inset-y-0 end-0 flex items-center pr-3.5"
                                                tabIndex={-1}
                                            >
                                                <img
                                                    src={
                                                        field === "password"
                                                            ? passwordVisible
                                                                ? showEye
                                                                : hideEye
                                                            : confirmPasswordVisible
                                                            ? showEye
                                                            : hideEye
                                                    }
                                                    alt={
                                                        field === "password"
                                                            ? passwordVisible
                                                                ? "Hide password"
                                                                : "Show password"
                                                            : confirmPasswordVisible
                                                            ? "Hide confirm password"
                                                            : "Show confirm password"
                                                    }
                                                />
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        {/* Nama Perusahaan */}
                        <div>
                            <TextInput
                                id="namaPerusahaan"
                                type="text"
                                name="namaPerusahaan"
                                value={data.company}
                                autoComplete="username"
                                placeholder="Nama Perusahaan (Opsional)"
                                icon={companyIcon}
                                onChange={(e) =>
                                    setData("company", e.target.value)
                                } // Mengupdate state email
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                className="ml-1 hover:bg-[#763201] cursor-pointer"
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                } // Mengupdate state untuk checkbox
                            />
                            <span className="ms-2 text-sm text-gray-600 hover:bg-none">
                                Ingat Saya
                            </span>
                        </div>
                        {/* Tombol untuk mengirim form */}
                        <div className="mt-0 flex items-center justify-end">
                            <PrimaryButton
                                className="w-full h-[52px] flex justify-center text-[20px] rounded-[12px]"
                                disabled={processing} // Menonaktifkan tombol saat proses pengiriman
                            >
                                Daftar
                            </PrimaryButton>
                        </div>
                        <span className="text-[18px]">
                            Saya sudah memiliki akun.{" "}
                            <Link href={route("login")} className="font-[700]">
                                Masuk
                            </Link>
                        </span>
                    </form>
                </section>

                <section className="bg-[#E2B933] w-[600px] h-[657px] rounded-[25px] flex justify-center items-center">
                    <img
                        src={registerImg}
                        alt="Register"
                        width={500}
                        height={500}
                    />
                </section>
            </div>
            <Footer />
        </div>
    );
}
