import styles from "./Header.module.scss";
import Layout from "../layout/Layout";
import axiosData from "../services/getStories";
import refreshImg from "/public/images/refresh.svg";
import lightThemeImg from "/public/images/light-mode.svg";
import darkThemeImg from "/public/images/dark-mode.svg";
import useTheme from "../../hooks/use-theme";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/themeReducer";
import { useLocation } from "react-router-dom";
import arrowBackDarkImg from "/public/images/arrowBackDark.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const { defaultTheme, setDefaultTheme } = useTheme();
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Layout>
          <span className={styles.headerTop__text}>
            No one of the system are unsafe
          </span>
        </Layout>
      </div>
      <div className={styles.headerMain}>
        <Layout>
          <div className={styles.headerPanel}>
            <h1 className={styles.headerPanel__title}>The Hacker News</h1>
            <div className={styles.headerPanel__buttons}>
              {location.pathname !== "/" ? (
                <Link to={"/"}>
                  <button>
                    <img src={arrowBackDarkImg} alt="arrow-img" />
                  </button>
                </Link>
              ) : (
                <button onClick={() => dispatch(axiosData())}>
                  <img src={refreshImg} alt="refresh-svg" />
                </button>
              )}

              <button
                onClick={() => {
                  dispatch(setTheme(!isLightTheme));
                  defaultTheme !== "light"
                    ? setDefaultTheme("light")
                    : setDefaultTheme("dark");
                }}
              >
                <img
                  src={!isLightTheme ? darkThemeImg : lightThemeImg}
                  alt={!isLightTheme ? "dark-mode.svg" : "light-mode.svg"}
                />
              </button>
            </div>
          </div>
        </Layout>
      </div>
    </header>
  );
}
