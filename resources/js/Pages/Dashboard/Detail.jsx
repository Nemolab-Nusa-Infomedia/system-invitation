import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";

function Detail() {
    return (
        <AuthenticatedLayout>
            <main className="bg-blue-200">CONTENT</main>
        </AuthenticatedLayout>
    );
}

export default Detail;
