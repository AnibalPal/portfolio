import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";

import { useTranslation } from "react-i18next";

import { DeviceInfoContext } from "../contexts/deviceInfo";

import SunIcon from "./icons/sun-icon";
import LanguageSelect from "./language-select";

import "./navbar.css";
import HamburgerIcon from "./icons/hamburger-icon";

const Navbar = () => {

    const deviceType = useContext(DeviceInfoContext);

    const { t } = useTranslation();

    const [optionsOpen, setOptionsOpen] = useState(false);

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

        const handleClickOutside = () => {
            setOptionsOpen(false);
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        }

    }, [])

    return (
        <div className="navbar-base-container">
            {
                deviceType === "mobile" ?
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                            <p className="navbar-author">Anibal Palomo</p>
                            <p style={{ fontSize: "24px", marginLeft: "16px" }}>Software developer</p>
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); setOptionsOpen(true) }}>
                            <HamburgerIcon />
                            {
                                optionsOpen &&
                                <div className="anchor">
                                    <div style={{ position: "relative", top: "10px", right: "176px" }}>
                                        <div className="navbar-settings-container-mobile">
                                            <div className="navbar-lang-switcher">
                                                <LanguageSelect />
                                            </div>
                                            <div className="navbar-theme-switcher" title="Change theme" onClick={changeTheme}>
                                                <SunIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <>
                        <p className="navbar-author">Anibal Palomo</p>
                        <div className="navbar-links-container">
                            <NavLink to={"/home"} className={"navbar-link"}>{t("home.name")}</NavLink>
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
                    </>
            }
        </div>
    )
}

export default Navbar;
