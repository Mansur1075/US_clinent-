import React from 'react'
import Container from './Container'
import { GoDotFill } from 'react-icons/go'

const About = () => {
    return (
        <div>
            <div className=" bg-[#000000] py-10">
                <Container>
                    <div className="">
                        <div className="">
                            <h3 className='text-[50px] w-3/12 font-bold mx-auto text-center uppercase  border-b-2 border-transparent bg-[linear-gradient(to_right,#FF0000,#42FF00,#2400FF)] bg-size-[100%_2px] bg-no-repeat bg-bottom text-[#ffff] justify-end font-exo'>About</h3>
                            <p className='w-8/12 mx-auto text-center text-[#ffff] font-exo text-[18px] pt-5'>
                                Welcome to the cinematic realm of Jimmy, where creativity meets technology to craft visually stunning narratives. With a passion for storytelling and a keen eye for detail, I embark on a journey to transform ordinary footage into extraordinary visual experiences.
                            </p>

                        </div>
                    </div>
                    <div className=" flex justify-between pt-20 w-10/12 mx-auto">
                        <div className="w-3/`12 text-[#ffff]">
                        <h3 className=' flex items-center gap-4 text-[20px] font-medium orbitron'>Cash cow editing <GoDotFill  className=' text-[green] text-[30px]'/></h3>
                        </div>
                        <div className="w-3/`12 text-[#ffff]">
                        <h3 className=' flex items-center gap-4 text-[20px] font-medium orbitron'>Reels editng <GoDotFill  className='text-[green] text-[30px]'/></h3>
                        </div>
                        <div className="w-3/`12 text-[#ffff]">
                        <h3 className=' flex items-center gap-4  text-[20px] font-medium orbitron'>animation <GoDotFill  className='text-[green] text-[30px]'/></h3>
                        </div>
                        <div className="w-3/`12 text-[#ffff]">
                        <h3  className=' flex items-center gap-4 text-[20px] font-medium orbitron'>podcast edit <GoDotFill  className='text-[green] text-[30px]'/></h3>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default About