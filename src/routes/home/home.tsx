import { useContext, useState } from "react";

import RouteOption from "./route-option";
import { Selection, SelectOptions, StateOptions } from "./types";

import "./home.css";
import { useTranslation } from "react-i18next";
import { DeviceInfoContext } from "../../contexts/deviceInfo";

const Home = () => {

    const deviceType = useContext(DeviceInfoContext);

    const { t } = useTranslation();

    const [selected, setSelected] = useState<Selection>({
        about: {
            hovering: false,
            focused: false
        },
        experience: {
            hovering: false,
            focused: false
        },
        proyects: {
            hovering: false,
            focused: false
        },
    });

    const handleChange = (key: SelectOptions, state: StateOptions, value: boolean): void => {
        console.log(deviceType)
        let newSelected = { ...selected };
        newSelected[key][state] = value;
        setSelected(newSelected);
    }

    return (
        <div className="home-main-container fade-in">
            {
                deviceType === "desktop" &&
                <div className="home-about-me-container">
                    <p className="home-about-me-title">
                        {t("home.about")}
                    </p>
                    <p className="home-about-me-content">
                        {t("home.aboutDescP1")}
                        <br />
                        {t("home.aboutDescP2")}
                    </p>
                </div>
            }
            <div className="home-container">
                <div className="home-options-container">
                    {/* <RouteOption
                    name={t("about.name")}
                    route="about"
                    handleChange={handleChange}
                    selected={selected}
                /> */}
                    <RouteOption
                        name={t("experience.name")}
                        route="experience"
                        handleChange={handleChange}
                        selected={selected}
                    />
                    <RouteOption
                        name={t("proyects.name")}
                        route="proyects"
                        handleChange={handleChange}
                        selected={selected}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
