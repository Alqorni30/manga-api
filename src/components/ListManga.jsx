import React from "react";

const ListManga = ({apiManga}) => {
  return (
    <>
      <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
        {apiManga.data?.map((m, index) => (
          <div key={index} className="p-4">
            <Link to={`/manga/${m.mal_id}`} className="transition-all">
              <img
                src={m.images.webp.image_url}
                className="rounded-lg lg:h-[250px] lg:w-[180px] h-[200px] w-[150px]"
                alt={m.title}
              />
              <h3 className="font-semibold p-2 text-white hover:text-orange-400">
                {m.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListManga;
