import React from 'react';
import "../styles/main.css";
import "../styles/home.css";
import "../styles/color-1.css";
import Person from "../images/person.jpeg";


const Main = () => {
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
                    <li><a href="#" className="active"><i className="fa fa-home"></i> Kezdőlap </a></li>
                    <li><a href="#"><i className="fa fa-user"></i> Rólam </a></li>
                    <li><a href="#"><i className="fa fa-list"></i> Szolgáltatások </a></li>
                    <li><a href="#"><i className="fa fa-briefcase"></i> Munkáim </a></li>
                    <li><a href="#"><i className="fa fa-comments"></i> Elérhetőség </a></li>
                </ul>
            </div>
            {/*Aside End*/}
            {/*Main Content Start*/}
            <div className="main-content">
                {/*Home Section Start*/}
                <div className="home section">
                    <div className="container">
                        <div className="row">
                            <div className="home-info padd-15">
                                <h3 className="hello"> Üdvözlöm, a nevem <span className="name"> Holovacki Román </span></h3>
                                <h3 className="my-profession"> Én egy <span className="typing"> Frontend fejlesztő </span> vagyok</h3>
                                <p>Rendkívül szenvedélyes frontend fejlesztő vagyok, aki olyan pozíciót keres,
                                    amelyben kreatív képességeimet a vállalat javára fordíthatom.</p>
                                <a href="#contact" className="btn hire-me"> Tudjon meg többet </a>
                            </div>

                            <div className="home-img padd-15">
                                <img src={Person} alt="person"/>
                            </div>

                        </div>
                    </div>
                </div>
                {/*Home Section End*/}
            </div>
            {/*Main Content End*/}
        </div>
        // Main Container End
    );
};

export default Main;