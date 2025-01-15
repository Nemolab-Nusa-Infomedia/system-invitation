import Navbar from "@/Components/landing-page/Navbar";
import Beranda from "./landing-page/Beranda";
import Keunggulan from "./landing-page/Keunggulan";
import Bantuan from "./landing-page/Bantuan";
import FiturPaket from "./landing-page/FiturPaket";
import Footer from "@/Components/landing-page/Footer";
import Template from "./landing-page/Template";
import cs from "/public/asset-landing-page/cs.png";

export default function Index() {
    return (
        <main className="relative">
            <a href="https://wa.me/+62000000000?text=Halo" target="_blank">
                <img
                    src={cs}
                    className="fixed bottom-5 right-5 z-50 w-24 lg:w-28"
                    alt=""
                />
            </a>

            <Navbar />
            <Beranda />
            <Keunggulan />
            <Bantuan />
            <FiturPaket />
            <Template />
            <Footer />
        </main>
    );
}
