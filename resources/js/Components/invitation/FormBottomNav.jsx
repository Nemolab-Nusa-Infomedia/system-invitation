import React from "react";
import Form from "./Form";
export default function FormBottomNav({ children, onSubmit }) {
    return (
        <Form className="bg-white " onSubmit={onSubmit}>
            <div className="px-4 pb-16 py-5  h-[31rem] overflow-auto scrollbar-vertical border border-gray-300 rounded-md">
                {children}
            </div>
        </Form>
    );
}
