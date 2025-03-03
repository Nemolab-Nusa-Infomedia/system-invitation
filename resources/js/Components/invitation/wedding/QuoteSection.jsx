import Modal from "@/Components/invitation/Modal";
import FormQuote from "@/Pages/Invitation/Form_Section/Wedding/FormQuote";
import { useState } from "react";
import { motion } from "framer-motion";

const QuoteSection = ({ title, quote, reference, onClose }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className="quotes-content text-center p-3 animate-fadeInUp ">
            <motion.div
                animate={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 1, type: "keyframes" }}
                whileInView={{ scale: 1, opacity: 1 }}
            >
                <div
                    className="border border-dashed cursor-text"
                    onClick={handleOpenModal}
                >
                    {/* Title opens modal */}
                    <h3 className="mb-3  ">{title}</h3>

                    {/* Decorative Images */}
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

                    {/* Quote Content */}
                    <div className="">
                        <p className="mb-3">{quote}</p>
                        <p>{reference}</p>
                    </div>
                </div>
            </motion.div>
            {/* Modal */}
            <Modal show={isModalOpen} onClose={handleCloseModal}>
                <FormQuote onClose={handleCloseModal} />
            </Modal>
        </div>
    );
};

export default QuoteSection;
