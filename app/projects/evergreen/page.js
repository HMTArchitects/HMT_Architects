'use client'
import { data } from "../../../constants/evergreen_office.js";
import { Footer } from "@/components";
import Image from "next/image";
export default function evergreen_office() {
  return (
    <>
      <div className="flex flex-col">
        <div className=" bg-white md:mb-5 pt-5 pb-3 ">
          <h1 className="text-3xl md:text-6xl pt-5 font-semibold text-black text-center underline underline-offset-4">
            Evergreen
          </h1>
        </div>
        <div className="flex  md:flex-row flex-col mt-10">
          <div className="md:w-1/3 mt-10 ml-20 flex flex-col">
            <div>
              <h1 className="text-2xl  font-semibold text-black">Scope</h1>
              <p>Architecture, Structural, Interiors, Electrical & Plumbing</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">Area</h1>
              <p>8000sft</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">
                Location
              </h1>
              <p>Chrompet, Chennai</p>
            </div>
            <div className="pr-14">
              <h1 className="text-2xl pt-5 font-semibold text-black">
                Description
              </h1>
              <p>
              The project is for a water refining corporate company.

              Aqua concept is being used in the interiors of the project.
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
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

