import React from 'react'
import { Contactus } from '.'
import living from '../assets/livingroom.png'
import Image from 'next/image'

const GetInTouchBlock = () => {
  return (
    <div className='md:flex md:flex-row'>
        <div className='hidden md:flex md:basis-1/2 md:mx-auto md:ml-32'>
            <Image
            src = {living}
            width={500}
            height={500}
            alt='contact'
            />
        </div>
        <div className='md:mr-32'>
      <Contactus/>

        </div>
    </div>
  )
}

export default GetInTouchBlock
