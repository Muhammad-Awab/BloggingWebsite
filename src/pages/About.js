import React, { useState } from 'react'
import serviceapi from '../API/serviceApi';
const About = () => {
    const [serviceData] = useState(serviceapi);
    return (
        <>
            <section className="service-main-container ">
                <div className="container service-container">
                    <h1 className="main-heading text-center ">Topics Of our Blog </h1>
                    <div className="row">
                        {
                            serviceData.map((curElem) => {
                                const { id, logo, title, info } = curElem;
                                return (
                                    <div className="col-11 col-lg-4 col-xx-4 work-container-subdiv" key={id}>
                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h3 className='sub-heading'>{title}</h3>
                                        <p className='main-hero-para'>
                                            {info}
                                        </p>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
