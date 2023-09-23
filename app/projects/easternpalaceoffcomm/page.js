'use client'
import { data } from "../../../constants/epalace_offcomm.js";
import { Footer } from "@/components";
import Image from "next/image";
export default function epalace_offcomm() {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white mb-5 pt-5 pb-3">
          <h1 className="text-6xl pt-5 font-semibold text-black text-center underline underline-offset-4">
            Eastern Palace
          </h1>
        </div>
        <div className="flex flex-row mt-10">
          <div className="w-1/3 mt-10 ml-20 flex flex-col">
            <div>
              <h1 className="text-2xl  font-semibold text-black">Scope</h1>
              <p>Interiors</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">Area</h1>
              <p>10000sft</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">
                Location
              </h1>
              <p>Parrys,Chennai</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">
                Description
              </h1>
              <p>
              The interiors for a hotel facility has been done based on the wooden theme with raw texture usage along with marble cladding and detailing.
              </p>
            </div>
          </div>
          <div className="w-2/3 c">
            <div className="m-2 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-y-2 p-6">
              {data.map((item) => (
                <div
                  className="inline-block p-6"
                  key={item.id}
                >
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
      <Footer />
    </>
  );
}
