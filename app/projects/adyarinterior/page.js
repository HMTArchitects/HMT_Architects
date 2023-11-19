'use client'
import { data } from "../../../constants/adyar_interior_office.js";
import { Footer } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../assets/cancel.png";
import Link from "next/link.js";
export default function adyar_interior_office() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  const showModal = (src) => {
    setModalVisible(true);
    setModalSrc(src);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className=" bg-white md:mb-5 pt-5 pb-3 ">
          <h1 className="text-3xl md:text-6xl pt-5 font-semibold text-black text-center">
            Adyar Interior
          </h1>
        </div>
        <div className="flex md:flex-row flex-col mt-10">
          <div className="md:w-1/3 mt-10 ml-20 flex flex-col">
            <div>
              <h1 className="text-2xl  font-semibold text-black">Scope</h1>
              <p>Interiors, Electrical & Plumbing</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">Area</h1>
              <p>900sft</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">
                Location
              </h1>
              <p>Chennai</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">
                Description
              </h1>
              <p>
              Interiors for a boutique in a dynamic arrangement.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 c">
            <div className="m-2 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-items-center mr-12 ml-8 p-6">
              {data.map((item) => (
                <div
                  className="inline-block pt-6 pl-6 h-full w-full"
                  key={item.id}
                >
                  <Image
                    className="cursor-pointer hover:scale-110 ease-in-out duration-300 shadow-lg rounded-xl aspect-video w-full h-auto"
                    src={item.img}
                    width={300}
                    height={200}
                    alt="/"
                    onClick={() => {
                      if (window.innerWidth >= 750) {
                        showModal(item.img);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Modal */}
           <div
              className={`${
                modalVisible ? "" : "hidden"
              } fixed top-0 left-0 z-80 w-screen h-screen bg-black/80 grid justify-center items-center`}
            >
              <div className="flex flex-col items-center relative mt-5">
                <Image
                  id="modal-img"
                  className="max-w-[800px] max-h-[400px] object-cover"
                  src={modalSrc}
                  alt="/"
                />
                <Image
                  className="w-20 h-15 cursor-pointer px-3 py-1 rounded-full absolute top-0 right-0"
                  onClick={closeModal}
                  style={{ marginTop: "1rem" }}
                  src={logo}
                  alt="/"
                />
                <div className="pt-3 pb-3">
                  <h1 className="text-xl  text-white text-center">
                    Adyar Interior
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center py-8">
        <Link
          href="../projects/easternpalaceoffcomm"
          class="relative inline-flex items-center px-16 py-3 overflow-hidden text-lg font-medium text-gray-600 border-2 border-gray-600 rounded-full hover:text-white group hover:bg-white"
        >
          <span class="absolute left-0 block w-full h-0 transition-all bg-gray-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="relative">Check out the next project</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

