import Navbar from "@/Components/landing-page/Navbar";
import Beranda from "./landing-page/Beranda";
import Keunggulan from "./landing-page/Keunggulan";
import Bantuan from "./landing-page/Bantuan";
import FiturPaket from "./landing-page/FiturPaket";

export default function Index() {
    return (
        <main>
            <Navbar />
            <Beranda />
            <Keunggulan />
            <Bantuan />
            <FiturPaket />
        </main>
    );
}
