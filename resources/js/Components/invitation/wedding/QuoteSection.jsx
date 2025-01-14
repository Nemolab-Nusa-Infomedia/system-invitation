import Modal from "@/Components/invitation/Modal";
import { useState } from "react";

const QuoteSection = ({ title, quote, reference, form }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    return (
        <div className="quotes-content text-center p-3 animate-fadeInUp border border-dashed ">
            <h3
                className="mb-3 border border-dashed"
                onClick={() => handleOpenModal()}
            >
                {title}
            </h3>
            <div className="flex justify-center gap-2 mb-3">
                <img
                    src="/invitation-asset/undangan-v1/item-6.png"
                    width="30px"
                    alt=""
                />
                <img
                    src="/invitation-asset/undangan-v1/item-6.png"
                    width="30px"
                    alt=""
                />
                <img
                    src="/invitation-asset/undangan-v1/item-6.png"
                    width="30px"
                    alt=""
                />
            </div>
            <div className="border border-dashed">
                <p className="mb-3 ">{quote}</p>
                <p>{reference}</p>
            </div>
            <Modal show={isModalOpen} onClose={handleCloseModal}>
                {form}
            </Modal>
        </div>
    );
};

export default QuoteSection;
