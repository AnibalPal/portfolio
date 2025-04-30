import { useEffect, useMemo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router";

import ProyectCard from "./proyect-card";
import ProyectInfoModal from "./proyect-info-modal";

import HuasoventurasImage from "../../assets/images/huasoventuras_thumbnail.png";
import FlappyBirdSpaceImage from "../../assets/images/flappy_bird_space.png";
import EtchASketch from "../../assets/images/etch-a-sketch.png";

import "./proyects.css";
import { ProyectsContext } from "./proyects-context";

const Proyects = () => {

    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const { modalState, modalReducer } = useContext(ProyectsContext);

    const webDevelopmentProyects = useMemo(() => {
        return [
            {
                name: "Etch a sketch",
                src: EtchASketch,
                links:
                    [
                        {
                            name: t("proyects.tryDemo"),
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

    const gameDevelopmentProyects = useMemo(() => {
        return [
            {
                name: "Huasoventuras",
                src: HuasoventurasImage,
                links:
                    [
                        {
                            name: t("proyects.playGame"),
                            href: "https://apg-games.itch.io/huasoventuras"
                        },
                        {
                            name: t("proyects.information"),
                            modalProps: {
                                infoModalOpen: true,
                                infoModalTitle: "Huasoventuras",
                                infoModalDesc: t("proyects.huasoventurasDesc")
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
                            name: t("proyects.playGame"),
                            href: "https://apg-games.itch.io/space-flappy-bird-clone"
                        }
                    ]
            }
        ]
    }, [i18n.language])

    // Might add some college proyects
    // const otherApps = useMemo(() => {
    //     return [
    //         {
    //             name: "Reinforcement Learning in Fighting games",
    //             src: HuasoventurasImage,
    //             links:
    //                 [
    //                     {
    //                         name: t("proyects.information"),
    //                         modalProps: {
    //                             infoModalOpen: true,
    //                             infoModalTitle: "Reinforcement Learning in Fighting games",
    //                             infoModalDesc: "My undergraduate thesis proyect, I used pytorch to apply a reinforcement type agent to a fighting videogame to research how would that agent handle that environment."
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
                    <p className="page-title">{t("proyects.name")}</p>
                    <div className="page-title-underline" />
                </div>
                <div className={"proyects-container " + (modalState.infoModalOpen ? "blur-bg" : "unblur-bg")}>
                    <div className="proyect-type-container">
                        <p className="medium">{t("proyects.webDevelopment")}</p>
                        <div className="proyect-list">
                            {
                                webDevelopmentProyects.map((proyect, idx) => {
                                    return (
                                        <div key={"proyect-" + idx}>
                                            <ProyectCard {...proyect} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="proyect-type-container">
                        <p className="medium">{t("proyects.gameDevelopment")}</p>
                        <div className="proyect-list">
                            {
                                gameDevelopmentProyects.map((proyect, idx) => {
                                    return (
                                        <div key={"proyect-" + idx}>
                                            <ProyectCard {...proyect} />
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
                <ProyectInfoModal />
            }
        </>
    )
}

export default Proyects;
