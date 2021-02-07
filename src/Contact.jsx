import React,{useState} from "react";
import '../src/index.css';



const Contact=()=>{

    const [data,setData]=useState({
      fullName:"",
      email:"",
      phone:"",
      message:""
    });

    const formSubmit=(e)=>{
      e.preventDefault();
      alert(`${data.fullName}`);

    }

    const inputEvent=(event)=>{
      const {name,value}=event.target;
      setData((prevVal)=>{
        return {
          ...prevVal,
          [name]:value,
        }
      });
    }
    return (
        <>
          <div className="my-5">
            <h1 className="text-center"><strong>Contact Us</strong></h1>
          </div>  

          <div className="container contact_div">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
              <div class="form-group row my-4">
                  <label for="inputPassword" class="col-sm-2 col-form-label">Full Name</label>
                  <div class="col-sm-10">
                    <input type="text" name="fullName" value={data.fullName} onChange={inputEvent} class="form-control" id="inputPassword" placeholder="Name"/>
                  </div>
                </div>
                <div class="form-group row ">
                  <label for="inputPassword" class="col-sm-2 col-form-label">Phone</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="phone" value={data.phone} onChange={inputEvent} id="inputPassword" placeholder="Phone"/>
                  </div>
                </div>
                <div class="form-group row my-4">
                  <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="email" value={data.email} onChange={inputEvent} id="inputPassword" placeholder="Email"/>
                  </div>
                </div>
                
                <div class="form-group row my-4">
                  <label for="inputPassword" name="message" class="col-sm-2 col-form-label" value={data.message} onChange={inputEvent}>Message</label>
                  <div class="col-sm-10">
                    <textarea row="12" cols="57"></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="col-sm-10 ">
                    <button type="submit" class="btn btn-outline-primary"><strong>Send Query</strong></button>
                  </div>
                </div>
              </form>

              </div>
            </div>
          </div>
        </>
    );

}

export default Contact;