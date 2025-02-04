import React from 'react'
import { MdAddCall, MdLocationOn } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../styles/pageIntro.css'
export default function Contact() {
  return (
    <div className='container'>
      <div className='introImg text-center row py-4'>
        <div className='col-md-12'>
          <h2 className='text-3xl mb-1'>Contact Us</h2>
          <div className='flex items-center justify-center'>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">
                Contact Us
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7621.462008006035!2d81.96709778604661!3d17.23183398182165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3771497483c021%3A0x1c6f8e2c23b8b470!2sMallisala%2C%20Andhra%20Pradesh%20533435!5e0!3m2!1sen!2sin!4v1706095314505!5m2!1sen!2sin" className='w-full my-3' height='450' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='row pt-3 pb-2 lg:w-[90%] mx-auto'>
        
        <div className='col-md-6 mb-5'>
          <div className='flex flex-col justify-between items-start space-y-8 overflow-hidden h-full'>
            <div className='flex flex-col '>
              <h2 className='font-bold mb-2 text-2xl'>Got A Question?</h2>
              <p className='text-grey mt-2'>I would love to hear from you reach out to me with any comments,suggestions or enquiries and i will be happy to assist you.</p>
            </div>
            <div className='flex flex-col space-y-3 flex-wrap'>
              <div className='flex space-x-2 items-center'>

                <mark className='rounded-full'><MdAddCall /></mark>
                <span>+(939) 2471 528</span>
              </div>
              <div className='flex space-x-2 items-center '>
                <mark className='rounded-full'><IoIosMail /></mark>
                <span>sivaprasadgandepalli@gmail.com</span>
              </div>
              <div className='flex space-x-2 items-center'>

                <mark className='rounded-full'><MdLocationOn /></mark>
                <span>Kakinada,Andhra Pradesh</span>
              </div>
            </div>
            <div className='flex space-x-3'>
              <a href='https://github.com/sivaprasadgandepalli'> <FaGithub fontSize='1.5rem' /> </a>
              <a href='https://www.linkedin.com/in/siva-prasad-gandepalli-830a28212/'> <FaLinkedin fontSize='1.5rem' /> </a>
              <a href='https://www.instagram.com/sivaprasadgandepalli/'> <FaInstagramSquare fontSize='1.5rem' /> </a>
              <a href='https://m.facebook.com/profile.php/?id=100029416506612'> <FaFacebookSquare fontSize='1.5rem' /> </a>
            </div>
          </div>
        </div>

        <div className='col-md-6'>

          <div className=''>
            <h4 className=' px-3 text-xl'>Get in Touch!</h4>
            <Form className=' px-3 py-3'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='Type your message' />
              </Form.Group>
              <Button variant="info" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        
      </div>
    </div>
  )
}
