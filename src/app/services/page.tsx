'use client'
import React from 'react'
import '../../styles/service.css'

import figma from '../../../public/images/figma.jpg'
import webdev from '../../../public/images/webdev.png'
import seoserv from '../../../public/images/seo-serv.png'
import marketing from '../../../public/images/marketing.png'
import servlogo from '../../../public/images/servlogo.png'
import Image from 'next/image'
import { Cards } from '@/components/transitions/Cards'

const services = [
  { id: 1, title: "Designing", photo: figma },
  { id: 2, title: "Development", photo: webdev },
  { id: 3, title: "SEO", photo: seoserv },
  { id: 4, title: "Marketing", photo: marketing },
  { id: 5, title: "Logo", photo: servlogo },
]

function Page() {
  return (
    <div className="container px-8 mx-auto mt-28">
      <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
      <p className="md:w-2/3 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi quas reprehenderit numquam velit soluta cupiditate mollitia eveniet ratione consequatur sed praesentium autem, sunt, quis architecto explicabo tempora pariatur nostrum.</p>

        
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
    </div>
  )
}

export default Page
