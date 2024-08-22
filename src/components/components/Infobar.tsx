"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Infobar = () => {
    return (
        <div className='w-screen h-[200px] bg-cover bg-center' style={{ backgroundImage: "url('/Vmake_download/herobg.jpeg')" }}>
            <div className="container flex flex-col md:flex-row h-full items-center justify-center gap-10 p-4">
                <img
                    src="https://www.koneventures.com/esc-member-1-768x768.png"
                    alt="FTP.png"
                    className='w-[80px] md:w-[100px] hidden md:block'
                />
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-base md:text-xl text-center md:text-left w-full md:w-[50%]'>
                    Proud to be earning <span className='font-bold'>FOREX</span> for India through software EXPORTs - A proud member of an ESC, Ministry of Commerce, Government of India.
                </motion.div>
            </div>
        </div>
    );
}

export default Infobar;
