import React from "react";
import WeddingV1 from "./Template/Wedding/WeddingV1";
import BottomNavbar from "@/Components/invitation/BottomNavbar";
import NatalV1 from "./Template/Natal/NatalV1";
import NatalV2 from "./Template/Natal/NatalV2";
import KhitanV1 from "./Template/Khitan/KhitanV1";


export default function Invitation({ sampul_data }) {
    console.log(sampul_data);
    return (
        <div className="w-full relative">
            {/* <KhitanV1 /> */}
            <WeddingV1 data={sampul_data} />
            {/* <NatalV1 /> */}
      
            {/* <WeddingV1 /> */}
            {/* <NatalV1 /> */}
            {/* <NatalV2 /> */}
            <BottomNavbar />
        </div>
    );
}
