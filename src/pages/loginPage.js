import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/auth';
import { toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function LoginPage() {
    const width = {
        width: '100%'
    };
    const { login } = useAuth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const [logData, setLogData] = useState({ "email": "", "pwd": "" });
    const [usersData, setUsersData] = useState([{}]);
    const [errPwd, setErrPwd] = useState("");
    const [erremail, setErremail] = useState("");
    const handleChange = (e) => {
        setLogData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }
    useEffect(() => {
        axios.get("https://digicar-rentals-backend.onrender.com/userData").then((res) => setUsersData(res.data));
        console.log(usersData);
    }, [])
    const checkUser = (e) => {
        e.preventDefault();
        const userDet = usersData.find((obj, key) => {
            return obj.email == logData.email && obj.pwd == logData.pwd;
        })
        if (userDet?.email === logData.email && userDet?.pwd === logData.pwd) {
            login(userDet.uname);
            navigate("/", { replace: true });

        }
        else {
            handleShow();
        }
    }
    return (
        <div className="container min-h-screen">
            <div className="row mt-5">
                <div className="col-md-4">
                </div>
                <div className="col-md-4 bg-light px-5 py-3">

                    <Form className='mt-4'>
                        <h3 className='text-center pb-3 text-3xl font-bold antialiased'>Sign In</h3>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><MdEmail /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                    name='email' onChange={handleChange}
                                    required />
                            </InputGroup>

                            <Form.Text style={{ color: "red" }}>{erremail}</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><FaLock /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                    name='pwd' onChange={handleChange}
                                    type='password'
                                    required />
                            </InputGroup>

                            <Form.Text style={{ color: "red" }}>{errPwd}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Warning</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Invalid username/password.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="bg-danger" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Button type="submit" className='bg-primary btn-block mb-1' style={width} onClick={checkUser}>
                            Submit
                        </Button>
                        <p>Don't have an account? <Link to='/signUp' style={{ color: "red" }}>Register</Link></p>
                    </Form>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        </div>
    )
}
