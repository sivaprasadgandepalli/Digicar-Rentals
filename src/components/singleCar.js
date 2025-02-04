import { useLocation, useNavigate } from "react-router-dom";
import ReactStars from 'react-rating-star-with-type';
import { useEffect } from "react";
export default function CarDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let data = {
        R_num: location.state.req.number_plate,
        name: location.state.req.car_name,
        img: location.state.req.car_img,
        company: location.state.req.comapany,
        price: location.state.req.price

    }
    
    const send = () => {
        navigate("/booking", { state: { data } })
    }
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <img src={location.state.req.car_img} className="h-64 mix-blend-multiply" alt="car" />
                </div>
                <div className="col-md-5 text-white">
                    <div className="">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th className="text-2xl">{location.state.req.comapany}<span className="pl-2">{location.state.req.car_name}</span></th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        `The {location.state.req.comapany} is the high-performance version of the 2 Series 4-door coupé. The first generation of the {location.state.req.car_name} is the F87 coupé and is powered by turbocharged.`
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-xl">Specifications:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th className="">Number Plate:</th>
                                    <td>{location.state.req.number_plate}</td>
                                </tr>
                                <tr>
                                    <th>Car Modal:</th>
                                    <td>{location.state.req.car_name}</td>
                                </tr>
                                <tr>
                                    <th>Company:</th>
                                    <td>{location.state.req.comapany}</td>
                                </tr>
                                <tr>
                                    <th>Rating:</th>
                                    <td><ReactStars
                                        value={location.state.req.rating}
                                        edit={true}
                                        activeColors={["#8568FC"]}
                                    /></td>
                                </tr>
                                <tr>
                                    <th>Price per day:</th>
                                    <td>{location.state.req.price}</td>
                                </tr>

                                <tr>
                                    <th><button className="btn btn-sm btn-danger" onClick={() => navigate(-1)}>Go Back</button></th>
                                    <td><button className="btn btn-sm btn-primary" onClick={send} >Book Car</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="col-md-1"></div>

            </div>

        </div>
    );
}