import React from "react";
import '../src/index.css';
import {NavLink} from "react-router-dom";

const Common=(props)=>{

    return (
        <>
          <section id="header" className="">
          {/* <img src={web} className="img-fluid animated" alt="home img"></img> */}
          <div className="container-fluid nav bg margin-top">
            <div className="row">
                <div className="col-10 mx-auto ">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                      <h1 className="">{props.name} <strong>TechLife</strong></h1>
                      <h2>We are the team of talented developers making websites</h2>
                      <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started">{props.btnName}</NavLink>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                    </div>
                </div>
            </div>
          </div> 
          </section>  
        </>
    );

}

export default Common;