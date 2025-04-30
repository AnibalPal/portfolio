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
                <div className="proyect-info-modal-title-container">
                    <p className="proyect-info-modal-title">{modalState.infoModalTitle}</p>
                    <p onClick={handleModalClose} className="proyect-info-modal-close">X</p>
                </div>
                <p className="proyect-info-modal-desc">{modalState.infoModalDesc}</p>
            </div>
        </div>
    )
}

export default ProyectInfoModal;
