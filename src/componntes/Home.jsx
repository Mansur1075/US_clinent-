import React, { useState } from 'react'
import Container from './Container'
import mansur from "../assets/mansur.png"
import { ImFacebook2 } from 'react-icons/im'
import { AiFillInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { HiMenuAlt3 } from "react-icons/hi"

const Home = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='bg-[#000000]'>
      <Container>

        <div className="flex py-4 text-[#ffff] justify-between items-center">

          {/* Logo */}
          <div>
            <img src={mansur} alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="w-7/12 orbitron cursor-pointer hidden lg:block">
            <ul className='flex gap-20'>
              <li>home</li>
              <li>about</li>
              <li>portfolio</li>
              <li>testimonials</li>
              <li>contact</li>
            </ul>
          </div>
          <div className="items-center gap-5 hidden lg:flex">
            <ImFacebook2 />
            <AiFillInstagram className='text-2xl' />
            <AiOutlineYoutube className='text-2xl' />
          </div>
          <div
            className="text-3xl lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HiMenuAlt3 />
          </div>

        </div>
        {menuOpen && (
          <div className="lg:hidden text-white pt-5">
            <ul className='flex flex-col gap-6 text-center orbitron'>
              <li>home</li>
              <li>about</li>
              <li>portfolio</li>
              <li>testimonials</li>
              <li>contact</li>
            </ul>
          </div>
        )}

      </Container>
    </div>
  )
}

export default Home