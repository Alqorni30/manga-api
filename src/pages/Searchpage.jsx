import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";


const Searchpage = () => {
  const { keyword } = useParams();
  const [manga, setManga] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword) {
      fetchData(keyword);
    }
  }, [keyword]);

  const fetchData = async (keyword) => {
    setLoading(true);
    const res = await fetch(`https://api.jikan.moe/v4/manga?q=${keyword}`);
    const mangaList = await res.json();
    setManga(mangaList.data);
    setSearched(true);
    setLoading(false);
  };

  return (
    <div className="p-4 mb-10">
       <div className="flex justify-center items-center gap-2 mb-2">
            <Link to={"/"} >
            <button className="hover:text-orange-400 flex justify-center items-center gap-2 text-white text-lg font-semibold"><AiOutlineHome/> back home</button>
            </Link>
        </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="custom-loader"></div>
        </div>
      ) : searched && manga.length === 0 ? (
        <div className="my-4">
          <h2 className="text-white font-semibold text-lg text-center">
            Tidak ada hasil ditemukan untuk: {keyword}
          </h2>
        </div>
      ) : manga.length > 0 ? (
        <div className="mx-auto">
          <div className="my-4 px-4">
            <h2 className="text-white font-semibold text-lg">
              Hasil Pencarian: {keyword}
            </h2>
          </div>
          <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
            {manga.map((m, index) => (
              <div key={index} className="p-4">
                <Link to={`${m.mal_id}`} className="transition-all">
                  <img
                    src={m.images.webp.image_url}
                    className="rounded-lg lg:h-[250px] lg:w-[180px] h-[200px] w-[150px]"
                    alt={m.title}
                  />
                  <h3 className="font-semibold p-2 text-white hover:text-orange-400">{m.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Searchpage;
