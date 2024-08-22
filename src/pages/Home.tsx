import AboutUs from '@/components/components/AboutUs'
import Footer from '@/components/components/Footer'
import Hero from '@/components/components/Hero'
import Infobar from '@/components/components/Infobar'
import Navbar from '@/components/components/Navbar'
import Service from '@/components/components/Service'
import Team from '@/components/components/Team'
import Testamonial from '@/components/components/Testamonial'
import React from 'react'

const Home = () => {
    return (
        <div className='overflow-y-hidden relative'>
            <div className=''>
                <Navbar />
            </div>
            <Hero />
            <AboutUs />
            <Service/>
            <Infobar/>
            <Team/>
            {/* <Testamonial/> */}
            <Footer/>
        </div>
    )
}

export default Home
