import { useState } from "react";

import { ProyectInfoModalProps } from "./types";

import "./proyect-card.css";

interface ProyectCardProps {
    src: string
    name: string
    setOpenModal?: Function
    links: {
        name: string
        href?: string
        modalProps?: null | ProyectInfoModalProps
    }[]
}

const ProyectCard = ({ src, name, setOpenModal, links }: ProyectCardProps) => {

    const [hovering, setHovering] = useState(false);

    return (
        <div
            onMouseEnter={() => { setHovering(true) }}
            onMouseLeave={() => { setHovering(false) }}
        >
            <img
                className={"proyect-card-image " + (hovering ? "proyect-card-image-hover" : "")}
                src={src}
            />
            <p className="small">
                {name}
            </p>
            {
                hovering &&
                <div className="anchor">
                    <div className="proyect-card-overlay-links">
                        {links.map((link, idx) => {
                            if (link.modalProps) {
                                // Desc link is a link that opens a modal with a description
                                return (
                                    <p
                                        className="proyect-card-modal-link"
                                        onClick={(e) => {
                                            if (setOpenModal) {
                                                e.stopPropagation();
                                                setOpenModal(link.modalProps);
                                            }
                                        }}>
                                        {link.name}
                                    </p>
                                )
                            } else {
                                return <a key={"proyect-link-" + idx} href={link.href} target="_blank">{link.name}</a>
                            }
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default ProyectCard;
