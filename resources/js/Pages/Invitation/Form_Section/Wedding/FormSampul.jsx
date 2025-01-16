import React, { useState } from "react";
import "/resources/css/scrollbar.css";
import Form from "@/Components/invitation/Form";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/invitation/TextInput";
import InputLabel from "@/Components/InputLabel";

export default function FormSampul({ onClose }) {
    const [disabled, setDisabled] = useState(false);
    const [namaMempelaiPria, setNamaMempelaiPria] = useState("");
    const [namaMempelaiWanita, setNamaMempelaiWanita] = useState("");
    const [weddingDate, setWeddingDate] = useState("");
    // const [recipientName, setRecipientName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setDisabled(true);
        setTimeout(() => {
            onClose();
        }, 200);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className="px-4 pb-16 py-5 h-[27rem] overflow-auto scrollbar-vertical border border-gray-300 rounded-md">
                <div className="flex flex-col mb-4">
                    <InputLabel
                        value={"Nama Mempelai "}
                        for="nama-mempelai"
                        className="self-start font-[500] text-gray-700"
                    />
                    <div className="flex gap-3">
                        <TextInput
                            id="nama-mempelai"
                            placeholder="Pria"
                            value={namaMempelaiPria}
                            onChange={(e) =>
                                setNamaMempelaiPria(e.target.value)
                            }
                        />{" "}
                        <TextInput
                            id="nama-mempelai"
                            placeholder="Wanita"
                            value={namaMempelaiWanita}
                            onChange={(e) =>
                                setNamaMempelaiWanita(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="flex flex-col mb-4">
                    <InputLabel
                        value={"Tanggal Pernikahan"}
                        for="wedding-date"
                        className="self-start font-[500] text-gray-700"
                    />
                    <TextInput
                        type="date"
                        id="wedding-date"
                        value={weddingDate}
                        onChange={(e) => setWeddingDate(e.target.value)}
                    />
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
