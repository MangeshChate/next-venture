"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { motion } from "framer-motion"
import { ShieldAlert, FileSearch, Lock, BrainCircuit, Bot, Code2, Activity, FileCheck2 } from "lucide-react"

const data = 
    [
        {
            "title": "Threat Detection",
            "description": "Real-time scanning of 50+ file formats to identify malicious content.",
            "icon": ShieldAlert
        },
        {
            "title": "OWASP Compliance",
            "description": "Built-in protection against OWASP Top 10 for LLM Applications vulnerabilities.",
            "icon": FileCheck2
        },
        {
            "title": "RAG Security",
            "description": "Secure your Retrieval-Augmented Generation pipelines with automatic content validation.",
            "icon": Lock
        },
        {
            "title": "LLM Protection",
            "description": "Shield your language models from adversarial inputs and jailbreak attempts.",
            "icon": BrainCircuit
        },
        {
            "title": "Agentic Workflows",
            "description": "Ensure trustworthy AI agent operations with comprehensive security monitoring.",
            "icon": Bot
        },
        {
            "title": "One-Line Integration",
            "description": "Deploy enterprise-grade security in minutes with our simple API integration.",
            "icon": Code2
        },
        {
            "title": "Real-Time Monitoring",
            "description": "24/7 pipeline monitoring with instant alerts for suspicious activities.",
            "icon": Activity
        },
        {
            "title": "Deep Analysis",
            "description": "Advanced static and dynamic analysis for complex document structures.",
            "icon": FileSearch
        }
    ]
    



const Service = () => {
    return (
        <div id="features" className='py-32 w-full bg-slate-50'>
            <div className="container mx-auto px-4">
                <motion.div 
                     initial={{ opacity: 0, y: 20 }}  
                     whileInView={{ opacity: 1, y: 0 }}  
                     transition={{ duration: 0.8, ease: "easeOut" }}
                     className='mb-20 text-center'
                >
                    <h2 className='text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight'>Core Platform</h2>
                    <p className='text-xl text-slate-500 max-w-2xl mx-auto'>Enterprise-grade security infrastructure designed for the specific challenges of modern AI pipelines.</p>
                </motion.div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <Card className='h-full p-8 bg-white hover:bg-black hover:text-white transition-all duration-300 border-slate-200 hover:border-black shadow-sm hover:shadow-2xl cursor-default group'>
                                <div className='size-14 rounded-2xl bg-slate-100 text-black group-hover:bg-white/20 group-hover:text-white flex items-center justify-center mb-8 transition-colors duration-300'>
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
                                <CardHeader className="p-0 mb-4">
                                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service
