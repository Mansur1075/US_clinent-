import React from 'react'
import Container from './Container'
import { GoDotFill } from 'react-icons/go'

const About = () => {
    return (
        <div>
            <div className="bg-[#000000] py-10">
                <Container>

                    <div>
                        <div>
                            <h3 className='text-[32px] lg:text-[50px] w-fit mx-auto text-center uppercase border-b-2 border-transparent bg-[linear-gradient(to_right,#FF0000,#42FF00,#2400FF)] bg-size-[100%_2px] bg-no-repeat bg-bottom text-white font-bold font-exo'>
                                About
                            </h3>

                            <p className='w-full lg:w-8/12 mx-auto text-center text-white font-exo text-[16px] lg:text-[18px] pt-5 px-4'>
                                Welcome to the cinematic realm of Jimmy, where creativity meets technology to craft visually stunning narratives. With a passion for storytelling and a keen eye for detail, I embark on a journey to transform ordinary footage into extraordinary visual experiences.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between pt-12 lg:pt-20 w-full lg:w-10/12 mx-auto text-center lg:text-left">

                        <div className="w-full lg:w-3/12 text-white">
                            <h3 className='flex justify-center lg:justify-start items-center gap-4 text-[18px] lg:text-[20px] font-medium orbitron'>
                                Cash cow editing 
                                <GoDotFill className='text-green-500 text-[24px] lg:text-[30px]'/>
                            </h3>
                        </div>

                        <div className="w-full lg:w-3/12 text-white">
                            <h3 className='flex justify-center lg:justify-start items-center gap-4 text-[18px] lg:text-[20px] font-medium orbitron'>
                                Reels editng 
                                <GoDotFill className='text-green-500 text-[24px] lg:text-[30px]'/>
                            </h3>
                        </div>

                        <div className="w-full lg:w-3/12 text-white">
                            <h3 className='flex justify-center lg:justify-start items-center gap-4 text-[18px] lg:text-[20px] font-medium orbitron'>
                                animation 
                                <GoDotFill className='text-green-500 text-[24px] lg:text-[30px]'/>
                            </h3>
                        </div>

                        <div className="w-full lg:w-3/12 text-white">
                            <h3 className='flex justify-center lg:justify-start items-center gap-4 text-[18px] lg:text-[20px] font-medium orbitron'>
                                podcast edit 
                                <GoDotFill className='text-green-500 text-[24px] lg:text-[30px]'/>
                            </h3>
                        </div>

                    </div>

                </Container>
            </div>
        </div>
    )
}

export default About