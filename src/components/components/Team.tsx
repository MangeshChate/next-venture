"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const data = [
    {
        "name": "Alex Chen",
        "position": "CEO & Co-Founder",
        "imgUrl": ""
    },
    {
        "name": "Sarah Martinez",
        "position": "CTO",
        "imgUrl": ""
    },
    {
        "name": "David Kumar",
        "position": "Head of Security",
        "imgUrl": ""
    },
    {
        "name": "Emily Johnson",
        "position": "Lead ML Engineer",
        "imgUrl": ""
    },
    {
        "name": "Michael Zhang",
        "position": "Product Manager",
        "imgUrl": ""
    },
    {
        "name": "Lisa Anderson",
        "position": "Head of Customer Success",
        "imgUrl": ""
    },
    {
        "name": "James Wilson",
        "position": "Senior DevOps Engineer",
        "imgUrl": ""
    },
    {
        "name": "Rachel Patel",
        "position": "Security Researcher",
        "imgUrl": ""
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
                        MEET THE TEAM
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className='h-[400px] w-[300px] mt-16 relative'
                        >
                            <div className="top-4 right-4 -z-10 absolute  object-cover rounded-2xl h-full w-full bg-gradient-to-br from-blue-600 to-purple-600">

                            </div>
                            <Card className='h-full w-full p-3 rounded-2xl  cursor-pointer duration-500 transition-all ease-in-out border-slate-600 border flex flex-col'>
                                <div className='flex items-center justify-center rounded-2xl w-full h-[70%] text-8xl bg-gradient-to-br from-slate-100 to-slate-200'>
                                    👤
                                </div>
                                <CardHeader>
                                    <CardTitle className='text-xl'>{item.name}</CardTitle>
                                </CardHeader>
                                <CardContent className='text-sm'>
                                    {item.position}
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
