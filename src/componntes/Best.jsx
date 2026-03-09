import React from 'react'
import Container from './Container'
import rakib1 from "../assets/rakib1.png"
import rakib2 from "../assets/rakib2.png"
import rakib3 from "../assets/rakib3.png"
import { MdOutlineSlowMotionVideo } from 'react-icons/md'

const Best = () => {
  return (
    <div className='bg-[#000000] py-20'>
      <Container>
        <div>
          <h4 className='w-full sm:w-8/12 md:w-4/12 text-[40px] md:text-[50px] text-[#ffffff] font-bold border-b-2 border-transparent bg-[linear-gradient(to_right,#FF0000,#42FF00,#2400FF)] bg-size-[100%_2px] bg-no-repeat bg-bottom justify-end font-exo uppercase mb-10'>
            My best edits
          </h4>

          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {/* Image 1 */}
            <div className="relative w-full sm:w-4/12 group overflow-hidden hover:scale-105 duration-300 ease-in-out">
              <img src={rakib1} alt="" className="w-full h-auto"/>
              {/* Overlay hidden by default, only appear on hover */}
              <div className="absolute top-0 right-0 w-full h-full bg-[#00000062] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <MdOutlineSlowMotionVideo className='text-[#ffff] text-[80px]'/>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative w-full sm:w-4/12 group overflow-hidden hover:scale-105 duration-300 ease-in-out">
              <img src={rakib2} alt="" className="w-full h-auto"/>
              <div className="absolute top-0 right-0 w-full h-full bg-[#0000007c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <MdOutlineSlowMotionVideo className='text-[#ffff] text-[80px]'/>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative w-full sm:w-4/12 group overflow-hidden hover:scale-105 duration-300 ease-in-out">
              <img src={rakib3} alt="" className="w-full h-auto"/>
              <div className="absolute top-0 right-0 w-full h-full bg-[#0000007c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <MdOutlineSlowMotionVideo className='text-[#ffff] text-[80px]'/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Best