import React from "react";
import Header from "../../header/Header";
import NewsList from "./news-list/NewsList";

export default function Home() {
  return (
    <>
      <Header />
      <NewsList />
    </>
  );
}
