"use client";
import Image from "next/image";
import logo from "../assets/hmtLogo.png";
import Link from "next/link";
function NavBar(props) {
  return (
    <div className="navbar pb-20 bg-white">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />

      <div className="hidden lg:grid grid-cols-3 justify-evenly  px-14 py-2 w-screen h-20 items-center border-b-[1px] fixed top-0 bg-white z-40">
        <Link href="/">
          <Image src={logo} className="h-20 w-20" alt="HMT Architects Logo" />
        </Link>
        <div className="hidden lg:flex items-center justify-evenly border rounded-full shadow-md h-12 w-96">
          <Link href="/">
            <button className="border-r-2 text-sm font-semibold text-gray-950 px-4 hover:text-yellow-600">
              Home
            </button>
          </Link>
          <Link href="/about">
            <button className="border-r-2 text-sm font-semibold text-gray-950 px-4  hover:text-yellow-600">
              About Us
            </button>
          </Link>
          <Link href="/projects">
            <button className="text-sm font-semibold text-black px-4  hover:text-yellow-600">
              See Projects
            </button>
            <i class="fa-regular fa-eye  bg-red-600 text-white rounded-full p-2 "></i>
          </Link>
        </div>
        <div className="hidden xl:flex justify-end items-center gap-6">
          <button className="text-sm font-semibold text-gray-900">
            Best Architects in Chennai
          </button>
          <div className=" flex items-center h-14 w -10">
            <i className="fa-solid fa-award  bg-yellow-400 text-gray-950 rounded-full p-2"></i>
          </div>
          <Link href="contactus">
            <div className="flex hover:bg-yellow-500 justify-evenly items-center gap-2 rounded-full shadow-md border h-10 w-32">
              <button className="text-sm font-semibold text-gray-900">
                Contact Us
              </button>
              <i class="fa-solid fa-phone-volume text-gray-950"></i>
            </div>
          </Link>
        </div>
      </div>

      {/* Responsive Section */}
      <div className=" grid grid-cols-3 justify-between px-10 py-2 w-screen h-20 items-center border-b-[1px] fixed top-0 bg-white lg:hidden z-50">
        <Link href="/">
          <Image src={logo} className="h-16 w-20" alt="HMT Architects Logo" />
        </Link>
        <div className="grig justify-items-center">
        <div className="flex justify-evenly items-center border rounded-full shadow-md h-14 w-40 lg:hidden">
          <Link href="/about">
            <button className="border-r-2 text-sm text-gray-950 px-2">
            <i className="fa-solid fa-address-card  bg-red-600 text-white rounded-full p-2  hover:bg-yellow-600"></i>
            </button>
          </Link>
          <Link href="/testimonials">
            <button className="border-r-2 text-sm text-gray-950 px-2">
            <i className="fa-solid fa-image  bg-red-600 text-white rounded-full p-2  hover:bg-yellow-600"></i>
            </button>
          </Link>
          <Link href="/projects">
            <button className="text-sm font-medium text-gray-400 px-2">
            <i className="fa-regular fa-eye  bg-red-600 text-white rounded-full p-2  hover:bg-yellow-600"></i>
            </button>
          </Link>
        </div>
        </div>
        <div className="grid justify-items-end lg:hidden">
          <Link href="contactus">
          <div className="flex justify-evenly items-center  rounded-full shadow-md border h-10 w-10 px-18 hover:bg-yellow-500 xl:hidden">
            <i className="fa-solid fa-phone-volume text-gray-950"></i>
          </div>
        </Link></div>
        
      </div>
    </div>
  );
}

export default NavBar;
