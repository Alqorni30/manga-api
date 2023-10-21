import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Topmanga = () => {
  const [manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataManga = async () => {
    const res = await fetch("https://api.jikan.moe/v4/top/manga?limit=10");
    const mangaList = await res.json();

    setManga(mangaList.data);
    setLoading(false);
  };

  useEffect(() => {
    getDataManga();
  }, []);

  return (
    <>
      <div className="mb-10">
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="custom-loader"></div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
            {manga.map((m, index) => {
              return (
                  <Link to={`${m.mal_id}`} key={index} className="p-4 text-white transition-all" >
                    <img
                      src={m.images.webp.image_url}
                      className="rounded-lg lg:h-[250px] lg:w-[180px] h-[200px] w-[150px] "
                      alt="manga"
                    />
                    <h3 className="font-semibold text-xl p-2 text-white hover:text-orange-400">{m.title}</h3>
                  </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Topmanga;
