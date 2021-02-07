import React from "react";
import '../src/index.css';
import {NavLink} from "react-router-dom";
import  img from "./img.jpg";

const Card=()=>{
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                <img className="card-img-top" src={img} alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">Android</h5>
                    <p className="card-text">Android software development is the process by which applications are created for devices running the Android operating system.</p>
                    <NavLink to="#" className="btn btn-primary">Know More</NavLink>
                </div>
                </div>
            </div>
        </>
    );
}
export default Card;