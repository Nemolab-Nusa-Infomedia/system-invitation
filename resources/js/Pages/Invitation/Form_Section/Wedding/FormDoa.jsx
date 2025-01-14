import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import React from "react";

export default function FormDoa() {
    return (
        <form action="">
            <InputLabel value={"Username"} />
            <TextInput />

            <PrimaryButton>Submit</PrimaryButton>
        </form>
    );
}
