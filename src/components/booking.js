import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DateObject from "react-date-object";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Payment from '../payment';
import CarDetails from './singleCar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function BookCar() {
    const [uname, setUname] = useState(localStorage.getItem("name"));
    const [phone, setPhone] = useState("");
    const [pickTime, setPicktime] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [Fdate, setFdate] = useState("");
    const [Tdate, setTdate] = useState("");
    const price = location.state.data.price;
    const Cnum = location.state.data.R_num;
    var pdata = { uname, phone, pickTime, Fdate, Tdate, price, Cnum };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // validating data
        if (uname === "" || phone === "" || pickTime === "" || Fdate === "" || Tdate === "") {
            toast.error("please verify your inputs!", {
                position: "top-left"
              });
            return null;
        }
        else {
            axios.post('https://wide-eyed-long-johns-fawn.cyclic.app/bookCar',pdata)
            .then((res) => console.log(res.status));
            toast.success("Order placed successfully!", {
                position: "top-center"
              });
        }
    }
    return (
        <div className="container-fluid mb-5">
            <h2 className='font-bold text-center text-2xl my-3 hover:underline  delay-400'>Car Rental Form</h2>

            <div className='row '>
                <div className='col-md-1'></div>
                <div className='col-md-4 p-3 border-2'>
                    <div className='bg-slate-500'>
                        <img src={location.state.data.img} className=' h-64' />

                        <table className="table table-borderless pl-2 bg-slate-500">
                            <tbody>
                                <tr>
                                    <th>Number Plate:</th>
                                    <td>{location.state.data.R_num}</td>
                                </tr>
                                <tr>
                                    <th>Car Modal:</th>
                                    <td>{location.state.data.name}</td>
                                </tr>
                                <tr>
                                    <th>Company:</th>
                                    <td>{location.state.data.company}</td>
                                </tr>
                                <tr>
                                    <th>Price:</th>
                                    <td>{location.state.data.price}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-md-6 bg-[#282828]'>
                    <Form className=' text-white  p-5' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                            <div className='row'>

                                <div className='col-md-6'>
                                    <Form.Label>Full Name*</Form.Label>
                                    <Form.Control type="Full Name" value={uname} placeholder="Enter Full name"/>
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label>Phone Number*</Form.Label>
                                    <Form.Control type="number" placeholder="Enter phone number" onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                {/* <div className='col-md-4'>
                                    <Form.Label>Email address*</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                                </div> */}

                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <div className='row'>

                                <div className='col-md-6'>
                                    <Form.Label>From Date*</Form.Label>
                                    <Form.Control type="date" placeholder="Enter From Date" onChange={(e) => setFdate(e.target.value)} />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label>To Date*</Form.Label>
                                    <Form.Control type="date" placeholder="Enter To Date" onChange={(e) => setTdate(e.target.value)} />
                                </div>

                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <div className='row'>

                                <div className='col-md-6'>
                                    <Form.Label>Pick-up time*</Form.Label>
                                    <Form.Control type="time" placeholder="Enter pick-up time" onChange={(e) => setPicktime(e.target.value)} />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label>Total Price$*</Form.Label>
                                    <Form.Control type="" placeholder=" " id='price' readOnly value={location.state.data.price} />
                                </div>

                            </div>
                        </Form.Group>

                        <div className='row'>

                            <div className='col-md-6'>
                                <Button className='bg-danger' type="submit" onClick={() => navigate("/")}>
                                    cancel booking
                                </Button>
                            </div>
                            <div className='col-md-6'>
                                <ToastContainer/>
                                <Button className='bg-primary' type="submit">
                                    Submit
                                </Button>
                            </div>

                        </div>
                    </Form>
                </div>
                <div className='col-md-1'></div>
            </div>
        </div>
    );
}