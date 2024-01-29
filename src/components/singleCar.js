import { Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import ReactStars from 'react-rating-star-with-type';
export default function CarDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    let data = {
        R_num: location.state.req[0].number_plate,
        name: location.state.req[0].car_name,
        img: location.state.req[0].car_img,
        company: location.state.req[0].comapany,
        price: location.state.req[0].price

    }
    console.log(data.price);
    const send = () => {
        navigate("/booking", { state: { data } })
    }
    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <img src={location.state.req[0].car_img} className="h-64 mix-blend-multiply mt-5" alt="car" />
                </div>
                <div className="col-md-5 text-white">
                    <div className="">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th className="text-2xl">{location.state.req[0].comapany}<span className="pl-2">{location.state.req[0].car_name}</span></th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="text-justify">
                                        `The {location.state.req[0].comapany} is the high-performance version of the 2 Series 4-door coupé. The first generation of the {location.state.req[0].car_name} is the F87 coupé and is powered by turbocharged.`
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-xl">Specifications:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th className="">Number Plate:</th>
                                    <td>{location.state.req[0].number_plate}</td>
                                </tr>
                                <tr>
                                    <th>Car Modal:</th>
                                    <td>{location.state.req[0].car_name}</td>
                                </tr>
                                <tr>
                                    <th>Company:</th>
                                    <td>{location.state.req[0].comapany}</td>
                                </tr>
                                <tr>
                                    <th>Rating:</th>
                                    <td><ReactStars
                                        value={location.state.req[0].rating}
                                        edit={true}
                                        activeColors={["#8568FC"]}
                                    /></td>
                                </tr>
                                <tr>
                                    <th>Price per day:</th>
                                    <td>{location.state.req[0].price}</td>
                                </tr>

                                <tr className="">
                                    <th ><button className="btn btn-sm btn-danger mt-3 px-3" onClick={() => navigate(-1)}>Go Back</button></th>
                                    <td><button className="btn btn-sm btn-primary mt-3 px-3" onClick={send} >Book Car</button></td>
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