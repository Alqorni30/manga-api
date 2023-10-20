import React from "react";
import Topmanga from "../components/Topmanga";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <section className="px-4">
        <Header linkHref="/populer" linkTitle="Lihat Semua" title="Populer" />
        <Topmanga />
      </section>
    </>
  );
};

export default Home;
