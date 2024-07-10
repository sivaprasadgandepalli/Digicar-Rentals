import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/cars.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import StarRating from '../components/starComponent';
export default function ViewCars() {
    const cars = [{
        id: 1,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75",
        car_name: "Fronx",
        comapany: "Maruti Suzuki",
        number_plate: "AP05 TD 8899",
        price: "Rs.1800",
        rating: 3.5
    }, {
        id: 2,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/107543/vitara-brezza-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name: "Cruz",
        comapany: "Maruti Suzuki",
        number_plate: "AP05 TG 8099",
        price: "Rs.2800",
        rating: 3.3
    }, {
        id: 3,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/141115/creta-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name: "Creta",
        number_plate: "AP05 EX 9899",
        comapany: "Hyundai",
        price: "Rs.2500",
        rating: 2.6
    }, {
        id: 4,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75",
        car_name: "Scorpio",
        comapany: "Mahindra ",
        number_plate: "AP05 VG 6799",
        price: "Rs.2000",
        rating: 4.5
    }, {
        id: 5,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/141121/venue-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name: "Venue",
        comapany: "Hyundai  ",
        number_plate: "AP05 HU 7767",
        price: "Rs.2000",
        rating: 3.5
    }, {
        id: 6,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name: "XUV700",
        comapany: "Mahindra",
        number_plate: "AP05 YS 6699",
        price: "Rs.1700",
        rating: 2.8
    }, {
        id: 7,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/32597/altroz-exterior-right-front-three-quarter-79.jpeg?isig=0&q=75",
        car_name: "Altroz",
        comapany: "Tata",
        number_plate: "AP05 MD 4455",
        price: "Rs.1800",
        rating: 4.2
    }, {
        id: 8,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/142739/harrier-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
        car_name: "Harrier",
        comapany: "Tata",
        number_plate: "AP05 UH 8779",
        price: "Rs.3500",
        rating: 3.2
    }, {
        id: 9,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/121943/verna-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name: "Verna",
        comapany: "THyundai",
        number_plate: "AP05 CD 8789",
        price: "Rs.2300",
        rating: 2.7
    }, {
        id: 10,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/144681/virtus-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name: " Virtus",
        comapany: "VoksWagen",
        number_plate: "AP05 XY 0099",
        price: "Rs.2200",
        rating: 1.9
    }, {
        id: 11,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/130583/hector-facelift-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75",
        car_name: "Virtus",
        comapany: "VoksWagen",
        number_plate: "AP05 XY 0099",
        price: "Rs.1500",
        rating: 3.7
    }, {
        id: 12,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/134287/2023-city-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name: "Virtus",
        comapany: "VoksWagen",
        number_plate: "AP05 XY 0099",
        price: "Rs.3000",
        rating: 3.0
    }, {
        id: 13,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/142865/safari-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
        car_name: "SAFARI",
        comapany: "VoksWagen",
        number_plate: "AP05 XY 0099",
        price: "Rs.2500",
        rating: 4.0
    }, {
        id: 14,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/144999/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
        car_name: "SLAVIA",
        comapany: "Skoda",
        number_plate: "AP05 PO 0099",
        price: "Rs.1000",
        rating: 2.5
    }, {
        id: 15,
        car_img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
        car_name: "Hector",
        comapany: "MG",
        number_plate: "AP05 PY 0099",
        price: "Rs.2000",
        rating: 5
    }
    ]
    const navigate = useNavigate();
    const handle = (id) => {
        const req = cars.find(car => car.id === id);
        navigate("/singleCar", { state: { req } })
    }
    return (
        <div className=" container-fluid text-center">
            <div>
                <div className='introImg text-center row py-4'>
                    <div className='col-md-12'>
                        <h2 className='text-3xl mb-1'>Our Popular Cars</h2>
                        <div className='flex items-center justify-center'>
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/ViewCars">
                                    Fleet
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>

                <div>
                </div>
                <section className='py-4 lg:px-10 lg:py-10'>
                    <div className='mx-auto lg:w-[90%]' id='main'>
                        {cars.map((car) => {
                            return (
                                <article className='bg-[#23232310] transition ease-in-out delay-150 rounded' key={car.car_name}>
                                    <div className='overflow-hidden p-1 w-full h-56'>
                                        <img src={car.car_img} alt={car.car_name} className='relative w-full h-full transition ease-in-out delay-200 hover:scale-110' />
                                    </div>
                                    <div className='p-3 text-justify'>
                                        <figcaption className='text-xl font-bold'>{car.car_name}{car.comapany}</figcaption>
                                        <div className='flex items-center justify-between mb-2'>
                                            <p>{car.number_plate}</p>
                                            <div className='d-flex items-center'>
                                                <p className='pr-1'>{car.rating}</p>
                                                <StarRating count={car.rating} />
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <h2>₹{car.price.slice(3)} per day</h2>
                                            <button className="btn text-md font-bold bg-slate-400 hover:text-white hover:bg-sky-700" onClick={() => handle(car.id)}>Rent Car</button>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}