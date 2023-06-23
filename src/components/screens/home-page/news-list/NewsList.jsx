import React from "react";
import styles from "./NewsList.module.scss";
import Layout from "../../../layout/Layout";
import News from "./news/News";
export default function NewsList() {
  return (
    <section className={styles.main}>
      <Layout>
        <ul className={styles.newsList}>
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
        </ul>
      </Layout>
    </section>
  );
}
