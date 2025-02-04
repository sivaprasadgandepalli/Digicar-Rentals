import Table from 'react-bootstrap/Table';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner';

const OrdersTable = ({ orders }) => (
  <Table responsive className='lg:w-[90%] mx-auto'>
    <thead className='border-1'>
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
      {orders.map((item, i) => (
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
      ))}
    </tbody>
  </Table>
);

const Loading = () => (
  <div className='flex items-center justify-center'>
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  </div>
);

export default function History() {
  const [order, setOrder] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const currentUser = localStorage.getItem('name');
  useEffect(() => {
    setLoading(true);
    axios.get('https://digicar-rentals-backend.onrender.com/getBookingData').then((res) => {
      if (res.status === 200) {
        const filteredData = res.data.filter(item => item.uname === currentUser);
        setOrder(filteredData);
        setLoading(false);
      }
    }).catch((e) => {
      console.log(e);
      setLoading(false);
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

      <div>
        {loading ? (
          <Loading />
        ) : order && order.length > 0 ? (
          <OrdersTable orders={order} />
        ) : (
          <h2>No order Data found</h2>
        )}
      </div>
    </div>
  );
}


