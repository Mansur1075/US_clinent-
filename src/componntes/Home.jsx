import React from 'react'
import Container from './Container'
import mansur from "../assets/mansur.png"

const Home = () => {
  return (
    <div className='bg-[black]'>
      <Container>
        <div className=" flex py-4 text-[#ffff] justify-between">
          <img src={mansur} alt="" />
          <h3 className='text-amber-600'>mansur</h3>
          <h3>mansur</h3>
        </div>
      </Container>
    </div>
  )
}

export default Home