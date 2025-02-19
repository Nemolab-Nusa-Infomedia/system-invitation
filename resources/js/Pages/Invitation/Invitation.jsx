import React from "react";
// import WeddingV1 from "./Template/Wedding/WeddingV1";
import NatalV1 from "./Template/Natal/NatalV1";
import BottomNavbar from "@/Components/invitation/BottomNavbar";

export default function Invitation() {
    return (
        <div className="w-full relative">
            {/* <WeddingV1 /> */}
            <NatalV1 />
            <BottomNavbar />
        </div>
    );
}
