/* eslint-disable react/prop-types */
import styles from "./NewsList.module.scss";
import Layout from "../../../layout/Layout";
import News from "./news/News";

function NewsList({ stories }) {
  return (
    <section className={styles.main}>
      <Layout>
        <ul className={styles.newsList}>
          {stories.map((story, idx) => {
            return <News key={idx} story={story} />;
          })}
        </ul>
      </Layout>
    </section>
  );
}

export default NewsList;
