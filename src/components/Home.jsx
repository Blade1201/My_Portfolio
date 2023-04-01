import React from 'react';
import Person from "../images/person.jpeg";

const Home =  ({alternateStyles, activeStyle}) => {

    return (
        <div className="home section" id="home">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello"> Üdvözlöm, a nevem <span style={alternateStyles[activeStyle]}> Holovacki Román </span></h3>
                        <h3 className="my-profession"> Én egy <span className="typing" style={alternateStyles[activeStyle]}> Frontend fejlesztő </span> vagyok</h3>
                        <p>Rendkívül szenvedélyes, aki olyan pozíciót keres,
                            amelyben kreatív képességeit a vállalat javára fordíthatja.</p>
                        <a href="#contact" className="btn" style={alternateStyles[activeStyle]}> Tudjon meg többet </a>
                    </div>

                    <div className="home-img padd-15" style={alternateStyles[activeStyle]}>
                        <img src={Person} alt="person"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;