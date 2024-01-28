import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import user from '../images/revies/user.png'
import Modal from 'react-bootstrap/Modal';
const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Fleet',
    href: '/ViewCars',
  },
  {
    name: 'History',
    href: '/historyPage'
  },
  {
    name: 'Feedback',
    href: '/statusPage',
  },
  {
    name: 'Contact',
    href: '/contact',
  }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { isLogin, logout } = useAuth();
  const navigate=useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout=(e)=>{
    e.preventDefault();
    logout();
    setShow(false);
    navigate('/loginPage');
    
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const [users, setUsers] = useState([{}]);
  let userInfo = {};
  useEffect(() => {
    axios.get("https://wide-eyed-long-johns-fawn.cyclic.app/userData").
      then((res) => setUsers(res.data)
      );
    
  }, [])
  const find = () => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].uname === localStorage.getItem('name')) {
        userInfo = users[i];
        break;
      }
    }
  }
  find();
  return (
    <div className="relative w-full bg-white shadow-xl py-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="">
          <h2 className='text-2xl font-bold'><span className='text-blue-600'>Digi</span>Car</h2>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}

                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:inline-block">

          {/* <button
            type="button"
            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

            onClick={handleShow}>
            profile
          </button> */}
          <div className=' bg-green-900 h-12 rounded-full w-12 text-center text-white text-3xl  cursor-pointer' onClick={handleShow}>
            {isLogin() ? localStorage?.getItem('name')?.slice(0,1):"c"}
          </div>

          {/* modal */}
          <Modal show={show} onHide={handleClose} animation={false}
            size="sm"
            className='rounded-sm'
          >
            
            <div className=''>
              <div className='w-full h-24 bg-[#002147]'></div>
              <div className='w-full flex relative flex-col justify-center items-center gap-3 h-48'>
                <img src={user} className='w-24 h-24 absolute rounded-full -top-12' />
                <div className='text-justify space-y-2 mt-4'>
                  <h3><span className='font-bold mr-1'>Name:</span>{localStorage.getItem('name')}</h3>
                  <h3><span className='font-bold mr-1'>Email:</span>{userInfo?.email}</h3>
                </div>
                <div className='flex items-start justify-between gap-3'>
                  <Button variant="dark" className='bg-dark'>
                    {isLogin() ? <Link to='/loginPage' onClick={handleLogout}>LogOut</Link> : <Link to='/loginPage' onClick={handleClose}>Login</Link>}
                  </Button>
                  <Button variant="danger" className='bg-danger' onClick={handleClose}>cancel</Button>
                </div>
              </div>
            </div>

          </Modal>
          {/* modal */}

        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">


                    <span className="font-bold">DevUI</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>

                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">

                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    {isLogin() ? <Link to='/loginPage' onClick={logout}>LogOut</Link> : <Link to='/loginPage'>Login</Link>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
