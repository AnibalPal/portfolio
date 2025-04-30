import { useContext } from "react";

import { ProyectsContext } from "./proyects-context";

import "./proyect-info-modal.css";

const ProyectInfoModal = () => {

    const { modalState, modalReducer } = useContext(ProyectsContext);

    const handleModalClose = () => {
        modalReducer("open", false);
    }

    return (
        <div className="anchor" onClick={(e) => e.stopPropagation()}>
            <div className="proyect-info-modal-container">
                <div className="proyect-card-modal-title-container">
                    <p className="proyect-card-modal-title">{modalState.infoModalTitle}</p>
                    <p onClick={handleModalClose} className="proyect-card-modal-close">X</p>
                </div>
                <p className="proyect-card-modal-desc">{modalState.infoModalDesc}</p>
            </div>
        </div>
    )
}

export default ProyectInfoModal;
