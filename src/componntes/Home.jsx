import React from 'react'
import Container from './Container'
import mansur from "../assets/mansur.png"
import { FaFacebook } from 'react-icons/fa'
import { ImFacebook2 } from 'react-icons/im'
import { AiFillInstagram, AiOutlineYoutube } from 'react-icons/ai'

const Home = () => {
  return (
    <div className='bg-[#000000]'>
      <Container>
        <div className=" flex py-4 text-[#ffff] justify-between items-center">
         <div className="">
           <img src={mansur} alt="" />
         </div>
          <div className="w-7/12 orbitron cursor-pointer">
            <ul className=' flex  gap-20'>
              <li>home</li>
              <li>about</li>
              <li>portfolio</li>
              <li>testimonials</li>
              <li>contact</li>
            </ul>
          </div>
          <div className=" items-center flex gap-5 ">
            <ImFacebook2/>
            <AiFillInstagram className='text-2xl'/>
            <AiOutlineYoutube className=' text-2xl' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home