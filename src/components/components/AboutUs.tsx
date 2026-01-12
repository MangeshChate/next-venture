"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="w-screen bg-[#fffff] lg:mb-24 lg:mt-24">
      <div className="flex flex-col lg:flex-row justify-center items-center p-5 w-full h-full container">
        <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="flex-1 flex flex-col gap-5 p-4 md:p-6 lg:p-8"
>
  <span className="text-xl md:text-2xl lg:text-4xl font-bold text-center md:text-left">
    WHY <span className="text-blue-700">JIMBL</span>?
  </span>
  <p className="text-base md:text-lg lg:text-xl md:text-left text-justify">
    Modern AI systems are only as good as the data they consume. Jimbl acts as an immune system for your AI data pipelines, automatically detecting and neutralizing threats before they can compromise your RAG systems, LLMs, or agentic workflows. With support for 50+ file formats and one-line integration, Jimbl provides enterprise-grade security without the complexity. Our platform is built on OWASP Top 10 for LLM Applications standards, ensuring your AI infrastructure remains resilient, trustworthy, and production-ready.
  </p>
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center md:justify-start">
    <div className="flex flex-col items-center md:items-start">
      <span className="font-bold text-2xl md:text-3xl">50+</span>
      <span className="text-sm md:text-base">File Formats</span>
    </div>

    <div className="flex flex-col items-center md:items-start">
      <span className="font-bold text-2xl md:text-3xl">1 Line</span>
      <span className="text-sm md:text-base">Integration</span>
    </div>
    <div className="flex flex-col items-center md:items-start">
      <span className="font-bold text-2xl md:text-3xl">99.9%</span>
      <span className="text-sm md:text-base">Threat Detection</span>
    </div>
    <div className="flex flex-col items-center md:items-start">
      <span className="font-bold text-2xl md:text-3xl">24/7</span>
      <span className="text-sm md:text-base">Monitoring</span>
    </div>
  </div>
</motion.div>

      </div>
    </div>
  );
};

export default AboutUs;
