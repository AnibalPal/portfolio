import { useState } from "react";

import "./proyect-card.css";

interface ProyectCardProps {
    src: string
    name: string
    links: {
        name: string
        href: string
    }[]
}

const ProyectCard = ({ src, name, links }: ProyectCardProps) => {

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
                            return <a key={"proyect-link-" + idx} href={link.href} target="_blank">{link.name}</a>
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default ProyectCard;
