import React from 'react';

const About = ({alternateStyles, activeStyle}) => {

    function age(birthdate) {
        const today = new Date();
        const age = today.getFullYear() - birthdate.getFullYear() - 
                   (today.getMonth() + 1 < birthdate.getMonth() || 
                   (today.getMonth() + 1 === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
        return age;
      }
      
    const birthdate = new Date(2001, 1, 2); 
    const ageValue = age(birthdate);
    



    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2 style={alternateStyles[activeStyle]}> Rólam </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <div className="about-text padd-15">
                                <h3> Ördögien elhivatott, aki sohasem adja fel a kítűzött céljait </h3>
                                <p style={alternateStyles[activeStyle]}>Készségek:</p>
                                <p> Jó problémamegoldó képesség</p>
                                <p> Kommunikációs és szakmai együttműködés</p>
                                <p> Elkötelezettség és felelősségvállalás a szakmai fejlődésért</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="personal-info padd-15">
                                <div className="row">
                                    <div className="info-item padd-15">
                                        <p> Születésnap : <span> 2001. Január 2. </span> </p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p> Kor : <span> {ageValue} </span> </p>
                                    </div>
                                    <div className="info-item padd-15" style={alternateStyles[activeStyle]}>
                                        <p> Weboldalak : <br/> <a href="https://www.linkedin.com/in/molnar-aron/" target="blank"> Linkedin </a>
                                            <a href="https://github.com/Blade1201" target="blank"> Github </a>
                                            <a href="https://www.facebook.com/roman.holovacki/" target="blank"> Facebook </a>
                                        </p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p> Email : <span> molnar.aron1201@gmail.com </span> </p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p> Végzettség : <span> Informatika szakos tanár </span> <span> Szoftverfejlesztő és tesztelő </span> </p>
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
                                        <a style={alternateStyles[activeStyle]} href="https://drive.google.com/file/d/1JFuBYSCADWT-RdNWyGQcj269sFpvyfWf/view?usp=drive_link"
                                           target="blank" className="btn"> Önéletrajz letöltése </a>
                                    </div>
                                </div>

                            </div>
                            <div className="skills padd-15" style={alternateStyles[activeStyle]}>
                                <div className="row">
                                <div className="skill-item padd-15">
                                        <h5> SQL </h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: 75 + "%"}}></div>
                                            <div className="skill-percent">75%</div>
                                        </div>
                                    </div>
                                <div className="skill-item padd-15">
                                        <h5> Python </h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: 80 + "%"}}></div>
                                            <div className="skill-percent">80%</div>
                                        </div>
                                    </div>

                                <div className="skill-item padd-15">
                                        <h5> Java </h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: 80 + "%"}}></div>
                                            <div className="skill-percent">80%</div>
                                        </div>
                                    </div>

                                    <div className="skill-item padd-15">
                                        <h5> React </h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: 70 + "%"}}></div>
                                            <div className="skill-percent">70%</div>
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
                                        <h5> SCSS </h5>
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
                                        <div className="timeline shadow-dark" style={alternateStyles[activeStyle]}>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i>
                                                    2024-2030
                                                    <br/>
                                                    <i className="fa fa-school"></i>
                                                    <a href="https://www.nye.hu/" target="blank">Nyíregyházi Egyetem</a>
                                                </h3>
                                                <h4 className="timeline-title">
                                                    Informatika szakos tanár
                                                </h4>
                                                <p className="timeline-text">
                                                    Olyan szakember, aki a változó társadalmi szükségleteknek, a középiskolai nevelés-oktatás céljainak megfelelően képesek a tanulók személyiségének komplex fejlesztésére, a tanító teljes szerepkörének betöltésére.
                                                </p>
                                            </div>

                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i>
                                                    2021-2024
                                                    <br/>
                                                    <i className="fa fa-school"></i>
                                                    <a href="https://www.nyirszikszi.hu/" target="blank">Nyíregyházi SZC Széchenyi István Technikum és Kollégium</a>
                                                </h3>
                                                <h4 className="timeline-title">
                                                    Szoftverfejlesztő és tesztelő
                                                </h4>
                                                <p className="timeline-text">
                                                    Olyan szakember, aki képes webes és asztali alkalmazást (szoftvert) tervezni, fejleszteni, tesztelni és dokumentálni.
                                                    A programozási feladatokon túl adatbázisok tervezését és kezelését is elvégzi.
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
                                        <div className="timeline shadow-dark" style={alternateStyles[activeStyle]}>
                                        <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i>
                                                    2024-2030
                                                    <br/>
                                                    <i className="fa fa-school"></i>
                                                    <a href="https://www.nye.hu/" target="blank">Nyíregyházi Egyetem</a>
                                                </h3>
                                                <h4 className="timeline-title">
                                                    Informatika szakos tanár
                                                </h4>
                                                <p className="timeline-text">
                                                    Olyan szakember, aki a változó társadalmi szükségleteknek, a középiskolai nevelés-oktatás céljainak megfelelően képesek a tanulók személyiségének komplex fejlesztésére, a tanító teljes szerepkörének betöltésére.
                                                </p>
                                            </div>

                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i>
                                                    2021-2024
                                                    <br/>
                                                    <i className="fa fa-school"></i>
                                                    <a href="https://www.nyirszikszi.hu/" target="blank">Nyíregyházi SZC Széchenyi István Technikum és Kollégium</a>
                                                </h3>
                                                <h4 className="timeline-title">
                                                    Szoftverfejlesztő és tesztelő
                                                </h4>
                                                <p className="timeline-text">
                                                    Olyan szakember, aki képes webes és asztali alkalmazást (szoftvert) tervezni, fejleszteni, tesztelni és dokumentálni.
                                                    A programozási feladatokon túl adatbázisok tervezését és kezelését is elvégzi.
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
    );
};

export default About;