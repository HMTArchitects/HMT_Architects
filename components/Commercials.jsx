'use client'
import { data } from "../constants/project_commercials.js";
import Image from "next/image";
export default function Commercials() {
  return (
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="pl-8 pt-8">
            <h1 className="text-left font-semibold text-4xl mt-2">
              Commercial and Office
            </h1>
          </div>
          <div>
            <div className="m-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-2 pl-6 pr-6">
              {data.map((item) => (
                <div className="inline-block p-5 w-full h-full" key={item.id}>
                  <Image
                    className="cursor-pointer drop-shadow-xl hover:scale-110 ease-in-out duration-300 shadow-lg rounded-xl aspect-video w-full h-auto"
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
  );
}

