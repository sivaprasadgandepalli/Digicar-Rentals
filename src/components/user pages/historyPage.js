import Table from 'react-bootstrap/Table';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { RotatingLines } from 'react-loader-spinner';
export default function History() {
  const location = useLocation();
  const uname = {"uname":localStorage.getItem("name")};
  const [order, setOrder] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const currentUser = localStorage.getItem('name');
  console.log(uname)
  useEffect(() => {
    setLoading(true);
    axios.post('https://wide-eyed-long-johns-fawn.cyclic.app/myRecords', uname).then((res) => {
      setOrder(res.data);
      console.log(order)
      setLoading(false);
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
              <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item >
                <Link to="/historyPage">history</Link>
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
              height="64"
              width="64"
              color="grey"
              strokeWidth="5"
              animationDuration="1.50"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            /> :
            order?.map((item, i) => {
              return (
                <tr>
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