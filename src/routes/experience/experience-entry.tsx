import { useTranslation } from "react-i18next";

import "./experience-entry.css";

import noMediaImg from "../../assets/images/not-found.jpg";

interface ExperienceEntryProps {
    company_name: string,
    position: string,
    summary: string,
    tech_used: string[],
    media: string
}

const ExperienceEntry = ({ company_name, position, summary, tech_used, media }: ExperienceEntryProps) => {

    const { t } = useTranslation();

    return (
        <div className="experience-entry-container">
            <div className="experience-entry-desc-container">
                <div>
                    <p className="experience-entry-company-name">
                        {company_name}
                    </p>
                    <p className="experience-entry-position">
                        {position}
                    </p>
                </div>
                <p className="experience-entry-summary">
                    {summary}
                </p>
                <div>
                    <p className="experience-entry-tech-used-title">{t("experience.techUsedTitle")}</p>
                    <ul className="experience-entry-tech-used-list">
                        {
                            tech_used.map((tech: string, idx: number) => {
                                return (
                                    <li className="experience-entry-tech-used" key={"tech-used-" + idx}>{tech}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="experience-entry-media">
                {media ?
                    <img style={{ width: "inherit" }} src={media} />
                    :
                    <img style={{ width: "inherit" }} src={noMediaImg} />
                }
            </div>
        </div>
    )
}

export default ExperienceEntry;
