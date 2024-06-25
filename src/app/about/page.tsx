'use client'
import React from 'react'
import Image from 'next/image'
import image from './../../../public/images/deploy.jpg'
import employee from './../../../public/images/employee.jpg'
import roadmap from './../../../public/images/roadmap.png'
import arrow from './../../../public/images/arrow.svg'
import '.././globals.css'
import '../../styles/about.css'
import { SlidingCards } from '../../components/transitions/SlidingCards'

import { motion } from "framer-motion";
function page() {
  return (
    <>
    <div className="container mx-auto mt-10 px-8 pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  px-1">
            <div className='flex flex-col items-center justify-center md:p-10 '>
<Image src={arrow} alt="arrow" className="absolute top-16 left-72  hidden md:block"/>
                <h1 className='text-3xl md:text-5xl font-bold my-3'>We are Web Development Agency.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rerum autem aliquid laborum sint soluta animi sed consequuntur voluptatem, in nostrum incidunt blanditiis recusandae! Eligendi, magnam neque. Quisquam, sed enim.</p>
            </div>

            <div className='hidden md:block px-10'>
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    <div className="flex items-center">
         
<SlidingCards delay={0.5}>
                        <Image src={image} alt="about-img1" className='img-card'/>
</SlidingCards>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-10">
                    <SlidingCards delay={0.7}>
                        <Image src={image} alt="about-img1" className='img-card'/>
</SlidingCards>
<SlidingCards delay={0.9}>

                        <Image src={image} alt="about-img1" className='img-card'/>
                        </SlidingCards>

                    </div>

                    <SlidingCards delay={1}>
                    <div className="flex flex-col items-center gap-10">
                        <Image src={image} alt="about-img1" className='img-card'/>
                        <Image src={image} alt="about-img1" className='img-card'/>
                        <div className='none-card'/>
                    </div>
</SlidingCards>
                </div>
            </div>
        </div>
    </div>

    <div className="container mx-auto  px-8 md:p-5">
<div className="grid grid-cols-1 md:grid-cols-2  px-1">

        <div className='order-2 flex flex-col justify-center'>
        <motion.div 
        initial={{ opacity: 0, x:-50 }}
        whileInView={{ 
            opacity: 1,
            x: 0, 
            transition: { duration: 1 } }}
            viewport={{ once: true }} >
        <p className='text-3xl md:text-5xl font-bold mb-5'>Our Vision & Mission </p>
        </motion.div>
        
       
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat aut dolorem, adipisci, nostrum facilis at est in quae sunt expedita numquam quidem, molestias libero? Quos voluptatem magnam et culpa fuga.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat aut dolorem, adipisci, nostrum facilis at est in quae sunt expedita numquam quidem, molestias libero? Quos voluptatem magnam et culpa fuga.</p>
        </div>
<div className='order-1'>
    <Image src={roadmap} alt="roadmap-img" className="h-96 w-full object-contain"/>
</div>
</div>

    </div>

    
        <div className="container px-10 mx-auto my-10">
        <motion.div 
        initial={{ opacity: 0, x:-50 }}
        whileInView={{ 
            opacity: 1,
            x: 0, 
            transition: { duration: 1 } }}
            viewport={{ once: true }} >
        <h1 className='text-4xl text-center my-3 font-bold md:text-5xl'>Our Team</h1>
        </motion.div>

    <div className=" grid grid-cols-1 md:grid-cols-3 gap-8  p-3 my-5">
        <div className=' border-2 bg-emarald-900 flex flex-col justify-center items-center p-5  btns'>
            <Image src={employee} alt="employee-img" className='rounded-full emp-imgs border-2'/>
            <p>Designer</p>
            <p>name</p>
        </div>
        <div className=' border-2 bg-emarald-900 flex flex-col justify-center items-center  p-5 btns'>
        <Image src={employee} alt="employee-img" className='rounded-full emp-imgs border-2'/>
            <p>Developer</p>
            <p>name</p>
        </div>
        <div className=' border-2 bg-emarald-900 flex flex-col justify-center items-center  p-5 btns'>
        <Image src={employee} alt="employee-img" className='rounded-full emp-imgs border-2'/>
            <p>Marketer</p>
            <p>name</p>
        </div>
        </div>
        <hr className="w-1/2 mx-auto border-t-2 border-zinc-600"/>
    </div>
    </>
  )
}

export default page