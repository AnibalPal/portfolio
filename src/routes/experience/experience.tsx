import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const Experience = () => {

    const { t } = useTranslation();

    return (
        <div>
            <p>{t("experience.title")}</p>
            <NavLink to="/home">
                {t("common.goBackAction")}
            </NavLink>
        </div>
    )
}

export default Experience;
