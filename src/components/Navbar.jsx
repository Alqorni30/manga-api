import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 p-4 border-b-2 sticky z-[100] top-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex justify-between items-center text-white gap-4 font-bold">
              <Link to='/'>
                <h5 className="font-semibold text-xl text-orange-300 flex justify-center items-center gap-1">
                  Wibu.id
                </h5>
              </Link>
              <ul className="hidden lg:flex space-x-4">
                <li className="hover:bg-gray-500 p-2 cursor-pointer rounded">
                  <NavLink to="/" className="text-white">
                    Home
                  </NavLink>
                </li>
                <li className="hover:bg-gray-500 p-2 cursor-pointer rounded">
                  <NavLink to="/" className="text-white">
                    Genre
                  </NavLink>
                </li>
                <li className="hover:bg-gray-500 p-2 cursor-pointer rounded">
                  <NavLink to="/" className="text-white">
                    Release
                  </NavLink>
                </li>
                <li className="hover:bg-gray-500 p-2 cursor-pointer rounded">
                  <NavLink to="/" className="text-white">
                    Movies
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex lg:hidden">
              <button className="text-white" onClick={toggleMenu}>
                {menuOpen ? (
                  /* Menampilkan tombol tutup (X) saat menu terbuka */
                  <AiOutlineClose className="text-2xl" />
                ) : (
                  /* Menampilkan tombol hamburger saat menu tertutup */
                  <RiMenu3Fill className="text-2xl" />
                )}
              </button>
            </div>
          </div>

          {menuOpen && (
            <ul className="flex flex-col space-y-4 mt-4 text-white ">
              <li className="hover:bg-gray-500 p-2 cursor-pointer rounded">
                <NavLink to="/" className="flex items-center gap-2">
                   Home
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
