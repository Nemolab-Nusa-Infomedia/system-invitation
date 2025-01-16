import FormMempelai from "@/Pages/Invitation/Form_Section/Wedding/FormMepelai";
import Modal from "../Modal";
import { useState, useEffect, useCallback } from "react";
const MempelaiSection = ({ groom, bride }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className="mempelai-content text-center p-3 ">
            <div
                className="border border-dashed cursor-text"
                onClick={() => handleOpenModal()}
            >
                <div className="">
                    <h5 className="mb-3">
                        بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
                    </h5>
                    <i>Assalamu'alaikum Warahmatullahi Wabarakatuh</i>
                    <p className="mt-4 mb-4">
                        Maha suci Allah SWT, yang telah menciptakan makhluk-Nya
                        berpasang-pasangan, Ya Allah, dengan kerendahan hati,
                        perkenankanlah kami menikahkan putri-putri kami:
                    </p>
                </div>
                <div className="nama-mempelai  mt-2">
                    <div className="mempelai-pria ">
                        <h3>{groom.name}</h3>
                        <p>Putra dari {groom.parents}</p>
                    </div>
                    <span>dengan</span>
                    <div className="mempelai-wanita">
                        <h3>{bride.name}</h3>
                        <p>Putri dari {bride.parents}</p>
                    </div>
                </div>
            </div>

            <Modal show={isModalOpen} onClose={handleCloseModal}>
                <FormMempelai onClose={handleCloseModal} />
            </Modal>
        </div>
    );
};

export default MempelaiSection;
