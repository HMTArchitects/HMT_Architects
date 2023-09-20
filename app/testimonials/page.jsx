import { Footer,Testimonials } from '@/components'
import "./style_testi.css"
import React from 'react'
import Head from 'next/head'
export default function Page() {
  return (
    <>
   <Head><link rel="stylesheet" src="/style_testi.css"></link></Head>
   <div className='flex justify-center mt-4'>
    <p className="text-blk heading">TESTIMONIALS</p></div>
   
   <Testimonials/>
   <Footer/>
    </>
  )
}
