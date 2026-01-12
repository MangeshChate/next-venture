"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from '../ui/card';
import { ShieldCheck, Workflow, Radar, FileSearch2, BellRing, Cpu } from "lucide-react";
import WorldMap from '../ui/world-map';

const stages = [
    {
        title: "Ingress & Classify",
        summary: "Smart edge filtering for 50+ formats with MIME validation and content fingerprinting.",
        icon: ShieldCheck
    },
    {
        title: "Orchestrate",
        summary: "Route through sanitizers, guardrails, and RAG validators with policy-as-code.",
        icon: Workflow
    },
    {
        title: "Observe",
        summary: "Full-fidelity traces across agents, LLM calls, and storage hops with anomaly alerts.",
        icon: Radar
    },
    {
        title: "Deep Inspect",
        summary: "Disassemble complex docs, strip macros, scan links, and neutralize embedded objects.",
        icon: FileSearch2
    },
    {
        title: "Contain & Notify",
        summary: "Quarantine risky payloads, auto-scrub PII, and page teams via Slack/Webhooks.",
        icon: BellRing
    },
    {
        title: "Enforce at Runtime",
        summary: "Jailbreak guardrails, toxicity filters, and allowlists before responses ship.",
        icon: Cpu
    }
];

const regions = [
    { label: "North America", value: "124 active nodes" },
    { label: "Europe", value: "98 active nodes" },
    { label: "APAC", value: "86 active nodes" },
    { label: "LATAM", value: "54 active nodes" },
];

const ArchitectureSection = () => {
    return (
        <div id="architecture" className='w-full py-32 bg-slate-900 text-white relative overflow-hidden'>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className='container mx-auto px-4 relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center'>
                    {/* Left Column: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className='mb-10'
                        >
                            <span className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 bg-blue-500/10 px-3 py-1 rounded-full'>
                                Architecture Flow
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tight">
                                Global Zero-Trust Fabric
                            </h2>
                            <p className="text-lg md:text-xl text-slate-300 max-w-3xl">
                                From ingress to runtime, every hop is validated, observed, and enforced. Mirror this blueprint to keep your AI pipelines resilient worldwide.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {stages.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Card className='h-full bg-slate-800/50 border border-slate-700/70 p-5 hover:border-white/40 hover:bg-slate-800 transition-all duration-200 backdrop-blur-sm group'>
                                        <div className='size-11 rounded-lg bg-white/10 text-white flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors'>
                                            <item.icon size={22} strokeWidth={1.5} className="group-hover:text-blue-400 transition-colors" />
                                        </div>
                                        <CardContent className='p-0 flex flex-col gap-2'>
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                            <p className="text-slate-300 text-sm leading-relaxed">{item.summary}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: World Map Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full h-full flex flex-col justify-center"
                    >
                        {/* Map Container */}
                        <div className="w-full rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
                             <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
                            
                            <WorldMap
                                lineColor="#60a5fa" // Tailwind blue-400
                                dots={[
                                    {
                                        start: { lat: 37.7749, lng: -122.4194 }, // SF
                                        end: { lat: 40.7128, lng: -74.0060 }, // NY
                                    },
                                    {
                                        start: { lat: 40.7128, lng: -74.0060 }, // NY
                                        end: { lat: 51.5074, lng: -0.1278 }, // London
                                    },
                                    {
                                        start: { lat: 51.5074, lng: -0.1278 }, // London
                                        end: { lat: 28.6139, lng: 77.2090 }, // Delhi
                                    },
                                    {
                                        start: { lat: 28.6139, lng: 77.2090 }, // Delhi
                                        end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                                    },
                                    {
                                        start: { lat: 51.5074, lng: -0.1278 }, // London
                                        end: { lat: -23.5505, lng: -46.6333 }, // Sao Paulo
                                    },
                                    {
                                        start: { lat: -23.5505, lng: -46.6333 }, // Sao Paulo
                                        end: { lat: 37.7749, lng: -122.4194 }, // Loop back to SF
                                    },
                                ]}
                            />
                        </div>

                        {/* Region Stats */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {regions.map((region) => (
                                <div key={region.label} className="flex items-center justify-between bg-slate-800/40 border border-white/5 rounded-xl px-4 py-3 text-sm hover:bg-slate-800/60 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                        <span className="text-white font-medium">{region.label}</span>
                                    </div>
                                    <span className="text-slate-400 font-mono text-xs">{region.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ArchitectureSection