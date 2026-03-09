import React from 'react'
import Container from './Container'
import { IoMdCall } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-[#000000] py-10'>
        <Container>
           <div className="flex justify-between">
  <div className="w-10/12">
    <h3 className='text-[50px] pb-3 text-white font-bold font-exo uppercase border-b-2 border-transparent bg-[linear-gradient(to_right,#FF0000,#42FF00,#2400FF)] bg-size-[100%_2px] bg-no-repeat bg-bottom'>
      I am ready to consult you
    </h3>

    <div className="flex gap-6 text-white pt-8 text-[18px] font-exo items-center justify-between">
      <h4>My name is</h4>
      <h4>Name</h4>
      <h4>I am interested in</h4>
      <h4>Message</h4>
      <button className='bg-[#6F00A9] px-8 py-2'>Send</button>
    </div>

    <div className="flex gap-6 text-white pt-9 items-center font-exo justify-between ">
      <h5><IoMdCall className='inline-block text-[#6F00A9]'/> +92 455 478 112</h5>
      <h5><FaLocationDot className='inline-block text-[#6F00A9]'/> defense phase 3, lahore pakistan</h5>
      <h5><MdEmail className='inline-block text-[#6F00A9]'/> videoeditor@gmail.com</h5>
    </div>
  </div>

 <div className="w-4/12 flex justify-end items-center">
  <h4 className="text-white -rotate-90 origin-center text-end">
    Go back to the top
  </h4>
</div>
</div>
        </Container>
    </div>
  )
}

export default Footer