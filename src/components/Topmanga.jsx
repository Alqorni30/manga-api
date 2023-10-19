import React, { useState, useEffect } from "react";

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

  if (loading) {
    // Tampilkan indikator loading jika loading adalah true
    return (
      <div className="flex justify-center h-screen">
        <div class="custom-loader"></div>
      </div>
    )
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center min-h-screen">
          <div class="custom-loader"></div>
        </div>
      ) :
      (manga.map((m) => {
        return (
          <div key={m.mal_id} className="p-4">
            <img src={m.images.webp.image_url} className="rounded-lg lg:h-[300px] h-[250px] w-auto" alt="manga" />
            <h3 className="font-semibold p-2 text-white">{m.title}</h3>
          </div>
        );
      }))}
    </>
  );
};

export default Topmanga;
