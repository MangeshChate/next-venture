"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Infobar = () => {
    return (
        <div id="contact" className='w-full py-32 bg-slate-900 border-t border-slate-800 relative'>
            <div className="absolute inset-0 bg-blue-600/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-slate-900/0"></div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-center max-w-4xl mx-auto'>
                    <h3 className='text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight'>
                        Ready to secure your AI infrastructure?
                    </h3>
                    <p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed">
                        Join forward-thinking engineering teams building compliant, resilient AI applications with Jimbl.
                    </p>
                    <button className="bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-full transition-all text-lg shadow-lg hover:shadow-white/10">
                        Get Started Now
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default Infobar;
