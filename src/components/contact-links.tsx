import "./contact-links.css"
import { useTranslation } from "react-i18next";

import { PiReadCvLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa"
import ResumeEsp from "../assets/cvs/CV_spanish.pdf"
import ResumeEng from "../assets/cvs/CV_english.pdf"

const ContactLinks = () => {

    const { i18n } = useTranslation();

    return (
        <div className="contact-links-container">
            <a className="contact-link-icon" href={i18n.language == "en" ? ResumeEng : ResumeEsp} target="_blank">
                <PiReadCvLogo/>
            </a>
            <a className="contact-link-icon" href={"https://github.com/AnibalPal"} target="_blank">
                <FaGithub/>
            </a>
        </div>
    )
}

export default ContactLinks;
