import { useContext, useState } from "react";

import { IProyectsState, ProyectsContext } from "./proyects-context";

import "./proyect-card.css";

interface ProyectCardProps {
    src: string
    name: string
    links: {
        name: string
        href?: string
        modalProps?: IProyectsState
    }[]
}

const ProyectCard = ({ src, name, links }: ProyectCardProps) => {

    const { modalReducer } = useContext(ProyectsContext);
    
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
                                            e.stopPropagation();
                                            modalReducer("all", link.modalProps);
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
