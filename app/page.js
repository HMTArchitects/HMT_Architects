import { Hero, Gallerycarousel, Whyhmt,GetInTouchBlock, Testimonials, Footer} from "../components";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
    <link rel="canonical" href="https://hmtarchitects.com/" />
    </Head>
    <Hero/>
    <Whyhmt/>
    <Gallerycarousel/>
    <GetInTouchBlock/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
