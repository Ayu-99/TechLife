import React from "react";
import { Route,Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./Navbar";
import '../src/index.css';
import Footer from "./Footer";

const App=()=>{
    return (
        <>
        <section >
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/contact" component={Contact}/>
                <Redirect to="/"></Redirect>
            </Switch>
        </section>
         
            <Footer/> 
        </>
    );

}

export default App;