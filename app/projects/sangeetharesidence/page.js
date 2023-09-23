"use client";
import { data } from "../../../constants/sangeetha_resi.js";
import { Footer } from "@/components";
import Image from "next/image";
export default function sangeetha_resi() {
  return (
    <>
      <div className="flex flex-col">
        <div className=" bg-white mb-5 pt-5 pb-3 ">
          <h1 className="text-6xl pt-5 font-semibold text-black text-center underline underline-offset-4">
            Mrs. Sangeetha's Residence
          </h1>
        </div>
        <div className="flex flex-row mt-10">
          <div className="w-1/3 mt-10 ml-20 flex flex-col">
            <div>
              <h1 className="text-2xl  font-semibold text-black">Scope</h1>
              <p>Interiors, Electrical & Plumbing</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">Area</h1>
              <p>6500sft</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">
                Location
              </h1>
              <p>Mugapair, Chennai</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">
                Description
              </h1>
              <p>
              The residence is located in Mugapair, Chennai.

It is a mix of traditional and contemporary design. Traditional elements and a contemporary TV unit are incorporated into the living room.

All bedrooms are designed in a Contemporary style.
              </p>
            </div>
          </div>
          <div className="w-2/3 c">
            <div className="m-2 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:p-7 justify-items-center mr-12 ml-8 p-1">
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
