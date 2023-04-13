import React from 'react';
import Hopstop from "../images/hopstop.png";
import Real_Estate_Website from "../images/real-estate-website.png";
import Aaron_Air from "../images/aaron-air.png";
import Gym_Website from "../images/gym-website.png";
import Google_Form from "../images/google-form.png";
import Parallax_Scrolling from "../images/parallax-scrolling.png";
import Menu_Scroll_Animation from "../images/menu-scroll-animation.png";
import Attract_Hover_Effect from "../images/attract-hover-effect.png";
import Mask_Button_Hover_Effect from "../images/mask-button-hover-effect.png";

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
                        <h2> Projektjeim: </h2>
                    </div>
                </div>
                <div className="row" style={alternateStyles[activeStyle]}>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href="https://blade1201.github.io/Hopstop/" target="blank"> <img src={Hopstop} alt="portfolio"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href="https://blade1201.github.io/Real_Estate_Website/" target="blank"> <img src={Real_Estate_Website} alt="portfolio"/></a>
                            </div>
                        </div>
                    </div>
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
                                <a href="https://blade1201.github.io/Google_Form/" target="blank"> <img src={Google_Form} alt="portfolio"/></a>
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
                                <a href="https://blade1201.github.io/Menu_Scroll_Animation/" target="blank"> <img src={Menu_Scroll_Animation} alt="portfolio"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href="https://blade1201.github.io/Attract_Hover_Effect/" target="blank"> <img src={Attract_Hover_Effect} alt="portfolio"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href="https://blade1201.github.io/Mask_Button_Hover_Effect/" target="blank"> <img src={Mask_Button_Hover_Effect} alt="portfolio"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/Blade1201" className="btn margin-top" style={alternateStyles[activeStyle]}> További Projektjeim </a>
            </div>
        </section>
    );
};

export default Portfolio;