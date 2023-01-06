
import React from "react";


import { useRef } from 'react'; //emailjs react website template
import emailjs from "emailjs-com";
import { useState } from "react";
const ContactUsPage = () => {
    const [s, sets] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        sets(true);
        e.preventDefault();

        emailjs.sendForm('service_wruolwk', 'template_zg5u38k', e.target, 'u-XYTvIbVtz2HVSiT')
        // e.target.reset();
    };


    return (
        <>
          

            <section className="contactus-section">
                <div className="contact-us">
                    <div className="">
                        <div className="col-lg-12 ">
                            <div className="contact-u d-flex gap-5">
                                <div className="contact-leftside  col-lg-5">
                                    <h2 className="main-heading fw-bold">
                                        Let's Connect
                                    </h2>
                                    <p className="main-hero-para">
                                        Our vigilant sales agents are just a single click away and would love to respond your queries. We are available 24/7
                                    </p>
                                    <figure>
                                        <img
                                            src="./images/vector.png"
                                            alt="contatUsImg"
                                            className="img-fluid height-image"
                                        />
                                    </figure>
                                </div>

                                {/* right side contact form  */}
                                <div className="contact-rightside col-12 col-lg-6">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="row">
                                            <div className="col-12 col-lg-5 contact-input-feild">
                                                <label htmlFor="" className="ml-1">Name*</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub"
                                                    placeholder="First Name"
                                                    required

                                                />
                                            </div>

                                            <div className="col-12 col-lg-5 contact-input-feild">
                                                <label htmlFor="" className="ml-1">Company Name*</label>

                                                <input
                                                    type="text"
                                                    name="company"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub"
                                                    placeholder="Company"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-5 contact-input-feild">
                                                <label htmlFor="" className="ml-1">Designation*</label>

                                                <input
                                                    type="text"
                                                    name="designation"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub"
                                                    placeholder="Designation "
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 col-lg-5 contact-input-feild">
                                                <label htmlFor="" className="ml-1">Company Size*</label>

                                                <input
                                                    type="text"
                                                    name="companysize"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub "
                                                    placeholder="Company Size"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-5 contact-input-feild">
                                                <label htmlFor="" className="ml-1">Contact No.*</label>

                                                <input
                                                    type="tel"
                                                    name="contactno"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub"
                                                    placeholder="Contact Us"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 col-lg-5 contact-input-feild">
                                                <label htmlFor="" className="ml-1">Email*</label>

                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="contact-input-height"
                                                    className="form-control  contact-input-feild-sub"
                                                    placeholder="Email Address"
                                                    required
                                                />
                                            </div>
                                        </div>

                                       

                                        <button
                                            type="submit"
                                            className="btn btn-danger"
                                        >
                                            Submit
                                        </button>
                                        {s ?
                                            <div class="alert alert1 alert-dark" role="alert">
                                                Form Submit Successfully
                                            </div> : ""
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUsPage;

