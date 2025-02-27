import { NavLink, Outlet, useLocation, useNavigate } from 'react-router'
import './App.css'
import "../i18n"
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbar from './components/navbar';

type Languages = "en" | "es";

const languages: Languages[] = ["en", "es"];

function App() {

  // const { t, i18n } = useTranslation();

  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
    }
  }, [])

  // Remember to add this on the root of the app when the app structure is properly set
  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [])

  const changeTheme = () => {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <>
      <Navbar />
      {/* <div>
        <h3>{t("home.title")}</h3>
      </div>
      <div>
        <p><b>Theme changer</b></p>
        <button onClick={changeTheme}>
          Change theme
        </button>
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
      </div> */}
      <Outlet />
    </>
  )
}

export default App
