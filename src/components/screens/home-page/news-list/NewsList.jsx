import PropTypes from 'prop-types';
import Layout from '../../../layout/Layout';
import styles from './NewsList.module.scss';
import News from './news/News';

NewsList.propTypes = {
  stories: PropTypes.array,
  firstStoriesIndex: PropTypes.number,
  lastStoriesIndex: PropTypes.number,
};

function NewsList({ stories, firstStoriesIndex, lastStoriesIndex }) {
  return (
    <section>
      <Layout>
        {!stories.length ? (
          <div className={styles.emptyList}>
            <div>News not found!</div>
          </div>
        ) : (
          <ul className={styles.newsList}>
            {stories
              .slice(firstStoriesIndex, lastStoriesIndex)
              .sort((a, b) => b.time - a.time)
              .map((story, idx) => {
                return <News key={idx} story={story} />;
              })}
          </ul>
        )}
      </Layout>
    </section>
  );
}

export default NewsList;
