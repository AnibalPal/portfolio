import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router";

import ProyectCard from "./proyect-card";

import FlappyBirdSpaceImage from "../../assets/images/flappy_bird_space.png";
import EtchASketch from "../../assets/images/etch-a-sketch.png";

import "./proyects.css";

const Proyects = () => {

    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

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

    useEffect(() => {

        const handleKeyboardActions = (ev: KeyboardEvent) => {

            if (ev.key === "Escape") {
                navigate("/home");
            }

        };

        document.addEventListener("keydown", handleKeyboardActions);

        return (() => {
            document.removeEventListener("keydown", handleKeyboardActions);
        })

    }, [])

    return (
        <div className="page-container">
            <div className="page-title-container">
                <p className="page-title">{t("proyects.name")}</p>
                <div className="page-title-underline" />
            </div>
            <div className="proyects-container">
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
            <NavLink className={"go-back"} to="/home">
                {t("common.goBackAction")}
            </NavLink>
        </div>
    )
}

export default Proyects;
