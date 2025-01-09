import Footer from "@/Components/landing-page/Footer";
import Navbar from "@/Components/landing-page/Navbar";
import image_banner from "/public/asset-landing-page/image.jpg";
import icons_calendar from "/public/asset-landing-page/icons-calendar.svg";
import list from "/public/asset-landing-page/list.svg";
import React from "react";
import { dumyBlogPosts } from "@/lib";
import BlogCard from "@/Components/landing-page/BlogCard";
import BigBlogCard from "@/Components/landing-page/BigBlogCard";

// Komponen TruncateText untuk menangani teks yang panjang
// const TruncateText = ({ text, maxLines = 2 }) => {
//     return (
//         <p
//             className={`
//         overflow-hidden
//         ${maxLines === 1 ? "text-ellipsis whitespace-nowrap" : "line-clamp-2"}
//       `}
//         >
//             {text}
//         </p>
//     );
// };

function Blog() {
    return (
        <>
            <Navbar />
            <main className="flex justify-center bg-white w-full pt-[126px]">
                <div className="max-w-[1440px] py-[72px] px-[70px] w-full flex flex-col gap-[100px]">
                    <header className="flex flex-col items-center font-poppins">
                        <h1 className="font-bold text-[32px] leading-[48px]">
                            Blog Inspirasi Undangan
                        </h1>
                        <p className="mt-3 font-medium text-lg leading-[27px] text-gray-600">
                            Menyajikan Berita, Tips, dan Desain Terkini untuk
                            Undangan Spesial Anda.
                        </p>
                    </header>
                    <div className="grid grid-cols-2 gap-[26px]">
                        {/* Featured Article */}
                        <div className="flex flex-col max-w-[624px] w-full gap-[18px]">
                            <img
                                src={image_banner}
                                alt="blog"
                                className="w-[624px] h-[375px] object-cover rounded-xl"
                            />
                            <div className="font-poppins space-y-3">
                                <h1 className="font-semibold text-[26px] leading-[39px]">
                                    Mengapa Undangan Pernikahan Digital Jadi
                                    Pilihan Utama di Era Modern?
                                </h1>
                                <p className="text-[#7F7C7C] line-clamp-2">
                                    Undangan pernikahan digital kini menjadi
                                    pilihan utama bagi banyak pasangan yang
                                    ingin merayakan hari spesial mereka dengan
                                    cara yang lebih modern dan praktis.
                                </p>

                                <div className="flex items-center gap-[25px] text-sm font-semibold">
                                    <span className="flex items-center gap-[10px]">
                                        <img src={icons_calendar} alt="date" />
                                        <p>2 Agustus 2024</p>
                                    </span>
                                    <span className="flex items-center gap-[10px]">
                                        <img src={list} alt="date" />
                                        <p>Umum</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Side Articles */}
                        <div className="flex flex-col gap-6">
                            {dumyBlogPosts.map((post, index) => (
                                <BlogCard key={index} {...post} />
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-[50px]">
                        <h1 className="font-semibold text-[27px] leading-[40px]">
                            Artikel Terbaru
                        </h1>
                        <div className="w-full grid sm:grid-cols-3 gap-[30px]">
                            <BigBlogCard />
                            <BigBlogCard />
                            <BigBlogCard />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Blog;
