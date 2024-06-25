'use client'
import React from 'react';
import Image from "next/image";
import './globals.css';
// import design from '../../public/images/design.jpg';
// import develop from '../../public/images/develop.jpg';
// import deploy from '../../public/images/deploy.jpg';
import webdevelopment from '../../public/images/webdevelopment.png';
import seo from '../../public/images/seo.png';
import marketing from '../../public/images/digitalmarketing.png';
import logodesign from '../../public/images/logodesign.png';
import insta from '../../public/images/insta.png';
import linkedin from '../../public/images/linkedin.png';
import whatsapp from '../../public/images/whatsapp.png';
import vision1 from '../../public/images/vision1.jpg';
import vision2 from '../../public/images/vision2.jpg';

import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiGlobalFill } from "react-icons/ri";

import Link from "next/link";
import { motion } from "framer-motion";

import Hero from '@/components/Hero'

const services = [
  { id: 1, title: "Web Development", image: webdevelopment },
  { id: 2, title: "SEO Optimization", image: seo },
  { id: 3, title: "Digital Marketing", image: marketing },
  { id: 4, title: "Logo Designing", image: logodesign },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero/>
        
      {/* Second Section */}
      <article>
    <div className="text-white">
  {/* Hero section */}
  <div className="container mx-auto py-12 px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


 {/* left part (image part) */}
 <div className="order-2 md:order-1 grid grid-cols-2 gap-2 md:gap-0 p-10" >
        {/* First image */}
        <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
 transition={{
   duration: 0.8,
   delay: 0.5,
   ease: [0, 0.71, 0.2, 1.01]
 }}
 variants={{
  visible: { opacity: 1, scale: 1},
  hidden: { opacity: 0, scale: 0.5}
}}
>
        <div className="hero-box w-48 h-96 bg-gray-300 flex items-center justify-center shadow-2xl shadow-violet-950">
          <Image src={vision1} alt="Image 1" className="w-full h-96 hero-box object-cover" />
        </div>
</motion.div>


        {/* Second image */}
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
 transition={{
   duration: 0.8,
   delay: 0.5,
   ease: [0, 0.71, 0.2, 1.01]
 }}
 variants={{
  visible: { opacity: 1, scale: 1},
  hidden: { opacity: 0, scale: 0.5}
}}
>
        <div className="hero-box w-40 h-80 bg-gray-300 flex items-center justify-center mt-10 md:mt-0 shadow-2xl shadow-violet-950">
          <Image src={vision2} alt="Image 2" className="w-full h-80 hero-box object-cover" />
        </div>
</motion.div>

      </div>


      {/* right part (text part) */}
      <div className="order-1 md:order-2 bg-slate-700 bg-opacity-50 backdrop-blur-md me-auto p-5 rounded-3xl md:bg-transparent w-fill">
        <h1 className="text-2xl md:text-5xl mb-4">
        We Make <span className="text-5xl md:text-7xl font-bold ">Your Business </span> Visible
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, dolore quia dolor beatae optio labore. Reprehenderit, expedita minima. Fuga necessitatibus a numquam ipsa accusamus sint placeat corporis dignissimos maiores blanditiis.</p>
        <Link href="/about" className="bg-white text-black p-1  inline-block w-42  btns my-4 ">
              <p className="border-2 border-blue-900 p-1 px-2 btns flex justify-center ">
              Know more
              </p>
              </Link>
      </div>

     
    </div>
  </div>
</div>
    </article>

      {/* Services Section */}
      <article>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center px-3">
            <div className="text-xl md:text-4xl">
              Some of <br /> <span className="text-4xl md:text-6xl font-bold">Our Services</span>
            </div>
            <div className="flex justify-end text-start">
              <div className="flex justify-center w-16 bg-transparent border-2 rounded-3xl btns">
                <Link href="/services" className="main-button md:hover:scale-125 my-2 bg-white text-neutral-900 px-3 py-1 inline-block rounded-3xl">
                  <MdArrowOutward className="md:hover:rotate-45" />
                </Link>
              </div>
            </div>
          </div>

          <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-20">
            {services.map((item) => (
              <div className="service-box relative h-64 md:h-80 w-40 md:w-52 mx-auto" key={item.id}>
                <Image src={item.image} alt={item.title} className="w-full h-64 md:h-80 object-cover service-box md:opacity-55 md:hover:opacity-100" />
                <p className="absolute bottom-0 left-0 w-full h-auto flex justify-center items-end text-white py-2 rounded-xl service_img_hover">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <hr className="w-1/2 mx-auto border-t-2 border-zinc-600" />

      {/* Contact Section */}
      <article>
        <div className="container mx-auto py-8 px-4 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-3">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold">
                We are just a message away! <br />Contact us <span className="text-5xl md:text-6xl">Today</span>.
              </h2>
              <div className="flex justify-center w-40 bg-transparent border-2 rounded-3xl btns my-5">
                <Link href="/contact" className="md:hover:scale-105 my-2 bg-white text-neutral-900 p-2 inline-block rounded-3xl btns">
                  Send a Message
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5 items-start">
              <div className="flex gap-3 items-center">
                <RiGlobalFill className="text-2xl" />
                <Image src={insta} alt="insta-icon" className="w-9 md:w-8 md:hover:scale-125" />
                <Image src={linkedin} alt="linkedin-icon" className="w-9 md:w-8 md:hover:scale-125" />
                <Image src={whatsapp} alt="whatsapp-icon" className="w-9 md:w-8 md:hover:scale-125" />
              </div>
              <div className="flex flex-col items-center">
                <p className="flex gap-3 items-center"><FaPhoneAlt /> +91 8129-77-97-13</p>
                <p>OR</p>
                <p className="flex gap-3 items-center"><FaPhoneAlt /> +91 8129-77-97-13</p>
              </div>
              <p className="flex gap-3 items-center"><IoLocationOutline className="text-2xl" />Thrissur, Kerala, India</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
