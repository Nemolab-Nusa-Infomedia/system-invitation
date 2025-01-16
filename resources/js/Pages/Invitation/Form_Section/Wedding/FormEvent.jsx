import React, { useState } from "react";
import TextInput from "@/Components/invitation/TextInput"; // Assuming you have a TextInput component
import Form from "@/Components/invitation/Form";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";

const FormEvent = ({ onClose }) => {
    const [disabled, setDisabled] = useState(false);
    const [eventName, setEventName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [locationTitle, setLocationTitle] = useState("");
    const [locationAddress, setLocationAddress] = useState("");

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
                <InputLabel className="font-[500]  text-gray-700 text-left">
                    Detail Acara
                </InputLabel>
                <TextInput
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="mb-3"
                    required
                />
                <TextInput
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mb-3"
                    required
                />
                <TextInput
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mb-3"
                    required
                />
                <TextInput
                    type="text"
                    placeholder="Location Title"
                    value={locationTitle}
                    onChange={(e) => setLocationTitle(e.target.value)}
                    className="mb-3"
                    required
                />
                <TextInput
                    type="text"
                    placeholder="Location Address"
                    value={locationAddress}
                    onChange={(e) => setLocationAddress(e.target.value)}
                    className="mb-3"
                    required
                />
            </div>

            <PrimaryButton
                type="submit"
                className="w-fit self-end text-md rounded-xl text-[14px]"
                disabled={disabled}
            >
                SAVE
            </PrimaryButton>
        </Form>
    );
};

export default FormEvent;
