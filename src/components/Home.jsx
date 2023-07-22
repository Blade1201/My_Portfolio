import React from 'react';
import Person from "../images/person.jpeg";

const Home =  ({alternateStyles, activeStyle}) => {

    return (
        <div className="home section" id="home">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello"> Üdvözlöm, a nevem <span style={alternateStyles[activeStyle]}> Molnár Áron </span></h3>
                        <h3 className="my-profession"> &#62; <span className="typing" style={alternateStyles[activeStyle]}> Informatika szakos tanár </span> &#60; </h3>
                        <p>Kitartó és lelkes, a gyerekek oktatása iránt elkötelezett tanító vagyok. <br /> <br />
                            Célom a tananyag érthető és mindenki számára feldolgozható bemutatása, 
                            miközben maradéktalanul követem a tanterv előírásait. A hatékony oktatási módszerek sikeres alkalmazása mellett
                            lehetőséget biztosítok diákjaimnak kérdésekre és önálló tevékenységekre, ezzel is táplálva eredendő kíváncsiságukat. Folyamatosan követem az újító oktatási módszereket, melyek célja a gyermekek mentális, érzelmi és közösségi támogatása. Fontos számomra, hogy munkámmal és képességeimmel pozitív módon befolyásolhassam tanítványaim életét.</p>
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