import AboutUs from '@/components/components/AboutUs'
import Footer from '@/components/components/Footer'
import Hero from '@/components/components/Hero'
import Infobar from '@/components/components/Infobar'
import Integration from '@/components/components/Integration'
import Navbar from '@/components/components/Navbar'
import Service from '@/components/components/Service'
import Testimonials from '@/components/components/Testimonials'
import UseCases from '@/components/components/UseCases'
import React from 'react'

const Home = () => {
    return (
        <div className='overflow-y-hidden relative font-sans text-slate-900'>
            <div className=''>
                <Navbar />
            </div>
            <Hero />
            <UseCases/>
            <Service/>
            <Integration/>
            <Testimonials/>
            <Infobar/>
            <Footer/>
        </div>
    )
}

export default Home
