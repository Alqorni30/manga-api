import React from "react";
import Topmanga from "../components/Topmanga";
import Header from "../components/Header";
import Rekomendasi from "../components/Rekomendasi";

const Home = () => {
  return (
    <>
      <section className="px-4">
        <Header linkHref="/populer" linkTitle="Lihat Semua" title="Populer" />
        <Topmanga />
        <Rekomendasi/>
      </section>
    </>
  );
};

export default Home;
