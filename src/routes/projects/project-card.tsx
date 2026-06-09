import { useContext, useState } from "react";

import { IProjectsState, ProjectsContext } from "./projects-context";

import "./project-card.css";

interface ProjectCardProps {
    src: string
    name: string
    links: {
        name: string
        href?: string
        modalProps?: IProjectsState
    }[]
}

const ProjectCard = ({ src, name, links }: ProjectCardProps) => {

    const { modalReducer } = useContext(ProjectsContext);
    
    const [hovering, setHovering] = useState(false);

    return (
        <div
            onMouseEnter={() => { setHovering(true) }}
            onMouseLeave={() => { setHovering(false) }}
        >
            <img
                className={"project-card-image " + (hovering ? "project-card-image-hover" : "")}
                src={src}
            />
            <p className="small">
                {name}
            </p>
            {
                hovering &&
                <div className="anchor">
                    <div className="project-card-overlay-links">
                        {links.map((link, idx) => {
                            if (link.modalProps) {
                                // Desc link is a link that opens a modal with a description
                                return (
                                    <p
                                        className="project-card-modal-link"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            modalReducer("all", link.modalProps);
                                        }}>
                                        {link.name}
                                    </p>
                                )
                            } else {
                                return <a className="project-card-modal-link" key={"project-link-" + idx} href={link.href} target="_blank">{link.name}</a>
                            }
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectCard;
