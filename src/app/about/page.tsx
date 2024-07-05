'use client'
import React from 'react'
import Image from 'next/image'
import about1 from './../../../public/images/about1.jpg'
import about2 from './../../../public/images/about2.jpg'
import about3 from './../../../public/images/about3.jpg'
import about4 from './../../../public/images/about4.jpg'
import about5 from './../../../public/images/about5.jpg'
import employee from './../../../public/images/employee.jpg'
import emp1 from './../../../public/images/emp1.jpg'
import emp2 from './../../../public/images/emp2.jpg'
import roadmap from './../../../public/images/roadmap.png'
import arrow from './../../../public/images/arrow.svg'
import '.././globals.css'
import '../../styles/about.css'
import { SlidingCards } from '../../components/transitions/SlidingCards'
import { motion } from "framer-motion";

function Page() {
  return (
    <>
      <div className="container mx-auto mt-10 px-8 pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-1">
          <div className='flex flex-col items-center justify-center md:p-10'>
            <Image src={arrow} alt="arrow" className="absolute top-16 left-1/3 hidden md:block"/>
            <h1 className='text-3xl md:text-5xl font-bold my-3'>We are a Leading Web Development Agency</h1>
            <p>At our agency, we specialize in crafting high-quality web solutions tailored to your business needs. Our team of experienced professionals is dedicated to delivering innovative and scalable solutions that drive success.</p>
          </div>

          <div className='hidden md:block px-10'>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex items-center">
                <SlidingCards delay={0.5}>
                  <Image src={about1} alt="about-img1" className='img-card'/>
                </SlidingCards>
              </div>

              <div className="flex flex-col items-center justify-center gap-10">
                <SlidingCards delay={0.7}>
                  <Image src={about2} alt="about-img1" className='img-card'/>
                </SlidingCards>
                <SlidingCards delay={0.9}>
                  <Image src={about3} alt="about-img1" className='img-card'/>
                </SlidingCards>
              </div>

              <SlidingCards delay={1}>
                <div className="flex flex-col items-center gap-10">
                  <Image src={about4} alt="about-img1" className='img-card'/>
                  <Image src={about5} alt="about-img1" className='img-card'/>
                  <div className='none-card'/>
                </div>
              </SlidingCards>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 md:p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 px-1">
          <div className='order-2 flex flex-col justify-center'>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ 
                opacity: 1,
                x: 0, 
                transition: { duration: 1 } }}
              viewport={{ once: true }} >
              <p className='text-3xl md:text-5xl font-bold mb-5'>Our Vision & Mission</p>
            </motion.div>
            <p>Our vision is to be a global leader in web development, consistently pushing the boundaries of innovation and technology. Our mission is to empower businesses by providing top-notch web solutions that enhance their digital presence and drive growth.</p>
            <p>We are committed to delivering excellence through our expertise, creativity, and dedication to client satisfaction. Our approach is customer-centric, ensuring that each project is tailored to meet the unique needs and goals of our clients.</p>
          </div>
          <div className='order-1'>
            <Image src={roadmap} alt="roadmap-img" className="h-96 w-full object-contain"/>
          </div>
        </div>
      </div>

      <div className="container px-10 mx-auto my-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ 
            opacity: 1,
            x: 0, 
            transition: { duration: 1 } }}
          viewport={{ once: true }} >
          <h1 className='text-4xl text-center my-3 font-bold md:text-5xl'>Our Team</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-3 my-5">
          <div className='border-2 bg-emarald-900 flex flex-col justify-center items-center p-5 btns'>
            <Image src={emp1} alt="employee-img" className='rounded-full emp-imgs border-2 object-cover'/>
            <p className="font-bold">Ansil</p>
            <p>Lead Designer</p>
          </div>
          <div className='border-2 bg-emarald-900 flex flex-col justify-center items-center p-5 btns'>
            <Image src={emp2} alt="employee-img" className='rounded-full emp-imgs border-2 object-cover'/>
            <p className="font-bold">Edvin</p>
            <p>Senior Developer</p>
          </div>
          <div className='border-2 bg-emarald-900 flex flex-col justify-center items-center p-5 btns'>
            <Image src={employee} alt="employee-img" className='rounded-full emp-imgs border-2'/>
            <p className="font-bold">Alice Johnson</p>
            <p>Marketing Specialist</p>
          </div>
        </div>
        <hr className="w-1/2 mx-auto border-t-2 border-zinc-600"/>

        <div className="contact-us mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
        <p className="md:w-2/3 mx-auto my-4">Contact us today to discuss your requirements and get a free quote.</p>
        <a href="/contact" className="inline-block bg-purple-600 text-white py-3 px-6 rounded-lg mt-4">Get in Touch</a>
      </div>
      </div>
    </>
  )
}

export default Page
