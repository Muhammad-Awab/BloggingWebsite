import React from "react";
import { useRef } from 'react'; //emailjs react website template

import emailjs from "emailjs-com";

const ContactUs = () => {
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_om67mll', 'template_0wwryso', form.current, 'u-XYTvIbVtz2HVSiT')
    e.target.reset();
};

    return (
        <div className="container-fluid mb-4">
          <div className="container">
            <div className="col-12">
              <div className="text-center heading py-2">
              Contact us
              </div>
            </div>
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-10 col-md-8 col-lg-6">
                <form className="row blog-form" ref={form} onSubmit={sendEmail}>
                  <div className="col-12 py-3">
                    <input
                      type="text"
                      className="form-control input-text-box"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div className="col-12 py-3">
                    <input
                      type="text"
                      className="form-control input-text-box"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  
                 
                  
                 
                  <div className="col-12 py-3">
                    <textarea
                      className="form-control description-box"
                      placeholder="Message"                      
                      name="message"
                    />
                  </div>
                  
                  <div className="col-12 py-3 text-center">
                    <button
                      className="btn btn-add"
                      type="submit"

                    >Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ContactUs;






  


