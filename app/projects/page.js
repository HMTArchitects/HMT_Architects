import { Institutions, Residential, Commercials, Footer } from "@/components";
export default function projects() {
  return (
    <>
    <div className="flex flex-col">
      <div className="bg-white mb-5 pt-5 pb-3">
        <h1 className="text-6xl pt-5 font-semibold text-black text-center">
          Portfolio
        </h1>
      </div>
      <Institutions />
      <Residential/>
      <Commercials/>
    </div>
    <Footer/>
    </>
  );
}
