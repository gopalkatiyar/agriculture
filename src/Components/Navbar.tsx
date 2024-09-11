import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex flex-col h-[100px]">
      {/* Top Section */}
      <div className="flex flex-col justify-center bg-green-400 h-1/3">
        <div className="flex flex-wrap justify-between mx-20">
          {/* Address and Email Section */}
          <div className="flex items-center space-x-4 w-full md:w-1/2 justify-center md:justify-start">
            <span className="">Lucknow, Engineering Chauraha</span>
            <a
              href="mailto:dummy123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm">
              dummy123@gmail.com
            </a>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center space-x-4 w-full md:w-1/2 justify-center md:justify-end">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="text-3xl">
        <div className="p-3 w-full max-w-[1280px] mx-auto px-4 md:px-[10%]">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
              <img
                className="block mx-auto h-10 w-auto"
                src={logo}
                alt="Logo"
              />
            </div>

            <div className="w-full md:w-3/4 flex justify-end gap-10 items-center">
              {/* Menu Items */}
              <div className="hidden md:block">
                <ul className="flex space-x-4 text-[16px] md:text-[18px]">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Service</li>
                  <li className="cursor-pointer">Projects</li>
                  <li className="cursor-pointer">News</li>
                  <li className="cursor-pointer">Shop</li>
                  <li className="cursor-pointer">Contact</li>
                </ul>
              </div>

              <div className="flex items-center space-x-4">
                <IoIosSearch className="h-6 w-6" />
                <BsCart className="h-6 w-6" />
              </div>
			</div>
					  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
