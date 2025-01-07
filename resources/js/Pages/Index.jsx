import Navbar from "@/Components/landing-page/Navbar";
import Beranda from "./landing-page/Beranda";
import Keunggulan from "./landing-page/Keunggulan";

export default function Index() {
    return (
        <main>
            <Navbar />
            <Beranda />
            <Keunggulan />
        </main>
    );
}
