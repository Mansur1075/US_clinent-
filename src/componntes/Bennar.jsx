import React from 'react'
import Container from './Container'
import mansur1 from "../assets/mansur1.png"

const Bennar = () => {
  return (
    <div className='relative bg-black pt-8 overflow-hidden'>
      <Container>
        <div className="py-5 flex">
          <div className="w-6/12">
            <h4 className="w-3/12 pb-2 text-white font-exo uppercase text-[18px] font-medium border-b-2 border-transparent bg-[linear-gradient(to_right,#FF0000,#42FF00,#2400FF)] bg-size-[100%_2px] bg-no-repeat bg-bottom">
              Jimmy Turner
            </h4>
            <h2 className=' text-[#FFFF] text-[76px] font-bold font-exo'>Professional video editor</h2>
            <p className=' text-[#ffff] text-[18px] font-exo'>Making your videos look more cool.</p>
            <button className=' text-[#ffff] text-[20px] font-bold font-exo mt-5 bg-[#6F00A9] px-18 hover:shadow-[0_0_10px_white] ease-in-out duration-300 hover:rotate-2'>lets talk</button>
          </div>
          <div className="w-6/12">
            <img src={mansur1} alt=""/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Bennar