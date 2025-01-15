import React from "react";

function CardKeunggulan({
    image_class,
    card_class,
    rounded_class,
    image,
    titlle,
    description,
    title_class,
    description_class,
}) {
    return (
        <div className={`flex flex-col bg-[#FFEDF5] ${card_class}`}>
            <div className={`relative ${rounded_class}`}>
                <img src={image} alt="image" className={image_class} />
            </div>
            <h1 className={`font-poppins ${title_class}`}>Biaya terjangkau</h1>
            <p className={description_class}>
                Sesuaikan desain undangan Anda dengan tema acara, tanpa batasan
                kreativitas.
            </p>
        </div>
    );
}

export default CardKeunggulan;
