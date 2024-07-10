import Table from 'react-bootstrap/Table';
import { useLocation, useNavigate } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
export default function History() {
  const location = useLocation();
  const [order, setOrder] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const currentUser = localStorage.getItem('name');
  useEffect(() => {
    setLoading(true);
    axios.get('https://digicar-rentals-backend.onrender.com/getBookingData').then((res) => {
      if (res.status === 200) {
        const filteredData = res.data.filter(item => item.uname === currentUser);
        setOrder(filteredData);
        console.log(filteredData);
        setLoading(false);
      }
    }).catch((e) => {
      console.log(e);
    })
  }, [])
  return (
    <div className="container items-center text-center min-h-screen">
      <div className='introImg text-center row py-4 mb-3'>
        <div className='col-md-12'>
          <h2 className='text-3xl mb-1'>History</h2>
          <div className='flex items-center justify-center'>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/historyPage">
                history
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <Table striped responsive className='' >
        <thead className='bg-dark text-white'>
          <tr>
            <th>Sr.No</th>
            <th>UserName</th>
            <th>Phone</th>
            <th>FromDate</th>
            <th>ToDate</th>
            <th>CarRgd-Number</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <RotatingLines
            visible={true}
            height="44"
            width="44"
            color="grey"
            strokeWidth="3"
            strokeColor='grey'
            animationDuration="1.50"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          /> :
            order.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.uname}</td>
                  <td>{item.phone}</td>
                  <td>{item.Fdate}</td>
                  <td>{item.Tdate}</td>
                  <td>{item.Cnum}</td>
                  <td>{item.price}</td>
                  <td>Placed</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
}