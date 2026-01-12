"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Database, Brain, Zap, FileText, Users, CheckCircle2 } from "lucide-react";

const data = [
    {
        "title": "Enterprise RAG Systems",
        "description": "Secure your retrieval-augmented generation pipelines with automatic content validation. Protect against data poisoning and ensure clean knowledge bases for your AI applications.",
        "icon": Database
    },
    {
        "title": "LLM Training Pipelines",
        "description": "Scan and validate training data across 50+ formats. Prevent malicious content from corrupting your language models during the training phase.",
        "icon": Brain
    },
    {
        "title": "AI Agent Workflows",
        "description": "Monitor and secure autonomous agent operations. Ensure trustworthy execution of multi-step AI workflows with real-time threat detection.",
        "icon": Zap
    },
    {
        "title": "Document Processing",
        "description": "Safely process large volumes of documents for AI consumption. Detect and neutralize embedded threats in PDFs, Word docs, spreadsheets, and more.",
        "icon": FileText
    },
    {
        "title": "Customer Data Ingestion",
        "description": "Protect customer-facing AI systems from adversarial inputs. Validate and sanitize all incoming data before it reaches your models.",
        "icon": Users
    },
    {
        "title": "Compliance & Audit",
        "description": "Maintain OWASP compliance for LLM applications. Generate automated reports and audit trails for regulatory requirements.",
        "icon": CheckCircle2
    }
]


const UseCases = () => {
    return (
        <div id="use-cases" className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Use Cases</h2>
                    <p className="text-xl text-slate-500 max-w-2xl">Adaptable security for every stage of your AI development lifecycle.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="group"
                        >
                            <Card className='h-full p-8 rounded-3xl bg-slate-50 hover:bg-white border-transparent hover:border-slate-200 transition-all duration-300 shadow-none hover:shadow-xl hover:shadow-slate-200/50 flex flex-col'>
                                <div className='mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300'>
                                    <item.icon size={32} strokeWidth={1.5} className="text-slate-900" />
                                </div>
                                <CardHeader className='p-0 mb-4'>
                                    <CardTitle className='text-2xl font-bold text-slate-900'>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className='p-0 flex-1'>
                                    <p className='text-slate-600 leading-relaxed text-lg'>{item.description}</p>
                                </CardContent>
                                <div className="mt-8 pt-8 border-t border-slate-200 flex items-center text-sm font-semibold text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    Learn more <span className="ml-2">→</span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UseCases
