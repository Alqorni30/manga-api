import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";


const Populer = () => {
  const [manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataManga = async () => {
    const res = await fetch("https://api.jikan.moe/v4/top/manga");
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
        <div className="flex justify-center items-center gap-2 mb-2">
            <Link to={"/"} >
            <button className="hover:text-orange-400 flex justify-center items-center gap-2 text-white text-lg font-semibold"><AiOutlineHome/> back home | </button>
            </Link>
            <h3 className="text-orange-400 text-lg font-bold">Populer</h3>
        </div>
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="custom-loader"></div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
            {manga.map((m, index) => {
              return (
                <div key={index} className="p-4">
                  <Link to={`${m.mal_id}`} >
                    <img
                      src={m.images.webp.image_url}
                      className="rounded-lg lg:h-[250px] lg:w-[180px] h-[200px] w-[150px] "
                      alt="manga"
                    />
                    <h3 className="font-semibold p-2 text-white">{m.title}</h3>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Populer;
