import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import "./../App.css"
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="sticky top-0 flex p-2 bg-red-400 ">
      <div className="flex-grow text-center ml-12 text-3xl font1">Sourav Traders</div>

      <div
        onClick={handleNav}
        className="ml-auto mr-10 text-3xl flex items-center"
      >
        {nav ? <GrClose className="z-10"/> : <RxHamburgerMenu />}
      </div>
      <ul
        className={
          nav
            ? "fixed right-0 top-0 sm:w-[30%] w-[80%] h-full border-r border-r-gray-900 bg-[#f0f0f0] ease-in-out duration-200"
            : "ease-in-out duration-500 fixed right-[-100%]"
        }
      >
        <li className="p-4 "></li>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Products</li>
        <li className="p-4 border-b border-gray-600">Locate Us</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
