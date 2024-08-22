"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
const data = [
    {
        "name": "Mr. Utkarsh Gupta",
        "title": "Managing Director, Ramagya Group",
        "image": "https://www.koneventures.com/assets/img/Utkars_g.png",
        "testimonial": "One of the most critical core competencies of SchoolbellQ* is its enormous ability to understand customer requirements and translate them into tremendously valuable software functionality. Not only do they deliver the required features in quick TATs, but their competent technical team can easily understand our complex requirements and come up with worthy suggestions to tweak it to churn out superb functionality. It's impressive to see SchoolbellQ Team's profound industry knowledge is combined with their passion, adding value way more than any other regular IT organization."
    },
    {
        "name": "Ms Aparna Magee",
        "title": "Principal, Ramagya School, Noida",
        "image": "https://www.koneventures.com/assets/img/Aparna_mam.png",
        "testimonial": "We struggled a lot with our previous ERP. The SchoolbellQ’s entry was a refreshing change that rid us of all the lingering issues. SchoolBellQ's on-premise team’s unstinting support & its full-service model ensured that all modules are fully utilised. Super splendid features with intuitive interfaces and a repository of insightful reports make it an absolute delight to work with SchoolbellQ’s services."
    },
    {
        "name": "Sapna Shepherd",
        "title": "Principal, Hi-tech World School",
        "image": "https://www.koneventures.com/assets/img/testimonials/sapn.jpeg",
        "testimonial": "We appreciate and strongly recommend SchoolBellQ Services for their excellent services and support in the implementation of ERP for our school. We are delighted by the excellent teamwork provided by their team for every query is very quick, which helps us to organise and manage our operations smoothly. Mobile App and other add-on features made it easier for us to make decisions. More than the user interface, we are pleased with the excellent support, which is always available on call & email. We would like to compliment you for the seamless implementation of the solution and mention some key areas such as - timely customisation of report cards as per our needs, very prompt customer support, and constant up-gradation of modules. Your wonderful service is what anyone should strive towards. Keep it up!!"
    },
    {
        "name": "Mr. Madhukar Jha",
        "title": "Principal, GD Goenka Public School, Patna",
        "image": "https://www.koneventures.com/assets/img/madhukar.png",
        "testimonial": "When we switched from our previous ERP to SchoolBellQ Services 4 years back, we were very apprehensive about the painful process of shifting to a new ERP. However, with SchoolBellQ Services, it was a quick, seamless, and hassle-free transition. It's been super-smooth 4 years of excellent service and constant new features being added."
    },
    {
        "name": "Roshon Dhariwal",
        "title": "Edupeer",
        "image": "https://www.koneventures.com/assets/img/roshan-1.jpeg",
        "testimonial": "A Big thanks to the entire team of SchoolBellQ for organising a nationwide Scholarship exam without hassle. The team is organised, efficient, and has excellent attention to detail. From day one, they have delivered all possible outcomes as demanded"
    }
]


const Testamonial = () => {
    return (
        <div className="mt-24 h-screen">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl font-bold text-start mb-12">TESTIMONIALS</h2>
                </motion.div>

                <div className="relative overflow-hidden">

                    <Carousel opts={{ align: "start" }} className="w-full p-10">
                        <CarouselContent>
                            {data.map((item) => (
                                <CarouselItem className="flex h-[400px] " >
                                    <div className="ps-3 pb-3 object-cover rounded-2xl h-full w-full bg-blue-700" style={{ backgroundImage: "url('/heroimg.jpg')" }}>
                                        <Card className='h-full  p-3 rounded-2xl hover:bg-slate-200 cursor-pointer duration-500 transition-all ease-in-out border-slate-600 border'>
                                            <img src={""} alt="" className='rounded-2xl w-full object-cover h-[50%]' />
                                            <CardHeader>
                                                <CardTitle>{item.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                {""}
                                            </CardContent>
                                            <CardContent>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
                    </Carousel>

                </div>
            </div>
        </div>
    )
}

export default Testamonial
