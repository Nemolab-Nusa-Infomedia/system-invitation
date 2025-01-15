import search from "/public/asset-landing-page/search.svg";
import Button from "@/Components/landing-page/Button";
import CardKeunggulan from "@/Components/landing-page/CardKeunggulan";
import pen from "/public/asset-landing-page/pen.svg";
import telepone from "/public/asset-landing-page/telepone.svg";
import gembok from "/public/asset-landing-page/gembok.svg";
import clock from "/public/asset-landing-page/clock.svg";
import kantung from "/public/asset-landing-page/kantung-uang.svg";
import list_board from "/public/asset-landing-page/list-board.svg";
import leaves from "/public/asset-landing-page/leaves.svg";

function Keunggulan() {
    return (
        <section
            className="flex flex-col items-center w-full sm:scroll-mt-36"
            id="keunggulan"
        >
            <div className="flex flex-col max-w-[1440px] mt-[100px] lg:mt-0 px-[50px] xl:px-[175px] w-full justify-center">
                <div className="flex items-center flex-col">
                    <h1 className="font-poppins font-bold text-[22px] lg:text-[32px] leading-[33px] lg:leading-[48px]">
                        Kenapa Memilih Kami?
                    </h1>
                    <p className="font-poppins text-center text-xs lg:text-base">
                        Pilihan tepat untuk undangan digital yang praktis dan
                        berkesan.
                    </p>
                </div>
                <div className="mt-[39px] flex flex-col lg:flex-row gap-5 w-full">
                    <CardKeunggulan
                        card_class={
                            "p-[25px] hover:text-[#FFCEE2] hover:bg-[#a31543] transition-all duration-300  lg:w-calc_3  gap-[7px] rounded-[11px]"
                        }
                        rounded_class={
                            "bg-[#FFCEE2] flex justify-center items-center rounded-full w-[60px] h-[60px]"
                        }
                        image={pen}
                        title_class="font-bold text-base lg:text-lg leading-[24px] lg:leading-[27px] mt-[7px]"
                        description_class={`font-normal text-sm leading-[21px] lg:leading-[22.5px]`}
                    />
                    <CardKeunggulan
                        card_class={
                            "p-[25px] hover:text-[#FFCEE2] hover:bg-[#a31543] transition-all duration-300  lg:w-calc_3  gap-[7px] rounded-[11px]"
                        }
                        rounded_class={
                            "bg-[#FFCEE2] flex justify-center items-center rounded-full w-[60px] h-[60px]"
                        }
                        image={telepone}
                        title_class="font-bold text-base lg:text-lg leading-[24px] lg:leading-[27px] mt-[7px]"
                        description_class={`font-normal text-sm leading-[21px] lg:leading-[22.5px]`}
                    />
                    <CardKeunggulan
                        card_class={
                            "p-[25px] hover:text-[#FFCEE2] hover:bg-[#a31543] transition-all duration-300  lg:w-calc_3  gap-[7px] rounded-[11px]"
                        }
                        rounded_class={
                            "bg-[#FFCEE2] flex justify-center items-center rounded-full w-[60px] h-[60px]"
                        }
                        image={gembok}
                        title_class="font-bold text-base lg:text-lg leading-[24px] lg:leading-[27px] mt-[7px]"
                        description_class={`font-normal text-sm leading-[21px] lg:leading-[22.5px]`}
                    />
                </div>
            </div>
            <div className="max-w-[1440px] w-full py-28 px-[20px] lg:px-[50px] xl:px-[90px]  font-poppins">
                <div className="flex flex-col xl:flex-row lg:justify-between xl:items-center">
                    <div className="flex flex-col gap-[23px] w-full xl:max-w-[534px] ">
                        <h1 className="font-bold text-[24px] lg:text-[2rem] leading-[36px] lg:leading-[48px]">
                            Keunggulan Undangan Digital untuk Acara Lebih
                            Praktis dan Modern
                        </h1>
                        <p className="text-xs leading-[18px] lg:leading-6">
                            Undangan digital memberikan kemudahan dalam
                            mengelola acara Anda. Hemat biaya, ramah lingkungan,
                            dan praktis digunakan, membuat setiap momen terasa
                            lebih spesial tanpa perlu repot. Pilihan tepat untuk
                            acara yang modern dan efisien!
                        </p>
                        <Button
                            image={search}
                            text_class={"text-white"}
                            text={"Pesan Sekarang"}
                            button_class={
                                "py-3 px-5 bg-[#FF61A2] transition-all hover:bg-[#a31543]"
                            }
                            link={"/"}
                        />
                    </div>
                    <div className="grid lg:flex xl:grid grid-cols-2 lg:grid-rows-1 xl:grid-cols-2 mt-10 xl:mt-0 gap-[13px] w-auto lg:p-6 ">
                        <CardKeunggulan
                            card_class="bg-[#FFEDF5] hover:bg-[#ff61a3] hover:text-white hover:-rotate-3 transition-all rounded-[30px] py-[30px] hover px-[27px] flex flex-col items-start gap-[15px]"
                            rounded_class={
                                "bg-[#F72585] rounded-full w-[30px] h-[30px] ml-[20px]"
                            }
                            image={clock}
                            image_class=" absolute -left-[20px]  min-w-[40px] -top-3"
                            title_class="font-bold text-xs lg:text-lg leading-[18px] lg:leading-[27px] mt-[7px]"
                            description_class={`font-normal text-[10px] lg:text-base leading-[15px] lg:leading-[22.5px]`}
                        />
                        <CardKeunggulan
                            card_class="bg-[#FFEDF5] hover:bg-[#ff61a3] hover:text-white hover:-rotate-3 transition-all rounded-[30px] py-[30px] px-[27px] flex flex-col items-start gap-[15px]"
                            rounded_class={
                                "bg-[#F72585] rounded-full w-[30px] h-[30px] ml-[20px]"
                            }
                            image={kantung}
                            image_class=" absolute -left-[20px]  min-w-[40px]"
                            title_class="font-bold text-xs lg:text-lg leading-[18px] lg:leading-[27px] mt-[7px]"
                            description_class={`font-normal text-[10px] lg:text-base leading-[15px] lg:leading-[22.5px]`}
                        />
                        <CardKeunggulan
                            card_class="bg-[#FFEDF5] hover:bg-[#ff61a3] hover:text-white hover:-rotate-3 transition-all rounded-[30px] py-[30px] px-[27px] flex flex-col items-start gap-[15px]"
                            rounded_class={
                                "bg-[#F72585] rounded-full w-[30px] h-[30px] ml-[20px]"
                            }
                            image={list_board}
                            image_class=" absolute -left-[20px]  min-h-[42px] -top-2"
                            title_class="font-bold text-xs lg:text-lg leading-[18px] lg:leading-[27px] mt-[7px]"
                            description_class={`font-normal text-[10px] lg:text-base leading-[15px] lg:leading-[22.5px]`}
                        />
                        <CardKeunggulan
                            card_class="bg-[#FFEDF5]  hover:bg-[#ff61a3] hover:text-white hover:-rotate-3 transition-all rounded-[30px] py-[30px] px-[27px] flex flex-col items-start gap-[15px]"
                            rounded_class={
                                "bg-[#F72585] rounded-full w-[30px] h-[30px] ml-[20px]"
                            }
                            image={leaves}
                            image_class=" absolute -left-[20px]  min-w-[40px] -top-2"
                            title_class="font-bold text-xs lg:text-lg leading-[18px] lg:leading-[27px] mt-[7px]"
                            description_class={`font-normal text-[10px] lg:text-base leading-[15px] lg:leading-[22.5px]`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Keunggulan;
