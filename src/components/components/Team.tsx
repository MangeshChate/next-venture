"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const data = [
    {
        "name": "Mr. Krishnapal Singh Solanki",
        "position": "CEO",
        "imgUrl": "https://www.koneventures.com/assets/img/team/kp-sir.png"
    },
    {
        "name": "Dr. Hepesh Shepherd",
        "position": "Chief Product Officer",
        "imgUrl": "https://www.koneventures.com/assets/img/team/hipesh%20%281%29%20%281%29.jpg"
    },
    {
        "name": "Mr. Sachin Awari",
        "position": "CTO",
        "imgUrl": "https://www.koneventures.com/assets/img/team/sachin-awari.png"
    },
    {
        "name": "Mr. Mangesh Jadhav",
        "position": "Software Developer",
        "imgUrl": "https://www.koneventures.com/assets/img/team/mangesh-sir.png"
    },
    {
        "name": "Sritam Kumar Jena",
        "position": "Software Developer",
        "imgUrl": "https://www.koneventures.com/assets/img/team/sritam-01.jpeg"
    },
    {
        "name": "Mr. Milan Pal",
        "position": "Manager",
        "imgUrl": "https://www.koneventures.com/assets/img/team/milan1.jpeg"
    },
    {
        "name": "Mr. Dayal Thakur",
        "position": "Software Developer",
        "imgUrl": "https://www.koneventures.com/assets/img/team/dayal%20%281%29.png"
    },
    {
        "name": "Mr. Sandesh Naik",
        "position": "Software Developer",
        "imgUrl": "https://www.koneventures.com/assets/img/team/sandesh-sir.png"
    },
    {
        "name": "Mr. Himanshu Yadav",
        "position": "Software Developer",
        "imgUrl": "https://www.koneventures.com/assets/img/team/himasu.png"
    },
    {
        "name": "Mr. Sopan Vyankat Nadagude",
        "position": "Software Developer",
        "imgUrl": "https://www.koneventures.com/assets/img/team/sopan-sir.png"
    },
    {
        "name": "Mr. Pankaj Narayan",
        "position": "Software Developer",
        "imgUrl": "https://www.koneventures.com/assets/img/team/pankaj.jpeg"
    }
]




const Team = () => {
    return (
        <div className='w-screen  mt-24'>
            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='w-full'
                >
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-start block">
                        MEET OUR TEAM
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {data.map((item) => (
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className='h-[400px] w-[300px] mt-16 relative'
                        >
                            <div className="top-4 right-4 -z-10 absolute  object-cover rounded-2xl h-full w-full bg-blue-700" style={{ backgroundImage: "url('/heroimg.jpg')" }}>

                            </div>
                            <Card className='h-full w-full p-3 rounded-2xl  cursor-pointer duration-500 transition-all ease-in-out border-slate-600 border'>
                                <img src={item.imgUrl} alt="" className='rounded-2xl w-full object-cover object-top  h-[70%] ' />
                                <CardHeader>
                                    <CardTitle className='text-xl'>{item.name}</CardTitle>
                                </CardHeader>
                                <CardContent className='text-sm'>
                                    {item.position}
                                </CardContent>
                                <CardContent>
                                </CardContent>
                            </Card>

                        </motion.div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Team
