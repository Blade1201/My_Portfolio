import React from 'react';

const Contact = ({alternateStyles, activeStyle}) => {

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2 style={alternateStyles[activeStyle]}> Elérhetőségek </h2>
                    </div>
                </div>

                <h3 className="contact-title padd-15" style={alternateStyles[activeStyle]}> Maradtak még kérdései? </h3>
                <h4 className="contact-sub-title padd-15"> Keressen bátran </h4>

                <div className="row" style={alternateStyles[activeStyle]}>
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <h4> Telefonáljon </h4>
                        <p>+36 20 964 0267</p>
                    </div>

                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <h4> Email </h4>
                        <p>molnar.aron1201@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;