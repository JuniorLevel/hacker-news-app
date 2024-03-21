import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import convertDate from '../../../../utils/convertDate';
import Header from '../../../header/Header';
import Layout from '../../../layout/Layout';
import styles from '../../news-page/news-detail/NewsDetail.module.scss';

function NewsDetail() {
  const { id } = useParams();
  const stories = useSelector(state => state.stories.stories);
  const story = stories.find(item => item.id === Number(id));

  return (
    <>
      <Header />
      <Layout>
        <div className={styles.news}>
          {!story && <div>Story not found</div>}
          {story && (
            <>
              <div className={styles.news__top}>
                <h2 className={styles.news__title}>{story.title}</h2>
                <a
                  className={styles.news__link}
                  href={story.url}
                  target="blank"
                >
                  {story.url}
                </a>
              </div>
              <div className={styles.news__info}>
                <span className={styles.news__infoRate}>
                  {story.score > 1
                    ? `${story.score} points`
                    : `${story.score} point`}
                </span>
                <span className={styles.news__infoAuthor}>
                  by <span className={styles.news__infoSpan}>{story.by}</span>
                </span>
                <span className={styles.news__date}>
                  {convertDate(story.time)}
                </span>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}

export default NewsDetail;
