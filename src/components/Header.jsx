import React from "react";
import { Link } from "react-router-dom";


const Header = ({title, linkHref, linkTitle  }) => {
  return (
    <>
      <div className="flex justify-between items-center pb-3 px-4">
        <h1 className="text-white text-2xl font-bold border-b-2 pb-2 border-orange-300">{title}</h1>
        <Link to={linkHref} className="text-white underline hover:text-orange-300 text-xl">
          {linkTitle}
        </Link>
      </div>
    </>
  );
};

export default Header;
