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

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed z-50 top-0  left-0 right-0 text-white transition-all duration-300  ${
            isScrolled ? 'bg-black/80 py-4' : 'bg-transparent py-6'
        }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-3xl font-bold text-white tracking-tighter relative z-50" onClick={(e) => scrollToSection(e, 'hero')}>
                        Jimbl
                    </a>
                    
                 
                    <ul className='hidden md:flex gap-10 text-sm font-medium items-center'>
                        {['Features', 'Use Cases', 'Integration', 'Architecture'].map((item) => (
                            <li key={item} className='relative group'>
                                <a 
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                       onClick={(e) => scrollToSection(e, item === 'Use Cases' ? 'usecases' : item.toLowerCase())}
                                    className='text-slate-300 hover:text-white transition-colors duration-200'
                                >
                                    {item}
                                </a>
                                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                            </li>
                        ))}
                        <li>
                            <a 
                                href="#contact"
                                onClick={(e) => scrollToSection(e, 'contact')}
                                className='bg-white text-black px-6 py-2.5 rounded-full hover:bg-slate-200 transition-all font-semibold'
                            >
                                Get Started
                            </a>
                        </li>
                    </ul>

                   
                    <button 
                        className="md:hidden text-2xl relative z-50"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

            
                {isMobileMenuOpen && (
    <motion.div
        className="md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center text-white z-40"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
        <ul className='flex flex-col gap-8 text-2xl text-center font-bold'>
            {['Features', 'Use Cases', 'Integration', 'Architecture', 'Contact'].map((item) => (
                <li key={item}>
                    <a 
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        onClick={(e) => scrollToSection(e, item === 'Use Cases' ? 'usecases' : item.toLowerCase())}
                        className='cursor-pointer hover:text-slate-300 transition-colors'
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </motion.div>
)}

            </div>
        </nav>
    )
}

export default Navbar