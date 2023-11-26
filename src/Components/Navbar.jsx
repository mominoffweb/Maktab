import React from "react";
import Logo from "../Images/Artboard-Logo.svg";
import Login from "./Login";
import Accanut from "./Accaunt";

function Navbar() {
  return (
    <div className="  mx-auto max-w-[120rem]    h-[90px]  bg-[#002B6C]">
      <div className=" flex justify-between items-center   ">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex justify-between items-center gap-10">
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            class="text-white  font-medium rounded-lg  font-[IBM Plex Sans] text-center inline-flex items-center text-[16px] "
            type="button"
          >
            Dropdown
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownHover"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center  gap-10">
            <a
              className="text-white text-[16px] font-medium font-[IBM Plex Sans]"
              href="#"
            >
              Link
            </a>
            <a
              className="text-white text-[16px] font-medium font-[IBM Plex Sans]"
              href="#"
            >
              Link
            </a>
            <a
              className="text-white text-[16px] font-medium font-[IBM Plex Sans]"
              href="#"
            >
              Link
            </a>
          </div>
        </div>
        <div className="flex gap-5 p-6  ">
          <div className="flex justify-center items-center text-white ">
            <select className="bg-[#002B6C] text-white border-hidden peer-active:hidden">
              <option className="text-white text-[16px] font-medium font-[IBM Plex Sans]">
                EN
              </option>
              <option className="text-white text-[16px] font-medium font-[IBM Plex Sans]">
                UZB
              </option>
            </select>
          </div>
          <div className="flex  gap-10">
            <button>
              <Login />
            </button>
            <div className="text-[#002B6C] text-[16px] flex items-center justify-center border-collapse  font-medium font-[ IBM Plex Sans]  w-[100px] h-[50px]  bg-white ">
              <a href="#">
                <Accanut />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
