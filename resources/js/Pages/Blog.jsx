import Footer from "@/Components/landing-page/Footer";
import Navbar from "@/Components/landing-page/Navbar";
import image_banner from "/public/asset-landing-page/image.jpg";
import icons_calendar from "/public/asset-landing-page/icons-calendar.svg";
import list from "/public/asset-landing-page/list.svg";
import React from "react";
import { dumyBlogPosts } from "@/lib";
import BlogCard from "@/Components/landing-page/BlogCard";
import BigBlogCard from "@/Components/landing-page/BigBlogCard";

function Blog() {
    return (
        <>
            <Navbar />
            <main className="flex justify-center bg-white w-full pt-28 lg:pt-[110px]">
                <div className="max-w-[1440px] py-8 sm:py-12 lg:py-[72px] px-4 sm:px-6 lg:px-[42px] xl:px-[70px] w-full flex flex-col gap-12 sm:gap-16 lg:gap-[60px]">
                    {/* Header Section */}
                    <header className="flex flex-col items-center font-poppins text-center px-4">
                        <h1 className="font-bold text-2xl sm:text-[28px] lg:text-[32px] leading-normal lg:leading-[48px]">
                            Blog Inspirasi Undangan
                        </h1>
                        <p className="mt-2 sm:mt-3 font-medium text-base sm:text-lg leading-relaxed text-gray-600 max-w-2xl">
                            Menyajikan Berita, Tips, dan Desain Terkini untuk
                            Undangan Spesial Anda.
                        </p>
                    </header>

                    {/* Featured Articles Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[14px] xl:gap-[26px]">
                        {/* Featured Article */}
                        <div className="flex flex-col w-full gap-4 sm:gap-[16px]">
                            <img
                                src={image_banner}
                                alt="blog"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                            <div className="font-poppins space-y-3">
                                <h1 className="font-semibold text-xl sm:text-2xl lg:text-[26px] leading-tight lg:leading-[39px]">
                                    Mengapa Undangan Pernikahan Digital Jadi
                                    Pilihan Utama di Era Modern?
                                </h1>
                                <p className="text-[#7F7C7C] text-sm sm:text-base line-clamp-2">
                                    Undangan pernikahan digital kini menjadi
                                    pilihan utama bagi banyak pasangan yang
                                    ingin merayakan hari spesial mereka dengan
                                    cara yang lebih modern dan praktis.
                                </p>
                                <div className="flex items-center gap-4 sm:gap-[25px] text-xs sm:text-sm font-semibold">
                                    <span className="flex items-center gap-2 sm:gap-[10px]">
                                        <img
                                            src={icons_calendar}
                                            alt="date"
                                            className="w-4 sm:w-auto"
                                        />
                                        <p>2 Agustus 2024</p>
                                    </span>
                                    <span className="flex items-center gap-2 sm:gap-[10px]">
                                        <img
                                            src={list}
                                            alt="date"
                                            className="w-4 sm:w-auto"
                                        />
                                        <p>Umum</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Side Articles */}
                        <div className="flex flex-col gap-4 lg:gap-[10px] xl:gap-6">
                            {dumyBlogPosts.map((post, index) => (
                                <BlogCard key={index} {...post} />
                            ))}
                        </div>
                    </div>

                    {/* Latest Articles Section */}
                    <div className="w-full flex flex-col gap-6 font-poppins sm:gap-[50px]">
                        <h1 className="font-semibold sm:text-2xl xl:text-3xl text-[27px] leading-tight lg:leading-[40px]">
                            Artikel Terbaru
                        </h1>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[30px]">
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
