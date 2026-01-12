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
                        className='flex flex-col gap-6 lg:gap-8 items-center text-center max-w-5xl'
                    >
                        <span className='text-3xl md:text-8xl font-bold text-white tracking-tight leadinig-tight'>
                            The Immune System <br/>
                            <span className="text-gray-400">for AI Data Pipelines</span>
                        </span>
                        
                        <p className='text-md md:text-2xl text-gray-300 max-w-3xl leading-relaxed'>
                            One line of code turns fragile pipelines into resilient, trustworthy foundations for RAG, LLMs, and agentic workflows.
                        </p>
                        <div className='flex flex-wrap gap-3 justify-center text-sm md:text-base mt-2'>
                            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10'>
                                <span className='text-emerald-400'>✓</span>
                                <span>Scans 50+ Formats</span>
                            </div>
                            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10'>
                                <span className='text-emerald-400'>✓</span>
                                <span>One-Line Integration</span>
                            </div>
                            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10'>
                                <span className='text-emerald-400'>✓</span>
                                <span>OWASP Top 10 Compliant</span>
                            </div>
                        </div>
                        <Button 
                            className='bg-white text-black hover:bg-gray-100 text-lg md:text-xl px-10 py-7 rounded-full font-medium transition-all duration-200 ease-in-out mt-4'
                        >
                            Get Started Free
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
