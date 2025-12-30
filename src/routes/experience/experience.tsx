import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router";

import Timeline from "./timeline";
import ExperienceEntry from "./experience-entry";

import "./experience.css";

import arcadiImage from "../../assets/images/Arcadi.png";
import nirvanaImage from "../../assets/images/NirvanaAI-1.png";
import myfutureImage from "../../assets/images/myfuture.webp";
import usmImage from "../../assets/images/escudo-usm.png";
import usizePhone from "../../assets/images/usize_phone.png";

interface IExperienceEntry {
    key: string | number,
    start_date: string,
    end_date: string,
    duration: string,
    company_name: string,
    position: string,
    summary: string,
    tech_used: string[],
    media: string
}

const Experience = () => {

    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const [selectedExperience, setSelectedExperience] = useState<number>(0);

    const experiences = useMemo<IExperienceEntry[]>(() => {
        return [
            {
                key: "exp-0",
                start_date: "06/01/25",
                end_date: "12/1/25",
                duration: "6 months",
                company_name: "ArcadiSpa",
                position: t("experience.expArcadiPosition"),
                summary: t("experience.expArcadiSummary"),
                tech_used: [
                    "Javascript",
                    "Python",
                    "Ruby on Rails",
                    "VueJs",
                    "Amazon web services",
                    "Heroku",
                    "MySql",
                    "Git",
                    "Figma",
                    "Trello"
                ],
                media: arcadiImage
            },
            {
                key: "exp-1",
                start_date: "04/01/24",
                end_date: "10/13/24",
                duration: "6 months",
                company_name: "NirvanaAI",
                position: t("experience.exp1position"),
                summary: t("experience.exp1summary"),
                tech_used: [
                    "Javascript",
                    "Typescript",
                    "Python",
                    "MySql",
                    "ReactJs",
                    "Clickup",
                    "Amazon web services",
                    "Git"
                ],
                media: nirvanaImage
            },
            {
                key: "exp-2",
                start_date: "02/01/22",
                end_date: "10/13/24",
                duration: "2+ years",
                company_name: "MyFutureAI",
                position: t("experience.exp2position"),
                summary: t("experience.exp2summary"),
                tech_used: ["Javascript", "Python", "MySql", "ReactJs", "Node", "Clickup", "Amazon web services", "Git"],
                media: myfutureImage
            },
            {
                key: "exp-3",
                start_date: "01/01/20",
                end_date: "03/01/20",
                duration: "2 months",
                company_name: t("experience.exp3company"),
                position: t("experience.exp3position"),
                summary: t("experience.exp3summary"),
                tech_used: ["Python", "numpy", "PyQt", "Matlab"],
                media: usmImage
            },
            {
                key: "exp-4",
                start_date: "06/01/20",
                end_date: "12/01/20",
                duration: "6 months",
                company_name: t("experience.exp4company"),
                position: t("experience.exp4position"),
                summary: t("experience.exp4summary"),
                tech_used: ["Python", "Tensorflow", "Convolutional neural networks", "Javascript", "React-native", "Git"],
                media: usizePhone
            }
        ]
    }, [i18n.language])

    const dates = useMemo(() => {
        return experiences.map((experience) => {
            return {
                start_date: experience.start_date,
                end_date: experience.end_date,
                duration: experience.duration
            }
        })
    }, [])

    const moveRight = useCallback(
        () => {
            setSelectedExperience((selectedExperience) => {
                if (selectedExperience === experiences.length - 1) {
                    return 0;
                } else {
                    return selectedExperience + 1
                }
            });
        }, [])

    const moveLeft = useCallback(
        () => {
            setSelectedExperience((selectedExperience) => {
                if (selectedExperience === 0) {
                    return experiences.length - 1;
                } else {
                    return selectedExperience - 1
                }
            });
        }, [])

    useEffect(() => {

        const handleKeyboardActions = (ev: KeyboardEvent) => {

            if (ev.key === "Escape") {
                navigate("/home");
            }

            if (ev.key === "ArrowRight" || ev.key === "d") {
                moveRight();
            }

            if (ev.key === "ArrowLeft" || ev.key === "a") {
                moveLeft();
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
                <p className="page-title">{t("experience.title")}</p>
                <div className="page-title-underline" />
            </div>
            <div className="experience-content-container">
                <Timeline
                    dates={dates}
                    selectedExperience={selectedExperience}
                    setExperience={setSelectedExperience}
                    moveLeft={moveLeft}
                    moveRight={moveRight}
                />
                <ExperienceEntry {...experiences[selectedExperience]} />
            </div>
            <NavLink className="go-back" to="/home">
                {t("common.goBackAction")}
            </NavLink>
        </div>
    )
}

export default Experience;
