import { useTranslation } from "react-i18next";

import DownArrow from "./icons/down-arrow";

import "./language-select.css";

const LanguageSelect = () => {

    const { i18n } = useTranslation();

    type Languages = "en" | "es";
    const languages: Languages[] = ["en", "es"];

    return (
        <div>
            <select
                className="language-select-container"
                defaultValue={i18n.language}
                onChange={(e) => { i18n.changeLanguage(e.target.value) }}
            >
                {
                    languages.map((lang) => {
                        return (
                            <option value={lang}>
                                {lang.toUpperCase()}
                            </option>
                        )
                    })
                }
            </select>
            <div className="anchor">
                <div className="language-select-position-div">
                    <DownArrow />
                </div>
            </div>
        </div>
    )
}

export default LanguageSelect;
