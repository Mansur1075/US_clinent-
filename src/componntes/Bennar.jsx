import React from 'react'
import Container from './Container'

const Bennar = () => {
  return (
    <div className='relative bg-black py-5 overflow-hidden'>
      
      {/* Top-left glowing spots using only Tailwind */}
      <div className='absolute top-0 left-0 w-40 h-40 rounded-full mix-blend-screen filter blur-3xl opacity-70 bg-gradient-to-br from-[#9700FF] via-[#57FF1C] to-[#FF0000] animate-pulse'></div>
      <div className='absolute top-10 left-10 w-24 h-24 rounded-full mix-blend-screen filter blur-2xl opacity-50 bg-gradient-to-br from-[#9700FF] via-[#57FF1C] to-[#0038FF] animate-pulse'></div>
      <Container>
        <div className="py-5">
          <div className="w-6/12">
            <h4 className='w-3/12 pb-2 text-[#FFFF]  uppercase border-b text-[18px] font-medium'>Jimmy Turner</h4>
            <h2 className=' text-[]'>Professional video editor</h2>
            <p>Making your videos look more cool.</p>
          </div>
          <div className="w-6/12">
            {/* Right side content */}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Bennar