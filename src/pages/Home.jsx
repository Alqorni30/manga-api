import React from "react";
import { Link } from "react-router-dom";
import Topmanga from "../components/Topmanga";

const Home = () => {
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between items-center px-4">
          <h1 className="text-white text-lg font-semibold">Populer</h1>
          <Link to="/populer" className="text-white underline">Lihat Semua</Link>
        </div>
        <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
          <Topmanga />
        </div>
      </div>
    </>
  );
};

export default Home;
