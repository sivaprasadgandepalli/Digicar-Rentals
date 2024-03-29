import "./status.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
export default function Status() {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    setResult("");
    e.preventDefault();
    // validating data
    if (!name || !email || !subject || text?.length < 10) {
      toast.error("Please verify your inputs!", {
        position: "top-center"
      });
    }
    else {
      toast.success("Feeback submitted.Thank You !", {
        position: "top-center"
      });
      setEmail("");
      setName("");
      setSubject("");
      setText("");
      setResult("");
    }
  }
  return (
    <div className="container items-center text-center mb-5" id="App">
      <div className='introImg text-center row py-4 w-full mb-3'>
        <div className='col-md-12'>
          <h2 className='text-3xl mb-1'>Feedback</h2>
          <div className='flex items-center justify-center'>
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item >
                <Link to="/statusPage">Feedback</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="form__container bg-[#99f6e4]">
        <div className="form__controls">
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            className="input__subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="text">Text</label>
          <textarea
            rows="5"
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <ToastContainer />
        <div className="form__controls">
          <button className=" btn btn-success" id="button">Send Feedback</button>
        </div>
      </form>
    </div>
  );
}