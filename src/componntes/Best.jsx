import React from 'react'
import Container from './Container'
import rakib1 from "../assets/rakib1.png"
import rakib2 from "../assets/rakib2.png"
import rakib3 from "../assets/rakib3.png"
import { MdOutlineSlowMotionVideo } from 'react-icons/md'

const Best = () => {
  return (
   
   <div className=' bg-[#000000] py-20'>
        <Container>
            <div className="">
                <h4 className='w-4/12 text-[50px] text-[#ffffff] font-bold border-b-2 border-transparent bg-[linear-gradient(to_right,#FF0000,#42FF00,#2400FF)] bg-size-[100%_2px] bg-no-repeat bg-bottom justify-end font-exo uppercase'>My best edits</h4>
             <div className=" flex justify-between pt-15">
                   <div className=" relative w-4/12 group  overflow-hidden hover:scale-105 duration-300 ease-in-out">
                <img src={rakib1} alt="" />
                 <div className=" absolute top-0 right-110 w-full h-full bg-[#00000062] flex pr-14 items-center justify-center  group-hover:right-0 duration-300 ease-in-out">
                    <MdOutlineSlowMotionVideo className=' text-[#ffff] text-[80px]'/>
                </div>
                </div>
                <div className=" relative w-4/12 group  overflow-hidden hover:scale-105 duration-300 ease-in-out">
                <img src={rakib2} alt="" />
                 <div className=" absolute top-0 right-110 w-full h-full bg-[#0000007c] flex pr-14 items-center justify-center  group-hover:right-0 duration-300 ease-in-out">
                    <MdOutlineSlowMotionVideo className=' text-[#ffff] text-[80px]'/>
                </div>
                </div>
                <div className=" relative w-4/12 group  overflow-hidden hover:scale-105 duration-300 ease-in-out">
                <img src={rakib3} alt="" />
                <div className=" absolute top-0 right-110 w-full h-full bg-[#0000007c] flex pr-14 items-center justify-center  group-hover:right-0 duration-300 ease-in-out">
                    <MdOutlineSlowMotionVideo className=' text-[#ffff] text-[80px]'/>
                </div>
                </div>
             </div>
            </div>
        </Container>
    </div>
  )
}

export default Best