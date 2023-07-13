import React, { useState } from "react";
import styles from "./Header.module.scss";
import Layout from "../layout/Layout";
import axiosData from "../services/getStories";
import refreshImg from "../../../public/images/refresh.svg";
import lightThemeImg from "../../../public/images/light-mode.svg";
import darkThemeImg from "../../../public/images/dark-mode.svg";
import useTheme from "../../hooks/use-theme";
import { useDispatch } from "react-redux";

export default function Header() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();

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
              <button onClick={() => dispatch(axiosData())}>
                <img src={refreshImg} alt="refresh-svg" />
              </button>
              <button
                onClick={() => {
                  setIsLightTheme(!isLightTheme);
                  theme !== "light" ? setTheme("light") : setTheme("dark");
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
