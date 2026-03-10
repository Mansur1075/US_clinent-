import React from 'react'
import Container from './Container'

const Testimonials = () => {
    return (
        <div className='py-20 bg-[#000000]'>




            
            <Container>
                <div>
                    <h4 className='w-full sm:w-8/12 md:w-4/12 mx-auto text-center text-[#ffff] text-[40px] md:text-[50px] font-bold uppercase font-exo border-b-2 border-transparent bg-[linear-gradient(to_right,#FF0000,#42FF00,#2400FF)] bg-size-[100%_2px] bg-no-repeat bg-bottom mb-10'>
                        Testimonials
                    </h4>
                    <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-5 md:gap-20">
                        <div className="w-full sm:w-4/12 bg-[#6F00A9] py-15 px-15 hover:scale-105 ease-in-out duration-300">
                            <h5 className='text-[30px] md:text-[40px] font-bold font-exo uppercase text-center text-[#ffff]'>Marcus</h5>
                            <p className='text-[#ffff] text-[16px] md:text-[20px] font-medium font-exo text-center pt-1'>Co founder</p>
                            <p className='text-[16px] md:text-[18px] font-exo text-[#ffff] text-center pt-2'>Perfect communication and exceptional skills. This guy is King.</p>
                        </div>
                        <div className="w-full sm:w-4/12 bg-[#6F00A9] py-15 px-15 hover:scale-105 ease-in-out duration-300">
                            <h5 className='text-[30px] md:text-[40px] font-bold font-exo uppercase text-center text-[#ffff]'>Marcus</h5>
                            <p className='text-[#ffff] text-[16px] md:text-[20px] font-medium font-exo text-center pt-1'>Co founder</p>
                            <p className='text-[16px] md:text-[18px] font-exo text-[#ffff] text-center pt-2'>Perfect communication and exceptional skills. This guy is King.</p>
                        </div>
                        <div className="w-full sm:w-4/12 bg-[#6F00A9] py-15 px-15 hover:scale-105 ease-in-out duration-300">
                            <h5 className='text-[30px] md:text-[40px] font-bold font-exo uppercase text-center text-[#ffff]'>Marcus</h5>
                            <p className='text-[#ffff] text-[16px] md:text-[20px] font-medium font-exo text-center pt-1'>Co founder</p>
                            <p className='text-[16px] md:text-[18px] font-exo text-[#ffff] text-center pt-2'>Perfect communication and exceptional skills. This guy is King.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testimonials