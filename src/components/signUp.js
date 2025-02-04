import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignupPage() {
  const width = {
    width: '100%'
  };
  const [msg,setMsg]=useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [RegData, setRegData] = useState({
    uname: "",
    email: "",
    pwd: ""
  });
  const handleChange = (e) => {
    setRegData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

  }
  const postSubmit = (e) => {
    e.preventDefault();
    if (RegData.uname !== "" && RegData.email !== "" && RegData.pwd !== "") {
      axios.post('https://digicar-rentals-backend.onrender.com/postUser', RegData)
        .then((res) => console.log(res.data));
      navigate('/loginPage');
      setMsg('Account created successfully.Now login to your account');
      handleShow();
      setRegData({
        uname: "",
        email: "",
        pwd: ""
      });
    }
    else {
      setMsg('Please fill required inputs')
      handleShow();
    }
  }

  return (
    <div className="container min-h-screen">
      <div className="row ">
        <div className="col-md-4">
        </div>
        <div className="col-md-4 bg-light px-5 py-3 mt-3">
          <Form className='mt-4'>
            <h3 className='text-center pb-3 text-3xl font-bold antialiased'>Create Account</h3>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
                <Form.Control
                  placeholder="username"
                  aria-label="username"
                  aria-describedby="basic-addon1"
                  name='uname' onChange={handleChange} value={RegData.uname} />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><MdEmail /></InputGroup.Text>
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  name='email' onChange={handleChange} value={RegData.email} type='email' required />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaLock /></InputGroup.Text>
                <Form.Control
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  name='pwd' onChange={handleChange} value={RegData.pwd} type='password' required />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
              centered>
              <Modal.Header closeButton>
                <Modal.Title>Notification</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {msg}
              </Modal.Body>
              <Modal.Footer>
                <Button className="bg-danger" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <Button variant="primary" type="submit" className='bg-primary btn-sm mb-1' style={width} onClick={postSubmit}>
              Create Account
            </Button>
            <p>Already have an account? <Link to='/loginPage' style={{ color: "red" }}>Sign In</Link></p>

          </Form>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    </div>
  )
}
