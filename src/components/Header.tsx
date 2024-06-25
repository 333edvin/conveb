'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/logo.png'
import head from '../../public/images/head-logo.png'

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <nav className="bg-slate-900 p-1 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex">
            <Image src={head} alt="logo" className="w-12 object-contain"/>
            <Image src={logo} alt="logo" className="w-24 object-cover"/>
          </div>
          <div className="sm:hidden">
            <button onClick={toggleDrawer} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex space-x-4">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/about" className="text-white">About</Link>
            <Link href="/services" className="text-white">Services</Link>
            <Link href="/contact" className="text-white">Contact</Link>
          </div>
        </div>
      </nav>
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden`}>
        <div className="bg-white w-64 h-full shadow-xl absolute right-0">
          <div className="p-4">
            <button onClick={toggleDrawer} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col justify-between h-full pb-10">
            <ul className="mt-4">
              <li className="p-4 border-b">
                <Link href="/" className="text-gray-700" onClick={closeDrawer}>Home</Link>
              </li>
              <li className="p-4 border-b">
                <Link href="/about" className="text-gray-700" onClick={closeDrawer}>About</Link>
              </li>
              <li className="p-4 border-b">
                <Link href="/services" className="text-gray-700" onClick={closeDrawer}>Services</Link>
              </li>
              <li className="p-4">
                <Link href="/contact" className="text-gray-700" onClick={closeDrawer}>Contact</Link>
              </li>
            </ul>
            <div className='text-black p-3 my-5 text-center text-xs'>
              <p style={{borderBottom:"1px solid black"}}>CONTACT INFO</p>
              <p>&nbsp;Thrissur, Kerala, India</p>
              <p>&nbsp;info@conveb.com</p>
              <br/>
              <p>&nbsp;+91 8129 779 713</p>
              <p>OR</p>
              <p>&nbsp;+91 8129 779 713</p>
              <div className='d-flex gap-3 justify-center'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
