import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "@/Components/dashboard/BorderDashboard";
import pernikahan from "/public/assets-dashboard/cincin.png";
import kedukaan from "/public/assets-dashboard/duka.png";
import acara from "/public/assets-dashboard/kado.png";

function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <main className="bg-gray-300">
                Selamat Datang Abdul Manaf,
                <div>Pesan Apa untuk Momen Istimewamu Hari Ini?</div>
                <div className="flex justify-center items-center flex-wrap gap-[16px] p-[32px]">
                    <Card
                        title="Pernikahan"
                        description="Rencanakan hari istimewa Anda dengan layanan pernikahan kami yang lengkap."
                        Image={<img src={pernikahan} />}
                    />
                    <Card
                        title="Kedukaan"
                        description="Kami hadir untuk membantu Anda memberikan penghormatan yang layak."
                        Image={<img src={kedukaan} />}
                    />
                    <Card
                        title="Acara Lainnya"
                        description="Layanan untuk berbagai acara spesial lainnya, dari ulang tahun hingga reuni."
                        Image={<img src={acara} />}
                    />
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
export default Dashboard;
