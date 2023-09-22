'use client'
import { data } from "../../../constants/tagore_school.js";
import { Footer } from "@/components";
import Image from "next/image";
export default function tagoreschool() {
  return (
    <>
    <div className="flex flex-col">
      <div className="bg-white mb-5 pt-5 pb-3">
        <h1 className="text-6xl pt-5 font-semibold text-black text-center">
          Tagore School
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 ml-10">
          about
        </div>
        <div className="w-1/2 c">
          <div className="m-2 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center gap-y-2">
            {data.map((item) => (
              <div className="inline-block p-6 " key={item.id}>
                  <Image
                    className="cursor-pointer hover:scale-110 ease-in-out duration-300 shadow-lg rounded-xl aspect-video w-full h-auto"
                    src={item.img}
                    width={400}
                    height={300}
                    alt="/"
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

