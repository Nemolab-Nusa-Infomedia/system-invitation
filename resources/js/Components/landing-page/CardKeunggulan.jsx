import React from "react";

function CardKeunggulan({
    image_class,
    card_class,
    rounded_class,
    image,
    titlle,
    description,
}) {
    return (
        <div className={`flex flex-col bg-[#FFEDF5] ${card_class}`}>
            <div className={`relative ${rounded_class}`}>
                <img src={image} alt="image" className={image_class} />
            </div>
            <h1 className="font-poppins font-bold text-lg leading-[27px] mt-[7px]">
                Desain Eksklusif dan Fleksibel
            </h1>
            <p className="font-normal text-base leading-[22.5px]">
                Sesuaikan desain undangan Anda dengan tema acara, tanpa batasan
                kreativitas.
            </p>
        </div>
    );
}

export default CardKeunggulan;
