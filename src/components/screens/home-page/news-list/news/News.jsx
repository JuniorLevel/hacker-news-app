/* eslint-disable react/prop-types */
import styles from "./News.module.scss";
import { Link } from "react-router-dom";
export default function News({ story }) {
  function convertDate(date) {
    return new Date(date * 1000).toLocaleDateString();
  }

  return (
    <>
      <li className={styles.news}>
        <div className={styles.news__top}>
          <Link to={`/news-detail/${story.id}`}>
            <h2 className={styles.news__title}>{story.title}</h2>
          </Link>
        </div>
        <div className={styles.news__info}>
          <span className={styles.news__infoRate}>
            {story.score} {story.score > 1 ? "points" : "point"}
          </span>
          <span className={styles.news__infoAuthor}>
            by <span className={styles.news__infoSpan}>{story.by}</span>
          </span>
          <span>{convertDate(story.time)}</span>
        </div>
      </li>
      <hr></hr>
    </>
  );
}
