import { ProyectInfoModalProps } from "./types";

import "./proyect-info-modal.css";

const ProyectInfoModal = ({ title, text }: ProyectInfoModalProps) => {
    return (
        <div className="anchor" onClick={(e) => e.stopPropagation()}>
            <div className="proyect-info-modal-container">
                <div className="proyect-card-modal-title-container">
                    <p className="proyect-card-modal-title">{title}</p>
                    <p className="proyect-card-modal-close">X</p>
                </div>
                <p className="proyect-card-modal-desc">{text}</p>
            </div>
        </div>
    )
}

export default ProyectInfoModal;
