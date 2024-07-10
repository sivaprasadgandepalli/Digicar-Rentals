import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from 'react-router-dom';
import Home from '../home';
import Contact from './contact';
import ViewCars from './ViewCars';
import Status from './statusPage';
import History from './historyPage';
import CarDetails from '../singleCar';
import BookCar from '../booking';
import Payment from '../../payment';
import LoginPage from '../loginPage';
import SignupPage from '../signUp';
import Navbar from '../navbar';
import Footer from './Footer';
import PrivateRoute from '../PrivateRoute';
import { MutatingDots } from 'react-loader-spinner';
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
      {loading ? <div className='h-screen w-full flex items-center justify-center bg-black'>
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#910673"
          secondaryColor="#060891"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
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
