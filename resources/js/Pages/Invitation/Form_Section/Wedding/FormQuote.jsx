import React, { useState } from "react";
import "/resources/css/scrollbar.css";
import Form from "@/Components/invitation/Form";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/invitation/TextArea";
import TextInput from "@/Components/invitation/TextInput";
import InputLabel from "@/Components/InputLabel";

export default function FormQuote({ onClose }) {
    const [disabled, setDisabled] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        setDisabled(true);
        setTimeout(() => {
            onClose();
        }, 200);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className="px-4 pb-16 py-5  h-[27rem] overflow-auto scrollbar-vertical border-y border-gray-300 ">
                <div className="nama-mempelai flex flex-col ">
                    <InputLabel
                        value={"Nama Mempelai"}
                        for="nama-mempelai"
                        className="self-start  font-[500]  text-gray-700 "
                    />
                    <TextInput
                        id="nama-mempelai"
                        placeholder="Pria"
                        className={"mb-1"}
                        value={""}
                    />
                    <TextInput
                        id="nama-mempelai"
                        placeholder="Wanita"
                        value={""}
                    />
                </div>
                <div className="flex flex-col mt-4">
                    <InputLabel
                        value={"Doa"}
                        for="doa"
                        className="self-start mb-1 font-[500]  text-gray-700 "
                    />
                    <TextArea
                        id="doa"
                        placeholder="Doa....."
                        rows={7}
                        onChange={(e) => setDoaText(e.target.value)}
                    />
                </div>

                <div className="Template text-gray-600 flex flex-col  mt-5">
                    <span className="flex justify-start   font-[700]">
                        Pilih Text Template
                    </span>

                    <div className="doa  flex flex-col">
                        <span className="text-left font-[500]">Doa:</span>
                        <div className=" flex overflow-x-auto gap-4 whitespace-nowrap scrollbar-horizontal py-2 ">
                            {[
                                "Nikah Islam (Ar-Rum 21",
                                "Nikah Islam Yasin",
                                "Nikah Hindu",
                                "Nikah Kristen",
                            ].map((item, index) => (
                                <button
                                    className="text-left w-fit bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300"
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pembuka  flex flex-col mt-4">
                        <span className="text-left  font-[500]">Pembuka:</span>
                        <div className=" flex overflow-x-auto gap-4 whitespace-nowrap scrollbar-horizontal py-2 ">
                            {[
                                "Nikah Islam (Ar-Rum 21",
                                "Nikah Islam Yasin",
                                "Nikah Hindu",
                                "Nikah Kristen",
                            ].map((item, index) => (
                                <button
                                    className="text-left w-fit bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300"
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
