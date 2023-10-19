import React from "react";
import { Link } from "react-router-dom";

const Mangalist = ({ api }) => {
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
      {api.data.map((m, index) => (
        <div key={index} className="">
          <Link to={`${m.mal_id}`} className="cursor-pointer">
            <img
              src={m.images.webp.image_url}
              className="rounded-lg h-[280px]"
              alt={m.title}
            />
            <h3 className="font-semibold p-2 text-white">{m.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Mangalist;
