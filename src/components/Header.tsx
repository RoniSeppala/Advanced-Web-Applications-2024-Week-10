import React from "react";
import { useTranslation } from "react-i18next";

interface headerProps {
    name?: string;
}

const Header:React.FC<headerProps> = ({name}) => {
    
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    return (
        <header className="header">
            <h1>{name ? name : "Default Title"}</h1>
            <nav className="nav">
                <ul className="nav_list">
                    <li><a href="/">{t("Home")}</a></li>
                    <li><a href="/about">{t("About")}</a></li>
                </ul>
                <button onClick={() => changeLanguage("fi")} id="fi">FI</button>
                <button onClick={() => changeLanguage("en")} id="en">EN</button>
            </nav>
        </header>
    );
};

export default Header;