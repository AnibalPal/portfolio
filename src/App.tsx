import { NavLink } from 'react-router'
import './App.css'
import "../i18n"
import { useTranslation } from 'react-i18next';

type Languages = "en" | "es";

const languages: Languages[] = ["en", "es"];

function App() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <h3>{t("home.title")}</h3>
      </div>
      <div>
        <p><b>Language changer</b></p>
      </div>
      <div className='stack'>
        {
          languages.map((lang) => {
            return (
              <button onClick={() => { i18n.changeLanguage(lang) }}>
                {lang}
              </button>
            )
          })
        }
      </div>
      <div>
        <p><b>Router testing</b></p>
      </div>
      <div className='stack'>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/proyects">
          Proyects
        </NavLink>
      </div>
    </>
  )
}

export default App
