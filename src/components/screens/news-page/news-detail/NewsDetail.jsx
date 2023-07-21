import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../news-page/news-detail/NewsDetail.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosData from "../../../services/getStories";
import Header from "../../../header/Header";
import Layout from "../../../layout/Layout";

const NewsDetail = () => {
  const stories = useSelector((state) => state.stories.stories);

  function convertDate(date) {
    const publishedDate = new Date(date * 1000).toUTCString();
    // const hours = publishedDate.getHours();
    // const minutes = publishedDate.getMinutes();
    // return `${publishedDate} ${hours}:${minutes}`;
    return publishedDate;
  }
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    dispatch(axiosData());
  }, [dispatch, id]);

  const story = stories.find((item) => item.id === Number(id));

  return (
    <>
      <Header />
      <Layout>
        <div className={styles.news}>
          <div className={styles.news__top}>
            <h2 className={styles.news__title}>{story.title}</h2>
            <a className={styles.news__link} href={story.url} target="blank">
              {story.url}
            </a>
          </div>
          <div className={styles.news__info}>
            <span className={styles.news__infoRate}>
              {story.score === 1
                ? `${story.score} points`
                : `${story.score} point`}
            </span>
            <span className={styles.news__infoAuthor}>
              by <span className={styles.news__infoSpan}>{story.by}</span>
            </span>
            <span>{convertDate(story.time)}</span>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NewsDetail;
