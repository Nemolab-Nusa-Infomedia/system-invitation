import React, { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import "/resources/css/scrollbar.css";
import Form from "@/Components/invitation/Form";
import TextArea from "@/Components/invitation/TextArea";
import TextInput from "@/Components/invitation/TextInput";
import InputLabel from "@/Components/InputLabel";

export default function FormMempelai({ onClose }) {
    const [disabled, setDisabled] = useState(false);
    const [groomName, setGroomName] = useState("");
    const [groomParents, setGroomParents] = useState("");
    const [brideName, setBrideName] = useState("");
    const [brideParents, setBrideParents] = useState("");
    const [doaText, setDoaText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);
        setTimeout(() => {
            onClose();
        }, 200);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className="px-4 pb-16 py-7  h-[27rem] overflow-auto scrollbar-vertical border border-gray-300 rounded-md">
                <div className="mempelai-section  flex flex-col ">
                    <InputLabel className="flex justify-start font-[500]  text-gray-700  ">
                        Data Mempelai
                    </InputLabel>
                    <div className="mempelai-pria flex flex-col mt-1">
                        <TextInput
                            type="text"
                            placeholder="Nama Mempelai Pria"
                            value={groomName}
                            onChange={(e) => setGroomName(e.target.value)}
                            className=" w-full p-2 rounded-md border border-gray-300"
                            required
                        />
                        <TextInput
                            type="text"
                            placeholder="Orang Tua Mempelai Pria"
                            value={groomParents}
                            onChange={(e) => setGroomParents(e.target.value)}
                            className=" w-full p-2 rounded-md border border-gray-300 mt-2"
                            required
                        />
                    </div>
                    <span className="text-center my-2">dengan</span>
                    <div className="mempelai-wanita flex flex-col mt-2">
                        <TextInput
                            type="text"
                            placeholder="Nama Mempelai Wanita"
                            value={brideName}
                            onChange={(e) => setBrideName(e.target.value)}
                            className=" w-full p-2 rounded-md border border-gray-300"
                            required
                        />
                        <TextInput
                            type="text"
                            placeholder="Orang Tua Mempelai Wanita"
                            value={brideParents}
                            onChange={(e) => setBrideParents(e.target.value)}
                            className=" w-full p-2 rounded-md border border-gray-300 mt-2"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col mt-5">
                    <InputLabel
                        value={"Doa"}
                        for="doa"
                        className="self-start mb-1  font-[600]"
                    />
                    <TextArea
                        id="doa"
                        placeholder="Doa..."
                        rows={7}
                        onChange={(e) => setDoaText(e.target.value)}
                    />
                </div>
                <div className="Template  flex flex-col  mt-5">
                    <span className="flex justify-start   font-[600] text-gray-700">
                        Pilih Text Template
                    </span>

                    <div className="pembuka  flex flex-col mt-4 text-gray-700">
                        <span className="text-left  font-[500] ">Doa:</span>
                        <div className=" flex overflow-x-auto gap-4 whitespace-nowrap scrollbar-horizontal py-2  ">
                            {[
                                "Nikah Islam (Ar-Rum 21",
                                "Nikah Islam Yasin",
                                "Nikah Hindu",
                                "Nikah Kristen",
                            ].map((item, index) => (
                                <button
                                    className="text-left w-fit bg-gray-200 py-2 px-3 rounded-md hover:bg-gray-300"
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <PrimaryButton
                className="w-fit self-end text-md rounded-xl text-[14px]"
                disabled={disabled}
            >
                SAVE
            </PrimaryButton>
        </Form>
    );
}
