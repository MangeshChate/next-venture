"use client";
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div 
            className='text-white h-screen w-screen overflow-hidden bg-cover bg-center' 
            style={{ backgroundImage: "url(/Vmake_download/herobg.jpeg)" }}
        >
            <div className="w-full h-full flex justify-center items-center">
                <div className='container flex flex-col justify-center items-center px-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='flex flex-col gap-5 lg:gap-10 items-center text-center'
                    >
                        <span className='text-3xl md:text-5xl font-semibold'>
                            A Technology Services Start Up.
                        </span>
                        <span className='text-lg md:text-3xl'>
                            Making Technology For You!
                        </span>
                        <Button 
                            className='bg-transparent hover:bg-white hover:text-black text-base md:text-xl  md:w-1/4 transition-all duration-200 ease-in-out border-2 border-white py-2 md:py-3'
                        >
                            Get In Touch
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
