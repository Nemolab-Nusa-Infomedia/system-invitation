import React from "react";
import WeddingV1 from "./Template/Wedding/WeddingV1";
// import KhitanV1 from "./Template/Khitan/KhitanV1";
import BottomNavbar from "@/Components/invitation/BottomNavbar";

export default function Invitation() {
    return (
        <div className="w-full relative">
            <WeddingV1 />
            {/* <KhitanV1 /> */}
            <BottomNavbar />
        </div>
    );
}
