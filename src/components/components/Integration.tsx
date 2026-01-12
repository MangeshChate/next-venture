"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Button } from '../ui/button';
import { ArrowRight, Terminal } from 'lucide-react';

const Integration = () => {
    return (
        <div id="integration" className='w-full bg-slate-50 py-32 border-y border-slate-200'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
                            Ready for Production
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            Deploy enterprise-grade AI security with just one line of code. Compatible with all major LLM frameworks and cloud providers.
                        </p>
                        
                        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                            <Button className='bg-black hover:bg-slate-800 text-white text-lg px-8 py-6 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl'>
                                Start Free Trial
                            </Button>
                            <Button variant="outline" className='text-lg px-8 py-6 border-slate-300 hover:bg-slate-100 rounded-lg text-slate-700 flex items-center gap-2'>
                                Documentation <ArrowRight size={18} />
                            </Button>
                        </div>

                        <div className='grid grid-cols-2 gap-8 mt-12'>
                            <div>
                                <div className='text-3xl font-bold text-slate-900'>50+</div>
                                <div className='text-slate-500'>File Formats</div>
                            </div>
                            <div>
                                <div className='text-3xl font-bold text-slate-900'>&lt;10ms</div>
                                <div className='text-slate-500'>Latency</div>
                            </div>
                            <div>
                                <div className='text-3xl font-bold text-slate-900'>99.9%</div>
                                <div className='text-slate-500'>Uptime SLA</div>
                            </div>
                            <div>
                                <div className='text-3xl font-bold text-slate-900'>SOC2</div>
                                <div className='text-slate-500'>Certified</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 w-full max-w-xl"
                    >
                        <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-800">
                            <div className="flex items-center gap-2 px-4 py-3 bg-slate-950/50 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                                <div className="ml-2 text-xs text-slate-500 font-mono flex items-center gap-2">
                                    <Terminal size={12} /> bash
                                </div>
                            </div>
                            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
                                <div className="text-slate-400 mb-4">
                                    <span className="text-emerald-400">➜</span> ~ npm install @jimbl/security
                                </div>
                                <div className="text-slate-300">
                                    <span className="text-purple-400">import</span> {"{ JimblScan }"} <span className="text-purple-400">from</span> <span className="text-amber-300">"@jimbl/security"</span>;
                                    <br /><br />
                                    <span className="text-slate-500">// Protect your pipeline</span><br />
                                    <span className="text-purple-400">const</span> result = <span className="text-blue-400">await</span> JimblScan.<span className="text-blue-400">validate</span>(userInput);
                                    <br /><br />
                                    <span className="text-purple-400">if</span> (!result.safe) {"{"}<br />
                                    &nbsp;&nbsp;<span className="text-blue-400">console</span>.<span className="text-blue-400">warn</span>(<span className="text-amber-300">"Threat blocked:"</span>, result.threats);<br />
                                    {"}"}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Integration
