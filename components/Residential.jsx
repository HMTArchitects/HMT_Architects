'use client'
import Link from "next/link.js";
import { data } from "../constants/project_residential.js";
import Image from "next/image";
export default function Residential() {
  return (
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="pl-8">
            <h1 className="text-left font-semibold text-4xl mt-2">
              Residential
            </h1>
          </div>
          <div>
            <div className="m-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-2">
              {data.map((item) => (
                <div className="inline-block p-6 " key={item.id}>
                  <Link href={item.link}>
                    <Image
                    className="cursor-pointer hover:scale-110 ease-in-out duration-300 shadow-lg rounded-xl aspect-video w-full h-auto"
                    src={item.img}
                    width={400}
                    height={300}
                    alt="/"
                  /></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

