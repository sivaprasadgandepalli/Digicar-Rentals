import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0c3f] text-white">
      <div className='container pl-5 pt-5'>
        <div className='row'>
          <div className='col-md-3 mb-5 lg:mb-3'>
            <h2 className='text-2xl font-bold mb-3'><span className='text-blue-600'>Digi</span>Car</h2>
            <p className='text-justify text-gray-500 pr-5'>
              Digicar is a solution whose time has come, as a service offered to the
              customer at a time when they need it: accidents or breakdowns.
            </p>
            <div className='flex gap-2 mt-3'>
              <FaFacebookSquare className='h-8 w-8'/>
              <FaTwitterSquare className='h-8 w-8'/>
              <FaInstagramSquare className='h-8 w-8'/>
              <FaLinkedin className='h-8 w-8'/>
            </div>
          </div>
          <div className='col-md-3 mb-5 lg:mb-3'>
            <ul className='flex flex-col gap-2'>
              <li><h2 className='mb-3 '>Useful Links</h2></li>
              <li className='text-gray-500'><Link to='/'>Home</Link></li>
              <li className='text-gray-500'><Link to='/ViewCars'>Vehicle Fleet</Link></li>
              <li className='text-gray-500'><Link to='/contact'>Contact Us</Link></li>
              <li className='text-gray-500'><Link to='/statusPage'>Feedback</Link></li>
            </ul>
          </div>
          <div className='col-md-3 mb-5 lg:mb-3'>
            <ul className='flex flex-col gap-2'>
              <li><h2 className='mb-3 '>Address</h2></li>
              <li className='text-gray-500 flex items-start gap-1'><MdLocationPin className='h-6 w-6'/><span>1-380,Kakinada,Andhra Pradesh,533435</span></li>
              <li className='text-gray-500 flex items-start gap-1'><FaPhoneAlt className=''/><span>+91 9392471528</span></li>
              <li className='text-gray-500 flex items-center gap-1'><MdMail className='h-6 w-6'/><span>sivaprasadgandepalli@gmail.com</span></li>
            </ul>
          </div>
          <div className='col-md-3 lg:mb-3'>
            <ul className='flex flex-col gap-2'>
              <li><h2 className='mb-3 '>News Letter</h2></li>
              <li className='text-gray-500'>Subscribe to our news letter for more updates.</li>
              <li className='text-gray-500 flex gap-1 flex flex-wrap'><input type='email'className='pl-2 py-1' placeholder='Enter your email'/>
              <input type='button' className='bg-blue-600 text-white py-1 px-2' value='Sign Up'/></li>
              
            </ul>
          </div>
        </div>
        <hr className='mt-3'/>
        <div className='row'>
          <div className='flex items-center justify-around py-2 text-gray-200 text-center flex-wrap-reverse'>
            <p>copyright@ 2024 Digicar All rights reserved</p>
            <p>Privacy policy ,Terms & conditions</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
