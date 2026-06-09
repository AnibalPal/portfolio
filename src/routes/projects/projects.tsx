import { useEffect, useMemo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router";

import ProjectCard from "./project-card";
import ProjectInfoModal from "./project-info-modal";

import LaUltimaSopaipillaImage from "../../assets/images/la_ultima_sopaipialla_thumbnail.png";
import HuasoventurasImage from "../../assets/images/huasoventuras_thumbnail.png";
import FlappyBirdSpaceImage from "../../assets/images/flappy_bird_space.png";
import EtchASketch from "../../assets/images/etch-a-sketch.png";

import "./projects.css";
import { ProjectsContext } from "./projects-context";

const Projects = () => {

    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const { modalState, modalReducer } = useContext(ProjectsContext);

    const webDevelopmentProjects = useMemo(() => {
        return [
            {
                name: "Etch a sketch",
                src: EtchASketch,
                links:
                    [
                        {
                            name: t("projects.tryDemo"),
                            href: "https://anibalpal.github.io/etch-a-sketch/"
                        },
                        {
                            name: "Github",
                            href: "https://github.com/AnibalPal/etch-a-sketch"
                        }
                    ]
            }
        ]
    }, [i18n.language])

    const gameDevelopmentProjects = useMemo(() => {
        return [
            {
                name: "La última sopaipilla",
                src: LaUltimaSopaipillaImage,
                links:
                    [
                        {
                            name: t("projects.playGame"),
                            href: "https://apg-games.itch.io/la-ultima-sopaipilla"
                        },
                        {
                            name: t("projects.information"),
                            modalProps: {
                                infoModalOpen: true,
                                infoModalTitle: "La última sopaipilla",
                                infoModalDesc: t("projects.laultimasopaipillaDesc")
                            }
                        }
                    ]
            },
            {
                name: "Huasoventuras",
                src: HuasoventurasImage,
                links:
                    [
                        {
                            name: t("projects.playGame"),
                            href: "https://apg-games.itch.io/huasoventuras"
                        },
                        {
                            name: t("projects.information"),
                            modalProps: {
                                infoModalOpen: true,
                                infoModalTitle: "Huasoventuras",
                                infoModalDesc: t("projects.huasoventurasDesc")
                            }
                        }
                    ]
            },
            {
                name: "Flappy bird space",
                src: FlappyBirdSpaceImage,
                links:
                    [
                        {
                            name: t("projects.playGame"),
                            href: "https://apg-games.itch.io/space-flappy-bird-clone"
                        }
                    ]
            }
        ]
    }, [i18n.language])

    // Might add some college projects
    // const otherApps = useMemo(() => {
    //     return [
    //         {
    //             name: "Reinforcement Learning in Fighting games",
    //             src: HuasoventurasImage,
    //             links:
    //                 [
    //                     {
    //                         name: t("projects.information"),
    //                         modalProps: {
    //                             infoModalOpen: true,
    //                             infoModalTitle: "Reinforcement Learning in Fighting games",
    //                             infoModalDesc: "My undergraduate thesis project, I used pytorch to apply a reinforcement type agent to a fighting videogame to research how would that agent handle that environment."
    //                         }
    //                     }
    //                 ]
    //         },
    //     ]
    // }, [])

    // Set effect listeners
    useEffect(() => {

        const handleKeyboardActions = (ev: KeyboardEvent) => {
            if (ev.key === "Escape") {
                if (modalState.infoModalOpen) {
                    modalReducer("open", false);
                } else {
                    navigate("/home");
                }
            }
        };

        const handleClickOutside = () => {
            modalReducer("open", false);
        }

        document.addEventListener("keydown", handleKeyboardActions);
        document.addEventListener("click", handleClickOutside);

        return (() => {
            document.removeEventListener("keydown", handleKeyboardActions);
            document.removeEventListener("click", handleClickOutside);
        })

    }, [modalState.infoModalOpen])

    return (
        <>
            <div className={"page-container"}>
                {/* NOTE: had to add all blur effects on each component instead of the base component in order to have
                 the blur effect and the fade in on page load */}
                <div className={"page-title-container " + (modalState.infoModalOpen ? "blur-bg" : "unblur-bg")}>
                    <p className="page-title">{t("projects.name")}</p>
                    <div className="page-title-underline" />
                </div>
                <div className={"projects-container " + (modalState.infoModalOpen ? "blur-bg" : "unblur-bg")}>
                    <div className="project-type-container">
                        <p className="medium">{t("projects.webDevelopment")}</p>
                        <div className="project-list">
                            {
                                webDevelopmentProjects.map((project, idx) => {
                                    return (
                                        <div key={"project-" + idx}>
                                            <ProjectCard {...project} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="project-type-container">
                        <p className="medium">{t("projects.gameDevelopment")}</p>
                        <div className="project-list">
                            {
                                gameDevelopmentProjects.map((project, idx) => {
                                    return (
                                        <div key={"project-" + idx}>
                                            <ProjectCard {...project} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <NavLink className={"go-back " + (modalState.infoModalOpen ? "blur-bg" : "unblur-bg")} to="/home">
                    {t("common.goBackAction")}
                </NavLink>
            </div>
            {modalState.infoModalOpen &&
                <ProjectInfoModal />
            }
        </>
    )
}

export default Projects;
