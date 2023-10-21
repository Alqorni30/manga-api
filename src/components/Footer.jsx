import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 border-t-2 border-white pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <h2 className="font-bold text-xl pb-2 mb-4 border-b-2 w-1/3 border-orange-400 ">
              Tentang
            </h2>
            <h3 className="font-bold text-2xl text-orange-400 mb-2">Wibu.id</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              dolores, cupiditate eum magni reiciendis consequatur error
              exercitationem at mollitia cum.
            </p>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-4 border-b-2 w-1/3 border-orange-400 pb-2">
              API Link
            </h3>
            <Link
              to={"https://jikan.moe/"}
              target="_blank"
              className="text-orange-400"
            >
              https://jikan.moe/
            </Link>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-4 border-b-2 w-1/3 border-orange-400 pb-2">
              Tautan
            </h3>
            <ul>
              <li>
                <Link
                  to={'/'}
                  className="initial-block text-base text-slate-300 mb-3 hover:text-orange-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={'/movies'}
                  className="initial-block text-base text-slate-300 mb-3 hover:text-orange-400"
                >
                  Movies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-slate-300 w-full pt-10 border-t border-slate-700">
          © 2023 Copyright
          <a
            className="text-slate-300 dark:text-neutral-400"
            href="https://tailwind-elements.com/"
          >
            | <strong>Alqorni bayo</strong> all right reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
