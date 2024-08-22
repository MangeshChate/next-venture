"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HomeIcon, Menu, X } from "lucide-react";
import {motion} from "framer-motion"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`fixed z-50 top-0 border-slate-400 left-0 right-0 text-white transition-all duration-500 ease-in-out ${
            isScrolled ? 'bg-white text-slate-700' : 'bg-transparent'
        } lg:hover:bg-white hover:text-slate-700`}
        >
            <div className="container mx-auto px-4 py-5">
                <div className="flex items-center justify-between lg:justify-evenly">
                    <div className="">
                        <img src="/logo.png" alt="logo.png" className='w-[40px] lg:w-[80px] lg:h-[80px]' />
                    </div>
                    
                 
                    <ul className='hidden md:flex gap-16 text-xl h-[80px] items-center'>
                        <li className='h-full relative flex cursor-pointer items-center group'>
                            <span className='hover:text-black transition-colors duration-200 ease-out'><HomeIcon/></span>
                            <span className='absolute left-0 bottom-0 h-[4px] w-0 bg-black transition-all duration-500 ease-out group-hover:w-full'></span>
                        </li>
                        <li className='h-full relative flex cursor-pointer items-center group'>
                            <span className='hover:text-black transition-colors duration-500 ease-out'>Products</span>
                            <span className='absolute left-0 bottom-0 h-[4px] w-0 bg-black transition-all duration-500 ease-out group-hover:w-full'></span>
                        </li>
                        <li className='h-full relative flex cursor-pointer items-center group'>
                            <span className='hover:text-black transition-colors duration-500 ease-out'>About us</span>
                            <span className='absolute left-0 bottom-0 h-[4px] w-0 bg-black transition-all duration-500 ease-out group-hover:w-full'></span>
                        </li>
                        <li className='h-full relative flex cursor-pointer items-center group'>
                            <span className='hover:text-black transition-colors duration-500 ease-out'>Gallery</span>
                            <span className='absolute left-0 bottom-0 h-[4px] w-0 bg-black transition-all duration-500 ease-out group-hover:w-full'></span>
                        </li>
                        <li className='h-full relative flex cursor-pointer items-center group'>
                            <span className='hover:text-black transition-colors duration-500 ease-out'>Downloads</span>
                            <span className='absolute left-0 bottom-0 h-[4px] w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
                        </li>
                        <li className='h-full relative flex cursor-pointer items-center group'>
                            <span className='hover:text-black transition-colors duration-500 ease-out'>Our Blogs</span>
                            <span className='absolute left-0 bottom-0 h-[4px] w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
                        </li>
                        <li className='h-full relative flex cursor-pointer items-center group'>
                            <span className='hover:text-black transition-colors duration-500 ease-out'>Contact Us</span>
                            <span className='absolute left-0 bottom-0 h-[4px] w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
                        </li>
                    </ul>

                   
                    <button 
                        className="md:hidden text-2xl"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

            
                {isMobileMenuOpen && (
    <motion.div
        className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center text-white z-40 backdrop-blur-sm"
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
        <button 
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={toggleMobileMenu}
        >
            <X />
        </button>
        <ul className='flex flex-col gap-4 text-lg'>
            <li className='cursor-pointer flex items-center'>
                <HomeIcon className="mr-2" /> Home
            </li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>About us</li>
            <li className='cursor-pointer'>Gallery</li>
            <li className='cursor-pointer'>Downloads</li>
            <li className='cursor-pointer'>Our Blogs</li>
            <li className='cursor-pointer'>Contact Us</li>
        </ul>
    </motion.div>
)}

            </div>
        </nav>
    )
}

export default Navbar