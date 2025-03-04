import { useEffect } from "react";
import { NavLink } from "react-router";

import { useTranslation } from "react-i18next";

import SunIcon from "./icons/sun-icon";
import LanguageSelect from "./language-select";

import "./navbar.css";

const Navbar = () => {

    const { t } = useTranslation();

    const changeTheme = () => {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    }

    useEffect(() => {
        if (localStorage.getItem("theme") === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, [])

    return (
        <div className="navbar-base-container">
            <p className="navbar-author">Anibal Palomo</p>
            <div className="navbar-links-container">
                <NavLink to={"/home"} className={"navbar-link"}>{t("home.name")}</NavLink>
                <NavLink to={"/about"} className={"navbar-link"}>{t("about.name")}</NavLink>
                <NavLink to={"/experience"} className={"navbar-link"}>{t("experience.name")}</NavLink>
                <NavLink to={"/proyects"} className={"navbar-link"}>{t("proyects.name")}</NavLink>
            </div>
            <div className="navbar-settings-container">
                <div className="navbar-lang-switcher">
                    <LanguageSelect />
                </div>
                <div className="navbar-theme-switcher" title="Change theme" onClick={changeTheme}>
                    <SunIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
