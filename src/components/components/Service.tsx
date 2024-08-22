"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import {motion } from "framer-motion"
const data = 
    [
        {
            "title": "Take Any Test",
            "description": "Versatile online testing platform with diagnostics and analysis.",
            "readMoreLink": "#",
            "imgUrl": "https://www.koneventures.com/assets/img/takeanytest-img-1.png"
        },
        {
            "title": "HRMS",
            "description": "Suite to manage and automate HR functions, easing administrative burdens.",
            "readMoreLink": "#",
            "imgUrl": "https://www.koneventures.com/assets/img/hrms-img-1.png"
        },
        {
            "title": "Recruit Eazy",
            "description": "Efficient online recruiting system to enhance productivity and contact management.",
            "readMoreLink": "#",
            "imgUrl": "https://www.koneventures.com/assets/img/recruit-easy-img-1.png"
        },
        {
            "title": "IoTs",
            "description": "Integrates IoT technologies with automation systems, including RFID and GPS.",
            "readMoreLink": "#",
            "imgUrl": "https://www.koneventures.com/assets/img/iots-img.png"
        },
        {
            "title": "Social Media Tracker",
            "description": "System designed to boost internal team engagement on social media.",
            "readMoreLink": "#",
            "imgUrl": "https://www.koneventures.com/assets/img/social-media-img.png"
        },
        {
            "title": "PVR",
            "description": "Holistic view of student progress with 'Personalised Video Results'.",
            "readMoreLink": "#",
            "imgUrl": "https://www.koneventures.com/assets/img/pvr.jpeg"
        },
        {
            "title": "CQP (AI Enabled Question Paper Generation)",
            "description": "Unique system for creating distinct question papers for students.",
            "readMoreLink": "#",
            "imgUrl": "https://www.koneventures.com/assets/img/CQP.jpeg"
        },
        {
            "title": "Time Table",
            "description": "Automates and optimizes schedules for better efficiency.",
            "readMoreLink": "#",
            "imgUrl": "https://www.koneventures.com/assets/img/TimeTable.jpeg"
        }
    ]
    



const Service = () => {
    return (
        <div className='h-[50vh] mb-52 w-screen'>
            <div className="container ">
                <motion.div 
                     initial={{ opacity: 0, x: -50 }}  
                     whileInView={{ opacity: 1, x: 0 }}  
                     transition={{ duration: 0.8, ease: "easeOut" }}
                className='text-2xl lg:text-4xl font-bold lg:mb-16 text-center lg:text-start  '>SERVICES OFFERED</motion.div>
                <motion.div
                
                 
                className='flex w-full p-5 lg:p-0  justify-center items-center mt-5'>
                    <Carousel opts={{
                        align: "start",
                    }}
                        className="w-full ">
                        <CarouselContent>
                            {data.map((item) => (

                                <CarouselItem className="lg:basis-1/3 flex  h-[400px] w-[300px] ">
                                    <div className="ps-3 pb-3  object-cover rounded-2xl h-full w-full bg-blue-700" style={{backgroundImage:"url('/heroimg.jpg')"}}>

                                    <Card className='h-full w-full p-3 rounded-2xl  hover:bg-slate-200 cursor-pointer duration-500 transition-all ease-in-out border-slate-600 border'>
                                        <img src={item.imgUrl} alt="" className='rounded-2xl w-full object-cover  h-[50%] ' />
                                        <CardHeader>
                                            <CardTitle>{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            {item.description}
                                        </CardContent>
                                        <CardContent>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>


                            ))}



                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </motion.div>
            </div>
        </div>
    )
}

export default Service
