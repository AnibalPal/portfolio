import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const Proyects = () => {
    
    const {t} = useTranslation();
    
    return (
        <div>
            <p>{t("proyects.title")}</p>
            <NavLink to="/">
                {t("common.goBackAction")}
            </NavLink>
        </div>
    )
}

export default Proyects;
