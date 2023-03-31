import React from 'react';
import "../styles/main.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/portfolio.css";
import "../styles/contact.css";
import "../styles/style-switcher.css";
import Person from "../images/person.jpeg";
import Aaron_Air from "../images/Aaron-Air.png";
import Gym_Website from "../images/Gym_Website.png";
import Parallax_Scrolling from "../images/Parallax_Scrolling.png";
import Portfolio_4 from "../images/portfolio-4.jpg";
import Portfolio_5 from "../images/portfolio-5.jpg";
import Portfolio_6 from "../images/portfolio-6.jpg";


const Main = () => {

    document.addEventListener("DOMContentLoaded", () => {
        const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
        const styleSwitcher = document.querySelector(".style-switcher");

        styleSwitcherToggle.addEventListener("click", () => {
            styleSwitcher.classList.toggle("open");
        });

        window.addEventListener("scroll", () => {
            if (styleSwitcher.classList.contains("open")) {
                styleSwitcher.classList.remove("open");
            }
        });
    });


    const alternateStyles = document.querySelectorAll(".alternate-style");

    function setActiveStyle(color) {
        for (let i = 0; i < alternateStyles.length; i++) {
            const style = alternateStyles[i];
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        }
    }



    document.addEventListener("DOMContentLoaded", () => {
        const dayNight = document.getElementsByClassName("day-night")[0];

        dayNight.addEventListener("click", () => {
            dayNight.querySelector("i").classList.toggle("fa-sun");
            dayNight.querySelector("i").classList.toggle("fa-moon");
            document.body.classList.toggle("dark");
        });

        window.addEventListener("load", () => {
            if (document.body.classList.contains("dark")) {
                dayNight.querySelector("i").classList.add("fa-sun");
            } else {
                dayNight.querySelector("i").classList.add("fa-moon");
            }
        });
    });



    return (
        // Main Container Start
        <div className="main-container">

            {/*Aside Start*/}
            <div className="aside">
                <div className="logo">
                    <a href="#"> <span>P</span>ortfólió </a>
                </div>
                <div className="nav-toggler">
                    <span></span>
                </div>
                <ul className="nav">
                    <li><a href="#home" className="active"><i className="fa fa-home"></i> Kezdőlap </a></li>
                    <li><a href="#about"><i className="fa fa-user"></i> Rólam </a></li>
                    <li><a href="#portfolio"><i className="fa fa-briefcase"></i> Munkáim </a></li>
                    <li><a href="#contact"><i className="fa fa-comments"></i> Elérhetőség </a></li>
                </ul>
            </div>
            {/*Aside End*/}
            {/*Main Content Start*/}
            <div className="main-content">
                {/*Home Section Start*/}
                <div className="home section" id="home">
                    <div className="container">
                        <div className="row">
                            <div className="home-info padd-15">
                                <h3 className="hello"> Üdvözlöm, a nevem <span className="name"> Holovacki Román </span></h3>
                                <h3 className="my-profession"> Én egy <span className="typing"> Frontend fejlesztő </span> vagyok</h3>
                                <p>Rendkívül szenvedélyes, aki olyan pozíciót keres,
                                    amelyben kreatív képességeit a vállalat javára fordíthatja.</p>
                                <a href="#contact" className="btn hire-me"> Tudjon meg többet </a>
                            </div>

                            <div className="home-img padd-15">
                                <img src={Person} alt="person"/>
                            </div>

                        </div>
                    </div>
                </div>
                {/*Home Section End*/}
                {/*About Section Start*/}
                <section className="about section" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2> Rólam </h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="about-content padd-15">
                                <div className="row">
                                    <div className="about-text padd-15">
                                        <h3> A nevem Holovacki Román, Frontend fejlesztő </h3>
                                        <p>Alapképesítések:</p>
                                        <p> Jó problémamegoldó képesség</p>
                                        <p> Készség csapatként dolgozni egy közös cél elérése érdekében</p>
                                        <p> A határidők betartásának képessége</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="personal-info padd-15">
                                        <div className="row">
                                            <div className="info-item padd-15">
                                                <p> Születésnap : <span> 2001. Január 2. </span> </p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p> Kor : <span> 22 </span> </p>
                                            </div>
                                            <div className="info-item padd-15">
                                               <p> Weboldalak : <br/> <a href="https://www.linkedin.com/in/roman-holovacki/" target="blank"> Linkedin </a>
                                                   <a href="https://github.com/Blade1201" target="blank"> Github </a>
                                                   <a href="https://www.facebook.com/roman.holovacki/" target="blank"> Facebook </a>
                                               </p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p> Email : <span> romanholovacki@gmail.com </span> </p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p> Végzettség : <span> Szoftverfejlesztő és tesztelő </span> <span> Programtervező informatikus </span> </p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p> Telefonszám : <span> +36 20 964 0267 </span> </p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p> Lakhely : <span> Nyíregyháza </span> </p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="button padd-15">
                                                <a href="https://drive.google.com/file/d/12N19eA7Rvm4RHzpTVVM4xn-Dc-Z65GwR/view?usp=share_link"
                                                   target="blank" className="btn"> Önéletrajz letöltése </a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="skills padd-15">
                                        <div className="row">
                                            <div className="skill-item padd-15">
                                                <h5> React </h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: 75 + "%"}}></div>
                                                    <div className="skill-percent">75%</div>
                                                </div>
                                            </div>

                                            <div className="skill-item padd-15">
                                                <h5> JavaScript </h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: 70 + "%"}}></div>
                                                    <div className="skill-percent">70%</div>
                                                </div>
                                            </div>

                                            <div className="skill-item padd-15">
                                                <h5> HTML5 </h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: 95 + "%"}}></div>
                                                    <div className="skill-percent">95%</div>
                                                </div>
                                            </div>

                                            <div className="skill-item padd-15">
                                                <h5> CSS </h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: 85 + "%"}}></div>
                                                    <div className="skill-percent">85%</div>
                                                </div>
                                            </div>

                                            <div className="skill-item padd-15">
                                                <h5> SASS </h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: 85 + "%"}}></div>
                                                    <div className="skill-percent">85%</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="education padd-15">
                                        <h3 className="title"> Végzettség </h3>
                                        <div className="row">
                                            <div className="timeline-box padd-15">
                                                <div className="timeline shadow-dark">
                                                    <div className="timeline-item">
                                                        <div className="circle-dot"></div>
                                                        <h3 className="timeline-date">
                                                            <i className="fa fa-calendar"></i>
                                                            2021-2023
                                                            <br/>
                                                            <i className="fa fa-school"></i>
                                                            <a href="https://www.nyirszikszi.hu/" target="blank"> Nyíregyházi SZC Széchenyi István Technikum és Kollégium </a>
                                                        </h3>
                                                        <h4 className="timeline-title">
                                                            Szoftverfejlesztő és tesztelő
                                                        </h4>
                                                        <p className="timeline-text">
                                                            Olyan szakember, aki képes webes és asztali alkalmazást (szoftvert) tervezni, fejleszteni, tesztelni és dokumentálni.
                                                            A programozási feladatokon túl adatbázisok tervezését és kezelését is elvégzi.
                                                        </p>
                                                    </div>

                                                    <div className="timeline-item">
                                                        <div className="circle-dot"></div>
                                                        <h3 className="timeline-date">
                                                            <i className="fa fa-calendar"></i>
                                                            2023-2027
                                                            <br/>
                                                            <i className="fa fa-school"></i>
                                                            <a href="https://inf.unideb.hu/" target="blank"> Debreceni Egyetem Informatikai Kar </a>
                                                        </h3>
                                                        <h4 className="timeline-title">
                                                            Programtervező informatikus
                                                        </h4>
                                                        <p className="timeline-text">
                                                            Olyan szakember, aki képes szoftverorientált információs technológiai eszközök és
                                                            rendszerek létrehozási, bevezetési, működtetési, szervizelési, fejlesztési és alkalmazási tevékenységét önállóan
                                                            és csoportmunkában ellátni.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="experience padd-15">
                                        <h3 className="title"> Tapasztalat </h3>
                                        <div className="row">
                                            <div className="timeline-box padd-15">
                                                <div className="timeline shadow-dark">
                                                    <div className="timeline-item">
                                                        <div className="circle-dot"></div>
                                                        <h3 className="timeline-date">
                                                            <i className="fa fa-calendar"></i>
                                                            2021-2023
                                                            <br/>
                                                            <i className="fa fa-school"></i>
                                                            <a href="https://www.nyirszikszi.hu/" target="blank"> Nyíregyházi SZC Széchenyi István Technikum és Kollégium </a>
                                                        </h3>
                                                        <h4 className="timeline-title">
                                                            Szoftverfejlesztő és tesztelő
                                                        </h4>
                                                        <p className="timeline-text">
                                                            Olyan szakember, aki képes webes és asztali alkalmazást (szoftvert) tervezni, fejleszteni, tesztelni és dokumentálni.
                                                            A programozási feladatokon túl adatbázisok tervezését és kezelését is elvégzi.
                                                        </p>
                                                    </div>

                                                    <div className="timeline-item">
                                                        <div className="circle-dot"></div>
                                                        <h3 className="timeline-date">
                                                            <i className="fa fa-calendar"></i>
                                                            2023-2027
                                                            <br/>
                                                            <i className="fa fa-school"></i>
                                                            <a href="https://inf.unideb.hu/" target="blank"> Debreceni Egyetem Informatikai Kar </a>
                                                        </h3>
                                                        <h4 className="timeline-title">
                                                            Programtervező informatikus
                                                        </h4>
                                                        <p className="timeline-text">
                                                            Olyan szakember, aki képes szoftverorientált információs technológiai eszközök és
                                                            rendszerek létrehozási, bevezetési, működtetési, szervizelési, fejlesztési és alkalmazási tevékenységét önállóan
                                                            és csoportmunkában ellátni.
                                                        </p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                {/*About Section End*/}
                {/*Portfolio Section Start*/}
                <section className="portfolio section" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2> Portfólió </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="portfolio-heading padd-15">
                                <h2> Projekteim: </h2>
                            </div>
                        </div>
                        <div className="row">
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
                {/*Portfolio Section End*/}
                {/*Contact Section Start*/}
                <section className="contact section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2> Elérhetőségek </h2>
                            </div>
                        </div>
                        <h3 className="contact-title padd-15"> Maradtak még kérdései? </h3>
                        <h4 className="contact-sub-title padd-15"> Keressen bátran </h4>
                        <div className="row">
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
                                <p>romanholovacki@gmail.com</p>
                            </div>
                        </div>
                        <h3 className="contact-title padd-15"> Küldjön Üzenetet</h3>
                        <h4 className="contact-sub-title padd-15"> Gyorsan reagálok az üzenetekre </h4>

                        <div className="row">
                            <div className="contact-form padd-15">
                                <div className="row">
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Név"/>
                                        </div>
                                    </div>

                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                </div>

                                    <div className="row">
                                        <div className="form-item col-12 padd-15">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Tárgy"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-item col-12 padd-15">
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Üzenet"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-item col-12 padd-15">
                                            <div className="form-group">
                                                <button type="submit" className="btn"> Üzenet Küldése </button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Contact Section End*/}
            </div>
            {/*Main Content End*/}

            {/*Style Switcher Start*/}
            <div className="style-switcher">
                <div className="style-switcher-toggler s-icon">
                    <i className="fas fa-cog fa-spin"></i>
                </div>
                <div className="day-night s-icon">
                    <i className="fas"></i>
                </div>
                <h4> Témák </h4>
                <div className="colors">
                    <span className="color-1" onClick={()=> setActiveStyle("color-1")}></span>
                    <span className="color-2" onClick={()=> setActiveStyle("color-2")}></span>
                    <span className="color-3" onClick={()=> setActiveStyle("color-3")}></span>
                    <span className="color-4" onClick={()=> setActiveStyle("color-4")}></span>
                    <span className="color-5" onClick={()=> setActiveStyle("color-5")}></span>
                </div>
            </div>


            {/*Style Switcher End*/}

        </div>
        // Main Container End
    );
};

export default Main;