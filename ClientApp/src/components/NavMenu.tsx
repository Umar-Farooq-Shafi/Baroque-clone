import * as React from 'react';
import { Link } from 'react-router-dom';


import { BiSearch } from 'react-icons/bi';

function useOutsideAlerter(ref, setOpenNav) {
  React.useEffect(() => {

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenNav(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const NavbarMenu = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const wrapperRef = React.useRef(null);
  useOutsideAlerter(wrapperRef, setOpenNav);

  return (
    <>
      <div className="flex flex-col justify-between bg-gray-200 px-24 py-2.5 md:flex-row text-center  ">
        <p className="font-bold text-xs">ORDERS MIGHT BE DELAYED DUE TO COVID-19</p>
        <p className="font-bold text-xs">LAST DATE FOR STITCHED EID ORDERS IS 5th APRIL, 2021</p>
        <p className="flex font-bold text-xs"><span className="px-2"> HELPLINE: </span>
          <img className="w-4 h-4" src="https://image.flaticon.com/icons/png/128/483/483947.png" /><span className="px-2 text-gray-500 hover:text-black  ">+92 348 1112548</span>
          <img className="w-5 h-5 " src="https://image.flaticon.com/icons/png/128/733/733585.png" /><span className="px-2 text-gray-500 hover:text-black">+92 312 7001111 </span></p>
      </div>


      <div className="flex flex-row items-center lg:visible sm:invisible bg-gray-50 shadow-md sticky top-0  h-28">
        <Link to="/" className="pl-7 logo lg:ml-10">
          <img className="w-2/5 h-auto" src="https://cdn.shopify.com/s/files/1/2277/5269/t/49/assets/baroque_logo-01.svg?v=3325848057508312822" alt="logo" />
        </Link>

        {/* Mobile Nav */}

        <Link to="/" onClick={() => setOpenNav(true)} className="sm:absolute sm:right-14 hamburger lg:invisible">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.6" d="M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z" fill="#737373" /></svg>
        </Link>

        {
          openNav &&
          <div ref={wrapperRef} className="absolute top-0 w-full h-48 bg-white">
            <div onClick={() => setOpenNav(false)} className="absolute right-12 top-9"><img height="30" width="30" src={close_icon} alt="" /></div>
            <div className="flex flex-col items-center justify-around h-full ">
              <Link to="/sale" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">SALE</Link>
              <Link to="/collections" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">COLLECTIONS</Link>
              <Link to="/unstitched" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">UNSTITCHED</Link>
              <Link to="/pret" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">PRET</Link>
              <Link to="/dupattas" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">DUPATTAS</Link>
              <Link to="/bottoms" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">BOTTOMS</Link>

              <Link to="#contact" className="px-3 ml-30 py-4 text-lg max-w-lg"><BiSearch /></Link>

            </div>
          </div>
        }


        {/* Desktop Nav */}

          <Link to="/sale" className="text-sm  hover:bg-red-500 rounded-full py-3 px-4 font-normal text-gray-800 transition-all hover:text-white">SALE</Link>
          <Link to="/collections" className="text-sm hover:bg-red-500 rounded-full py-3 px-4 font-normal text-gray-800 transition-all hover:text-white">COLLECTIONS</Link>
          <Link to="/unstitched" className="text-sm hover:bg-red-500 rounded-full py-3 px-4 font-normal text-gray-800 transition-all hover:text-white">UNSTITCHED</Link>
          <Link to="/pret" className="text-sm hover:bg-red-500 rounded-full py-3 px-4 font-normal text-gray-800 transition-all hover:text-white">PRET</Link>
          <Link to="/dupattas" className="text-sm hover:bg-red-500 rounded-full py-3 px-4 font-normal text-gray-800 transition-all hover:text-white">DUPATTAS</Link>
          <Link to="/bottoms" className="text-sm hover:bg-red-500 rounded-full py-3 px-4 font-normal text-gray-800 transition-all hover:text-white">BOTTOMS</Link>

          <div className="pl-5 py-3.5 "><BiSearch /></div>

      </div>
    </>
  );
};

export default NavbarMenu;
