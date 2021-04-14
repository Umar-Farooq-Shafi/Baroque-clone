import * as React from 'react';
import { Link } from 'react-router-dom';

import {BiSearch} from 'react-icons/bi';

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
    const[openNav, setOpenNav] = React.useState(false);

    const wrapperRef = React.useRef(null);
    useOutsideAlerter(wrapperRef, setOpenNav);
  
    return (
      <div className="flex flex-row items-center justify-between h-28">
        <a href="/" className="pl-7 logo lg:ml-10">
          <img height="65%" width="65%" src="https://cdn.shopify.com/s/files/1/2277/5269/t/49/assets/baroque_logo-01.svg?v=3325848057508312822" alt="logo" />
        </a>
  
            {/* Mobile Nav */}
  
            <a onClick={()=>setOpenNav(true)} className="sm:absolute sm:right-14 hamburger lg:invisible">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.6" d="M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z" fill="#737373"/></svg>
            </a>
  
            {
               openNav &&
                <div ref={wrapperRef} className="absolute top-0 w-full h-48 bg-white">
                  <div onClick={()=>setOpenNav(false)} className="absolute right-12 top-9"><img height="30" width="30" src={close_icon} alt="" /></div>
                  <div className="flex flex-col items-center justify-around h-full pt-5">
                    <a onClick={()=>setOpenNav(false)} href="/" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Home</a>
                    <a onClick={()=>setOpenNav(false)} href="#product" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Product</a>
                    <a onClick={()=>setOpenNav(false)} href="#faq" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Faq</a>
                    <a onClick={()=>setOpenNav(false)} href="#contact" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Contact</a>
                  </div>
                </div>
            }
  
            
            {/* Desktop Nav */}
  
            <div className="flex justify-around mr-0 lg:visible sm:invisible">
                <a href="#home" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">SALE</a>
                <a href="#product" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">COLLECTIONS</a>
                <a href="#faq" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">UNSTITCHED</a>
                <a href="#contact" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">PRET</a>
                <a href="#contact" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">DUPATTAS</a>
                <a href="#contact" className="text-md hover:bg-red-500 rounded-full py-3 px-4 font-semibold text-gray-800 transition-all hover:text-orange-500">BOTTOMS</a>
                
                <a href="#contact" className="px-3 ml-30 py-4 text-lg max-w-lg"><BiSearch /></a>
                
            </div>
  
      </div>
    );    
}; 

export default NavbarMenu;
