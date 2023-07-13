/* eslint-disable react/prop-types */
import styles from "./NewsList.module.scss";
import Layout from "../../../layout/Layout";
import News from "./news/News";
export default function NewsList({ stories }) {
  return (
    <section className={styles.main}>
      <Layout>
        <ul className={styles.newsList}>
          {stories.map((story) => {
            return <News key={story.id} story={story} />;
          })}
        </ul>
      </Layout>
    </section>
  );
}
