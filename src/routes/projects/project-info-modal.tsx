import { useContext } from "react";

import { ProjectsContext } from "./projects-context";

import "./project-info-modal.css";

const ProjectInfoModal = () => {

    const { modalState, modalReducer } = useContext(ProjectsContext);

    const handleModalClose = () => {
        modalReducer("open", false);
    }

    return (
        <div className="anchor" onClick={(e) => e.stopPropagation()}>
            <div className="project-info-modal-container">
                <div className="project-info-modal-title-container">
                    <p className="project-info-modal-title">{modalState.infoModalTitle}</p>
                    <p onClick={handleModalClose} className="project-info-modal-close">X</p>
                </div>
                <p className="project-info-modal-desc">{modalState.infoModalDesc}</p>
            </div>
        </div>
    )
}

export default ProjectInfoModal;
