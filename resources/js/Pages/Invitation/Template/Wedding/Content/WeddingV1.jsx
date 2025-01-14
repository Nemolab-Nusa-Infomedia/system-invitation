import React from "react";
import "../../css/undangan-v1/main.css";
import QuoteSection from "@/Components/invitation/wedding/QuoteSection";
import MempelaiSection from "@/Components/invitation/wedding/MempelaiSection";
import EventSection from "@/Components/invitation/wedding/EventSection";
import DoaSection from "@/Components/invitation/wedding/DoaSection";
import FormDoa from "@/Pages/Invitation/Form_Section/Wedding/FormDoa";

function ContentWeddingV1() {
    const groom = {
        name: "Rama Bagus Pramana",
        parents: "B apak Sugeng dan Ibu Tri Rahayu",
    };
    const bride = {
        name: "Shinta Dwi Maharani",
        parents: "Bapak Mulyadi dan Ibu Sulastri",
    };
    const location = {
        title: "Kediaman Mempelai Wanita",
        address:
            "Dukuh sendangrejo, Desa Kalinanas Rt 006/Rw 003 Kec. Japah, Kab. Blora, Jawa Tengah",
    };
    const signers = [
        "Bpk Mulyadi & Ibu Sulastri",
        "Bpk Sugeng & Ibu Tri Rahayu",
    ];

    return (
        <div className="flex flex-col w-screen relative">
            <audio hidden autoPlay loop>
                <source
                    src="/audio/Yovie-Nuno-Janji-Suci.mp3"
                    type="audio/mp3"
                />
            </audio>

            <div className="flex lg:w-1/3 mx-auto ">
                <div className="cover items-center justify-center flex ">
                    <img
                        src="/invitation-asset/undangan-v1/item-1.png"
                        className="item-image-1"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        className="item-image-2"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-2.png"
                        className="item-image-3"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-1.png"
                        className="item-image-4"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-3.png"
                        className="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        className="item-image-7"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-4.png"
                        className="item-image-8"
                        alt=""
                    />
                    <QuoteSection
                        title="Rama & Shinta"
                        quote="Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                        reference="(Ar-Rum: 21)"
                        form={<FormDoa />}
                    />
                </div>
            </div>

            <div className="flex lg:w-1/3 mx-auto">
                <div className="cover items-center justify-center flex">
                    <img
                        src="/invitation-asset/undangan-v1/item-1.png"
                        className="item-image-1"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        className="item-image-2"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-2.png"
                        className="item-image-3"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-1.png"
                        className="item-image-4"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-3.png"
                        className="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        className="item-image-7"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-4.png"
                        className="item-image-8"
                        alt=""
                    />
                    <MempelaiSection groom={groom} bride={bride} />
                </div>
            </div>

            <div className="w-full lg:w-1/3 mx-auto">
                <div className="cover items-center justify-center flex">
                    <img
                        src="/invitation-asset/undangan-v1/item-1.png"
                        className="item-image-1"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        className="item-image-2"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-2.png"
                        className="item-image-3"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-1.png"
                        className="item-image-4"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-3.png"
                        className="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation -asset/undangan-v1/line-2.png"
                        className="item-image-7"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-4.png"
                        className="item-image-8"
                        alt=""
                    />
                    <EventSection
                        eventName="Akad Nikah"
                        date="Sabtu, 30 Agustus 2024"
                        time="Pukul : 09.00 WIB s/d Selesai"
                        location={location}
                    />
                </div>
            </div>

            <div className="flex w-full lg:w-1/3 mx-auto">
                <div className="cover items-center justify-center flex">
                    <img
                        src="/invitation-asset/undangan-v1/item-1.png"
                        className="item-image-1"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        className="item-image-2"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-2.png"
                        className="item-image-3"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-1.png"
                        className="item-image-4"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-3.png"
                        className="item-image-6"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/line-2.png"
                        className="item-image-7"
                        alt=""
                    />
                    <img
                        src="/invitation-asset/undangan-v1/item-4.png"
                        className="item-image-8"
                        alt=""
                    />
                    <DoaSection
                        title="Rama & Shinta"
                        message="Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan"
                        signers={signers}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContentWeddingV1;
