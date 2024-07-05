'use client'
import React from 'react';
import Image from "next/image";
import '../app/globals.css';
import design from '../../public/images/design.jpg';
import develop from '../../public/images/develop.jpg';
import deploy from '../../public/images/deploy.jpg';




import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    
    <div className="container mx-auto py-12 px-4 text-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left part (text part) */}
      <div className="absolute md:relative order-2 md:order-1 bg-slate-700 bg-opacity-50 backdrop-blur-sm mr-4 p-5 rounded-3xl md:bg-transparent h-96 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 hero-font">
            Welcome to <br/>
            <span className="text-purple-400 md:text-purple-700">
            CONVEB
              </span> 
          </h1>
          <p className="text-lg mb-6">
          Transforming your ideas into reality with cutting-edge web development, design, and marketing solutions. Let&apos;s elevate your business to new heights.
          </p>
          <Link href="/contact" className="bg-white text-black p-1 inline-block w-56 btns">
            <p className="border-2 border-blue-900 p-1 btns flex justify-center">
              Lets Work Together
            </p>
          </Link>
        </motion.div>
      </div>

      {/* Right part (image part) */}
      <div className="order-1 md:order-2 grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-0">
        {[design, develop, deploy].map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5 + index * 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className={`hero-box w-full md:w-36 h-96 bg-gray-300 flex items-center justify-center ${index === 1 ? 'mt-10' : ''} shadow-2xl shadow-violet-950`}>
              <Image src={image} alt={`Image ${index + 1}`} className="w-full md:w-36 h-96 hero-box object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Hero