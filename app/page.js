import Image from 'next/image'

import { Hero, Gallerycarousel, Whyhmt, Testimonials,Footer } from "../components";
export default function Home() {
  return (
    <>
    <Hero/>
    <Whyhmt/>
    <Gallerycarousel/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
