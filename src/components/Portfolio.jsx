import React from 'react';
import Aaron_Air from "../images/aaron-air.png";
import Gym_Website from "../images/gym-website.png";
import Parallax_Scrolling from "../images/parallax-scrolling.png";
import Portfolio_4 from "../images/portfolio-4.jpg";
import Portfolio_5 from "../images/portfolio-5.jpg";
import Portfolio_6 from "../images/portfolio-6.jpg";

const Portfolio = ({alternateStyles, activeStyle}) => {

    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2 style={alternateStyles[activeStyle]}> Portfólió </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading padd-15">
                        <h2> Projekteim: </h2>
                    </div>
                </div>
                <div className="row" style={alternateStyles[activeStyle]}>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href="https://blade1201.github.io/Aaron-Air/" target="blank"> <img src={Aaron_Air} alt="portfolio"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href="https://blade1201.github.io/Gym_Website/" target="blank"> <img src={Gym_Website} alt="portfolio"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href="https://blade1201.github.io/Parallax_Scrolling/" target="blank"> <img src={Parallax_Scrolling} alt="portfolio"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={Portfolio_4} alt="portfolio"/>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={Portfolio_5} alt="portfolio"/>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={Portfolio_6} alt="portfolio"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;