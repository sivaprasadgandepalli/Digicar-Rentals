import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from 'react-router-dom';
import Home from '../pages/home';
import Contact from '../pages/contact';
import ViewCars from './ViewCars';
import Status from './statusPage';
import History from './historyPage';
import CarDetails from '../components/singleCar';
import BookCar from '../components/booking';
import Payment from './payment';
import LoginPage from './loginPage';
import SignupPage from '../components/signUp';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import PrivateRoute from '../components/PrivateRoute';
import { ColorRing } from 'react-loader-spinner';
function Dashboard() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, [location])
  return (
    <div className='relative'>
      {loading ? <div className='h-screen w-full flex items-center justify-center bg-slate-950'>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div> :
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ViewCars' element={<PrivateRoute>
              <ViewCars />
            </PrivateRoute>} />
            <Route path='/historyPage' element={<PrivateRoute>
              <History />
            </PrivateRoute>} />
            <Route path='/statusPage' element={<PrivateRoute>
              <Status />
            </PrivateRoute>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/singleCar' element={<PrivateRoute>
              <CarDetails />
            </PrivateRoute>} />
            <Route path='/booking' element={<BookCar />} />
            <Route path='/payments' element={<Payment />} />
            <Route path='/loginPage' element={<LoginPage />} />
            <Route path='/signUp' element={<SignupPage />} />

          </Routes>
          <div className='mt-14'>
            <Footer />
          </div>
        </>
      }
    </div>
  );
}

export default Dashboard;
