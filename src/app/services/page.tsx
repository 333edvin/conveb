'use client'
import React from 'react'
import '../../styles/service.css'

import figma from '../../../public/images/figma.jpg'
import webdev from '../../../public/images/develop.png'
import seoserv from '../../../public/images/serv-seo.png'
import marketing from '../../../public/images/market.png'
import servlogo from '../../../public/images/servlogo.png'
import Image from 'next/image'
import { Cards } from '@/components/transitions/Cards'

const services = [
  { id: 1, title: "Designing", photo: figma },
  { id: 2, title: "Development", photo: webdev },
  { id: 3, title: "SEO", photo: seoserv },
  { id: 4, title: "Marketing", photo: marketing },
]

function Page() {
  return (
    <div className="container px-8 mx-auto mt-28">
    <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
<p className="md:w-2/3 my-4">
  At Conveb, we specialize in crafting high-quality, custom web solutions tailored to meet your business needs. Our services include responsive website design, robust web application development, SEO optimization, and ongoing maintenance and support. Whether you&apos;re a startup looking to establish an online presence or an established business seeking to enhance your digital footprint, our team of experts is here to help you achieve your goals with innovative and effective strategies.
</p>
      <Cards>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-20">
          {services?.map((item) => (
            <div className="serv-cards flex items-end justify-center md:w-52 mx-auto" key={item.id}>
              <Image src={item.photo} alt="card-img" className="object-cover h-full rounded-xl serv-img md:opacity-70" />
              <p className="font-bold absolute trns-text my-3 border-2 px-3 md:px-4">{item.title}</p>
            </div>
          ))}
        </div>
      </Cards>

      <div className="why-choose-us mt-20">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
        <p className="md:w-2/3 my-4">We offer top-notch services tailored to your needs. Our team of experts is dedicated to delivering high-quality solutions that drive success for your business.</p>
        <ul className="list-disc pl-5 md:pl-10 my-4">
          <li>Customer-Centric Approach</li>
          <li>Timely Delivery</li>
          <li>Competitive Pricing</li>
        </ul>
      </div>

      

      <div className="contact-us mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
        <p className="md:w-2/3 mx-auto my-4">Contact us today to discuss your requirements and get a free quote.</p>
        <a href="/contact" className="inline-block bg-purple-600 text-white py-3 px-6 rounded-lg mt-4">Get in Touch</a>
      </div>
    </div>
  )
}

export default Page
