import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useLocation} from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
export default function Payment(){
    const [show, setShow] = useState(false);
    const navigate=useNavigate();
    const location =useLocation();
    const[name,setName]=useState("");
    const[card,setCard]=useState("");
    const[cvv,setCvv]=useState("");
    const[mon,setMon]=useState("");
    const[year,setYear]=useState("");
    const finalData=location.state.pdata;
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(name===""||card===""||cvv===""||mon===""||year==="")
        {
            alert("Please check your inputs before submit..");
            return null;
        }
        else{
            alert("payment successfully completed!");
            navigate("/historyPage",{state:{finalData}});
        }
    }
    return(
        <div className="container-fluid bg-violet-200 p-5 mt-3">

                <div className='row mt-5'>
                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-8 bg-white '>
                        <div className='bg-dark text-white w-full '>
                            <h2 className='font-bold text-2xl text-center pt-3'>Payment Details</h2>
                            <p className='text-center pb-3'>Complete your payment by filling form</p>
                        </div>
                    <Form className='p-5'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <div className='row'>
                                
                                <div className='col-md-6'>
                                <Form.Label>Name on Card:</Form.Label>
                                <Form.Control type="" placeholder="Card holder name" required onChange={(e)=>setName(e.target.value)} />
                                </div>
                                <div className='col-md-6'>
                                <Form.Label>Card Number:</Form.Label>
                                <Form.Control type="number" placeholder="Enter Card Number" required onChange={(e)=>setCard(e.target.value)}/>
                                </div>
                                
                            </div>
                        </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div className='row'>
                            
                            <div className='col-md-4'>
                            <Form.Label>CVV:</Form.Label>
                            <Form.Control type="" placeholder="ex:311" required onChange={(e)=>setCvv(e.target.value)}/>
                            </div>
                            <div className='col-md-4'>
                            <Form.Label>Expiration:</Form.Label>
                            <Form.Control type="number" placeholder="MM" required onChange={(e)=>setMon(e.target.value)}/>
                            </div>
                            <div className='col-md-4'>
                            <Form.Label>Year</Form.Label>
                            <Form.Control type="number" placeholder="YYYY" required onChange={(e)=>setYear(e.target.value)}/>
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div className='row'>
                            <div className='col-md-6'>
                                <Form.Label>State(optional)</Form.Label>
                                <select className='form-control'>
                                    <option>Select one</option>
                                    <option>Telengana</option>
                                    <option>Andhra Pradesh</option>
                                    <option>Kadapa</option>
                                    <option>karnool</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <Form.Label>Zip Code(optional):</Form.Label>
                                <Form.Control type="number" placeholder="Zip Code" required/>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div className='row'>
                            <div className='col-md-12'>
                            <Form.Label>Total Price$*</Form.Label>
                            <Form.Control type="button" className='bg-sky-500  text-xl'  disabled value={location.state.pdata.rent} />
                            </div>
                            
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div className='row'>
                            <div className='col-md-12'>
                            <Button   className='bg-primary text-white text-xl w-full' onClick={handleSubmit} >Make Payment</Button>
                            </div>
                            
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div className='row'>
                            <div className='col-md-12'>
                                <Modal show={show} onHide={()=>setShow(!show)}>
                                    <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                    <Modal.Title className=''></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Modal.Title>Do you really want to cancel?</Modal.Title>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className='bg-danger' onClick={()=>{navigate("/")}}>Ok</Button> 
                        
                                        <Button variant="primary" className='bg-info' onClick={()=>{setShow(!show)}}>Cancel</Button>
                                    </Modal.Footer>
                                </Modal>

                                    <Button  className='bg-danger text-white text-xl w-full' onClick={()=>{setShow(!show)}}>Cancel Payment</Button>
                            </div>
                            
                        </div>
                    </Form.Group>
                
                </Form>
                    </div>
                    <div className='col-md-2'></div>
                </div>
        </div>
    );
}