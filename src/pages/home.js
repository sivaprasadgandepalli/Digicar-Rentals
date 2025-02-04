import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide3 from '../images/slide3.jpg';
import aboutImg from '../images/aboutImg.jpg';
import Navbar from '../components/navbar';
import Accordion from 'react-bootstrap/Accordion';
import Marquee from "react-fast-marquee";
import { FaCarAlt, FaUser, FaTrophy, FaRoad, FaAward } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdEmojiTransportation } from "react-icons/md";
import CountUp from "react-countup";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';
import { Award } from 'lucide-react';
import c1 from '../images/revies/customer1.jpg';
import c2 from '../images/revies/customer2.jpg';
import c3 from '../images/revies/customer3.jpg';
import quotes from '../images/revies/download.png';
import ReactStars from 'react-rating-star-with-type';
import '../styles/App.css'
function Home() {
    const carsData = [{
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
    }];

    const navigate = useNavigate();
    const handle = (id) => {
        const req = carsData.filter((car) => {
            if (car.id == id) {
                return car;
            }
        })

        navigate("/singleCar", { state: { req } })
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='container'>
            {/* navbar */}

            <div className='container min-h-5/6 mb-20'>
                <div className='row h-4/5 mt-5'>
                    <div className='col-md-6 px-3 py-3'>
                        <div className='w-full'>
                            <p className='text-emerald-400 text-lg font-bold'>Plan your Trip now</p>
                            <h2 className='text-2xl font-bold text-blue-900 my-4 md:text-5xl'>Explore the world with<br /> comfortable car</h2>
                            <p className='text-lg my-4 text-justify pr-1 lg:pr-5'>
                                Embark on unforgettable adventures and discover the world in unparalleled comfort
                                and style with our fleet of exceptionally comfortable cars.With our streamlined
                                rental process, you can quickly and conveniently reserve your desired vehicle.
                            </p>
                        </div>
                        <div className='flex gap-3 my-2 w-full'>
                            <button className=' flex-grow lg:flex-grow-0 py-2 rounded-md text-white bg-emerald-400 px-3'><a href='#about'>Explore Us</a></button>
                            <Link to='/ViewCars' className='flex-grow md:flex-grow-0 text-white text-center hover:bg-stone-400  bg-stone-900 px-3 py-2 rounded-md'>Rent Car</Link>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={slide3} className='relative w-full h-full' />
                    </div>
                </div>
            </div>

            {/* end of the landing page */}


            <div className='w-full bg-black mb-5 pt-3'>
                <div className='row text-white'>

                    <div className='col-md-3 mb-4 lg:mb-2'>
                        <div className='flex flex-col justify-start items-center gap-1'>
                            <TbTruckDelivery className='h-6 w-6' />
                            <CountUp duration={10} className="font-bold text-2xl" end={1475} />
                            <span className="text-lg">Orders Delivered</span>
                        </div>
                    </div>

                    <div className='col-md-3 mb-4 lg:mb-2'>
                        <div className='flex flex-col justify-start items-center gap-1'>
                            <FaUser className='h-6 w-6' />
                            <CountUp duration={10} className="font-bold text-2xl" end={2475} />
                            <span className="text-lg">Happy Customers</span>
                        </div>
                    </div>

                    <div className='col-md-3 mb-4 lg:mb-2'>
                        <div className='flex flex-col justify-start items-center gap-1'>
                            <FaCarAlt className='h-6 w-6' />
                            <CountUp duration={10} className="font-bold text-2xl" end={1475} />
                            <span className="text-lg">Vehicle Fleet</span>
                        </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                        <div className='flex flex-col justify-start items-center gap-1'>
                            <FaAward className='h-6 w-6' />
                            <CountUp duration={10} className="font-bold text-2xl" end={15} />
                            <span className="text-lg">Years Experience</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* end of the counting section */}

            <div className='container' id='about'>
                <div className='text-center flex flex-col gap-3 mb-5'>
                    <h2 className=' font-bold text-2xl md:text-4xl'>Our Popular Vehicles</h2>
                    <p>Driving your dreams to reality with an exquisite fleet of versatile vehicles<br /> for unforgettable journeys.</p>
                </div>
                <div className=''>
                    <Slider {...settings}>

                        {carsData.map((car, ind) => {
                            return (
                                <div className="rounded-md duration-150 hover:shadow-2xl overflow-hidden" key={ind}>
                                    <img
                                        src={car.car_img}
                                        alt="Laptop"
                                        className="h-[200px] w-full duration-150  rounded-md object-cover hover:scale-105"
                                    />
                                    <div className="p-4">
                                        <h1 className="text-lg font-semibold">{car.comapany}{" " + car.car_name}</h1>
                                        <p className="mt-3 text-sm text-gray-600">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                                        </p>
                                        <div className='flex flex-wrap justify-between items-center '>
                                            <span className='font-bold text-lg'>${car.price.slice(3)}</span>
                                            <button
                                                type="button"
                                                className="rounded-md bg-black px-2.5 py-1 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                onClick={() => handle(car.id)}
                                            >
                                                Rent Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </Slider>


                </div>

            </div>

            {/* end of the car section */}

            <div className='container mt-16'>
                <div className='row'>
                    <div className='col-md-7'>
                        <img src={aboutImg} className='h-full w-full md:p-3' />
                    </div>
                    <div className='col-md-5  pt-3  sm:px-5 '>
                        <h2 className='sm:text-4xl text-2xl font-bold text-blue-950   ' >Only Quality For Clients</h2>
                        <div className='mt-3 w-full text-justify pr-3'>
                            <Tabs
                                defaultActiveKey="Luxury"
                                id="justify-tab-example"
                                className="mb-3"
                                variant="underline"

                            >
                                <Tab eventKey="Luxury" title="Luxury">
                                    We offer a meticulously curated collection of the most sought-after luxury vehicles on the market.
                                    Whether you prefer the sporty allure of a high-performance sports car, the sophistication of a
                                    sleek and luxurious sedan, or the versatility of a premium SUV, we have the perfect car to match your discerning taste.
                                </Tab>
                                <Tab eventKey="comfort" title="Comfort">
                                    We prioritize your comfort and convenience throughout your journey.
                                    We understand that a comfortable ride can make a world of difference,
                                    whether you're embarking on a business trip or enjoying a leisurely vacation. That's why we offer a wide range of well-maintained,
                                    comfortable cars that cater to your specific needs.
                                </Tab>
                                <Tab eventKey="Prestige" title="Prestige" >
                                    We understand that prestige goes beyond luxury. It's about making a statement,
                                    embracing sophistication, and indulging in the finer things in life.
                                    That's why we offer an exclusive selection of prestigious cars that exude elegance, style, and status.
                                </Tab>
                            </Tabs>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-md-4 '>
                                <div className='flex  justify-start  gap-2 md:flex-col mb-2'>
                                    <FaTrophy className='h-12 w-12 text-white bg-green-700 p-2' />
                                    <span className="text-lg">First Class Services</span>

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='flex  justify-start  gap-2 md:flex-col mb-2'>
                                    <FaRoad className='h-12 w-12 text-white bg-green-700 p-2' />
                                    <span className="text-lg">24/7 road assistance</span>

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='flex  justify-start  gap-2 md:flex-col'>
                                    <MdEmojiTransportation className='h-12 w-12 text-white bg-green-700 p-2' />
                                    <span className="text-lg">Free Pick-Up & Drop-Off</span>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>


            </div>
            {/* end of about */}
            <div className='container  py-5'>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold mb-3 md:text-4xl'>What Our Customers Say's?</h2>
                    <p>We always take care of our clients and they are very happy.<br />
                        We have collected few stories for you.</p>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4 mb-3'>
                        <div className='bg-[#e0e1e8] p-4 rounded h-full relative'>
                            <div className=''>
                                <div className='flex gap-3 items-center'>
                                    <div className='h-16 w-16 rounded-full'>
                                        <img src={c1} alt='customer1' className='w-full h-full rounded-full' />
                                    </div>
                                    <div>
                                        <h3>Pushpanjali</h3>
                                        <p>Marketing Executive Officer</p>
                                    </div>
                                    <img src={quotes} alt='quote' className='h-6 w-6 mix-blend-multiply absolute top-0 right-0' />
                                </div>
                                <div className='py-2'>
                                    <ReactStars
                                        value={3.5}
                                        edit={true}
                                        activeColors={["#8568FC",]}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='text-justify'>
                                    I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.
                                </p>
                                <p className='pt-3 text-gray-400'>Jan 12,2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-3'>
                        <div className='bg-[#e0e1e8] p-4 rounded h-full relative'>
                            <div className=''>
                                <div className='flex gap-3 items-center'>
                                    <div className='h-16 w-16 rounded-full'>
                                        <img src={c2} alt='customer1' className='w-full h-full rounded-full' />
                                    </div>
                                    <div>
                                        <h3>Prem kumar</h3>
                                        <p>Ui/Ux developer</p>
                                    </div>
                                    <img src={quotes} alt='quote' className='h-6 w-6 mix-blend-multiply absolute top-0 right-0' />
                                </div>
                                <div className='py-2'>
                                    <ReactStars
                                        value={4}
                                        edit={true}
                                        activeColors={["#8568FC",]}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='text-justify'>
                                    Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services.

                                </p>
                                <p className='pt-3 text-gray-400'>Jan 12,2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='bg-[#e0e1e8] p-4 rounded h-full relative'>
                            <div className=''>
                                <div className='flex gap-3 items-center'>
                                    <div className='h-16 w-16 rounded-full'>
                                        <img src={c3} alt='customer1' className='w-full h-full rounded-full' />
                                    </div>
                                    <div>
                                        <h3>anik acharya</h3>
                                        <p>full stack developer</p>
                                    </div>
                                    <img src={quotes} alt='quote' className='h-6 w-6 mix-blend-multiply absolute top-0 right-0' />
                                </div>
                                <div className='py-2'>
                                    <ReactStars

                                        value={4.5}
                                        edit={true}
                                        activeColors={["#8568FC",]}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='text-justify'>
                                    We have been using Rentaly for our trips needs for several years now and have always
                                    been happy with their service. Their customer support is Excellent Service! and they
                                    are always available to help with any issues we have.
                                    Their prices are also very competitive.
                                </p>
                                <p className='pt-3 text-gray-400'>Jan 12,2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* end of customer review section */}

            <div className='container p-2'>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold md:text-4xl'>Frequently asked Questions?</h2>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-6 mb-3 lg:mb-1'>
                        <Accordion>
                            <Accordion.Item eventKey="0" className='border-0'>
                                <Accordion.Header>How do I get started with Car Rental?</Accordion.Header>
                                <Accordion.Body>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='border-0'>
                                <Accordion.Header>Can I rent a car with a debit card??</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='border-0'>
                                <Accordion.Header>Can I cancel or modify my reservation?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='col-md-6'>
                        <Accordion>
                            <Accordion.Item eventKey="0" className='border-0'>
                                <Accordion.Header>What kind of Car Rental do I need?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='border-0'>
                                <Accordion.Header>What is a rental car security deposit?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className='border-0'>
                                <Accordion.Header>Is it possible to extend my rental period?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <p className='text-center py-3'>For more queries reach out to us <Link to='/contact' className='text-blue-500'>Contact Us</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Home;
