import React from "react";
// import WeddingV1 from "./Template/Wedding/WeddingV1";
// import KhitanV1 from "./Template/Khitan/KhitanV1";
import BottomNavbar from "@/Components/invitation/BottomNavbar";
import NatalV1 from "./Template/Natal/NatalV1";

export default function Invitation() {
    return (
        <div className="w-full relative">
            {/* <KhitanV1 /> */}
            {/* <WeddingV1 /> */}
            <NatalV1 />
            <BottomNavbar />
        </div>
    );
}
