"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from '../ui/card';
import { Quote } from "lucide-react";

const testimonials = [
    {
        "quote": "Jimbl has completely transformed how we handle data security for our RAG pipelines. It caught multiple prompt injection attempts in the first week alone.",
        "author": "Elena Rodriguez",
        "role": "Chief Data Officer",
        "company": "TechFlow AI",
        "gradient": "from-blue-500 to-cyan-500"
    },
    {
        "quote": "The one-line integration is not a gimmick. We were up and running in production in less than 15 minutes. It's security that doesn't slow us down.",
        "author": "Marcus Chen",
        "role": "VP of Engineering",
        "company": "DataSphere",
        "gradient": "from-purple-500 to-pink-500"
    },
    {
        "quote": "Finally, a security tool built specifically for the unique challenges of LLM applications. The OWASP support gives us the confidence to deploy.",
        "author": "Sarah Jenkins",
        "role": "Lead Security Architect",
        "company": "CyberGuard Solutions",
        "gradient": "from-amber-500 to-orange-500"
    }
]

const Testimonials = () => {
    return (
        <div id="testimonials" className='w-full py-32 bg-slate-900 text-white relative overflow-hidden'>
             {/* Abstract Background Shapes */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className='container mx-auto px-4 relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-center mb-20'
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Trusted by Security Leaders
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        See why engineering teams trust Jimbl to secure their most critical AI infrastructure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                        >
                            <Card className='h-full bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-800 transition-colors duration-300 backdrop-blur-sm'>
                                <Quote className="text-slate-600 mb-6 size-10" />
                                <CardContent className='p-0 flex flex-col h-full'>
                                    <p className="text-lg text-slate-300 italic mb-8 leading-relaxed flex-grow">
                                        "{item.quote}"
                                    </p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className={`size-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-xl font-bold`}>
                                            {item.author.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">{item.author}</h4>
                                            <p className="text-slate-400 text-sm">{item.role}, {item.company}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
