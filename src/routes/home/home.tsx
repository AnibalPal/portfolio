import { useState } from "react";

import RouteOption from "./route-option";
import { Selection, SelectOptions, StateOptions } from "./types";

import "./home.css";
import { useTranslation } from "react-i18next";

const Home = () => {

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
        let newSelected = { ...selected };
        newSelected[key][state] = value;
        setSelected(newSelected);
    }

    return (
        <div className="home-container">
            <div className="home-options-container">
                <RouteOption
                    name={t("about.name")}
                    route="about"
                    handleChange={handleChange}
                    selected={selected}
                />
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
    )
}

export default Home;
