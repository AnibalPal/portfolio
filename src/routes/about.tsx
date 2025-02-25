import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const About = () => {

    const { t } = useTranslation();

    return (
        <div>
            <p>{t("about.title")}</p>
            <NavLink to="/">
                {t("common.goBackAction")}
            </NavLink>
        </div>
    )
}

export default About;
