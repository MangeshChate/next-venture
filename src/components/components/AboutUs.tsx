"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="w-screen bg-[#fffff] lg:mb-24 lg:mt-24">
      <div className="flex flex-col lg:flex-row justify-center items-center p-5 w-full h-full container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}  
          whileInView={{ opacity: 1, x: 0 }}  
          transition={{ duration: 0.8, ease: "easeOut" }}
        
          className="flex-1 relative hidden md:block"
        >
            <img src="/heroimg.jpg" alt=""className="absolute z-[-10] top-5 left-[-15px] object-cover rounded-2xl w-[400px] h-[600px] shadow-2xl" />
          <img
            src="https://www.koneventures.com/assets/img/about-img.png"
            alt=""
            className="object-cover rounded-2xl w-[400px] h-[600px] "
          />
        </motion.div>
        <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="flex-1 flex flex-col gap-5 p-4 md:p-6 lg:p-8"
>
  <span className="text-xl md:text-2xl lg:text-4xl font-bold text-center md:text-left">
    WE ARE A LEADING <span className="text-blue-700">TECHNOLOGY</span> SERVICES START UP
  </span>
  <p className="text-base md:text-lg lg:text-xl  md:text-left text-justify">
    K One Ventures is a Technology Services Start-Up formally Recognized by the Government of India since 2016. It has interests in multiple verticals like Schools (k12 segment), Colleges, AI-Proctored Online Testing for Institutional & Retail users. IoT, AI-Powered Recruitment Management, HRMS Automation Suite, Social Media Tracker, Feedback management solutions for Airlines & Hospitality sectors. The critical differentiator is the Services model (SAS), brilliant User Interface & quick support.
  </p>
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center md:justify-start">
    <div className="flex flex-col items-center md:items-start">
      <span className="font-bold text-2xl md:text-3xl">50K+</span>
      <span className="text-sm md:text-base">Happy clients</span>
    </div>

    <div className="flex flex-col items-center md:items-start">
      <span className="font-bold text-2xl md:text-3xl">100+</span>
      <span className="text-sm md:text-base">Projects</span>
    </div>
    <div className="flex flex-col items-center md:items-start">
      <span className="font-bold text-2xl md:text-3xl">30+</span>
      <span className="text-sm md:text-base">Skilled Employees</span>
    </div>
    <div className="flex flex-col items-center md:items-start">
      <span className="font-bold text-2xl md:text-3xl">10+</span>
      <span className="text-sm md:text-base">Events</span>
    </div>
  </div>
</motion.div>

      </div>
    </div>
  );
};

export default AboutUs;
