import React from "react";
import styles from "./News.module.scss";
export default function News() {
  return (
    <>
      <li className={styles.news}>
        <div className={styles.news__top}>
          <span className={styles.news__number}>1.</span>
          <h2 className={styles.news__title}>
            <a className={styles.news__titleLink} href="#">
              Anime.js – A lightweight JavaScript animation library
            </a>
          </h2>
        </div>
        <div className={styles.news__block}>
          <span className={styles.news__blockRate}>259 points</span>
          <span className={styles.news__blockAuthor}>
            by <a href="#">doodlesdev</a>
          </span>
          <span className={styles.news__blockDate}>5 hours ago</span>
        </div>
      </li>
      <hr />
    </>
  );
}
