import React, { useState, useEffect } from "react";
import { getApiManga } from "../service/api";
import { Link, useParams } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const MangaDetail = () => {
  const { id } = useParams();
  const [manga, setManga] = useState(null); // Mengganti nilai awal dengan null
  const [loading, setLoading] = useState(true); // Mengganti nilai awal dengan true

  const fetchData = async (id) => {
    try {
      const mangaResponse = await getApiManga(`manga/${id}`);
      setManga(mangaResponse.data);
      setLoading(false);
    } catch (error) {
      console.error("Kesalahan saat mengambil data manga:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return (
    <div className="my-10">
      <div className="flex justify-center items-center gap-2 mb-2">
        <Link to={"/"}>
          <button className="hover:text-orange-400 flex justify-center items-center gap-2 text-white text-lg font-semibold">
            <AiOutlineHome /> back home
          </button>
        </Link>
      </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="custom-loader"></div>
        </div>
      ) : (
        <div className="pt-4 px-4">
          {/* Periksa apakah manga tidak null sebelum mengakses propertinya */}
          {manga && (
            <div>
              <div className="flex gap-6 justify-center flex-wrap">
                <img
                  className="rounded-lg"
                  src={manga.images.webp.image_url}
                  alt={manga.images.jpg.large_image_url}
                />
                <div className="flex flex-col font-semibold">
                  <p className="text-xl text-white ">
                    <span className="text-orange-400">Judul</span> :{" "}
                    {manga.title}
                  </p>
                  <p className="text-xl text-white ">
                    <span className="text-orange-400">Tipe</span> : {manga.type}
                  </p>
                  <p className="text-xl text-white ">
                    <span className="text-orange-400">Chapter</span> :{" "}
                    {manga.chapters ? manga.chapters : "-"}
                  </p>
                  <p className="text-xl text-white ">
                    <span className="text-orange-400">Volume</span> :{" "}
                    {manga.volumes ? manga.volumes : "-"}
                  </p>
                  <p className="text-xl text-white ">
                    <span className="text-orange-400">Skor</span> :{" "}
                    {manga.score}
                  </p>
                  <p className="text-xl text-white ">
                    <span className="text-orange-400">Rank</span> : {manga.rank}
                  </p>
                  <p className="text-xl text-white ">
                    <span className="text-orange-400">Popularity</span> :{" "}
                    {manga.popularity}
                  </p>
                </div>
              </div>
              <hr className="border my-4" />
              <div className="flex gap-4 justify-center flex-wrap">
                <h3 className="text-2xl text-orange-400 font-semibold">
                  Sinopsis :
                </h3>
                <p className="text-xl text-white">{manga.synopsis}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MangaDetail;
