import React from "react";
import "./styles/main.css";
import "./styles/sidebar.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/portfolio.css";
import "./styles/contact.css";
import "./styles/style-switcher.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import StyleSwitcher from "./components/StyleSwitcher";
import { useScrollToggler, useStyleChanger, useDayNightToggler, useMenuItemClick } from "./scripts/scripts.js";


const App = () => {
    const [isOpen, handleToggle] = useScrollToggler();
    const [activeStyle, handleStyleChange, alternateStyles] = useStyleChanger();
    const [isDay, handleClick] = useDayNightToggler();
    const [renderMenuItems] = useMenuItemClick();




  return (
      <div className="main-container">
          <Sidebar alternateStyles={alternateStyles} activeStyle={activeStyle} renderMenuItems={renderMenuItems}/>
          <div className="main-content">
              <Home alternateStyles={alternateStyles} activeStyle={activeStyle} />
              <About alternateStyles={alternateStyles} activeStyle={activeStyle}/>
              <Portfolio alternateStyles={alternateStyles} activeStyle={activeStyle}/>
              <Contact alternateStyles={alternateStyles} activeStyle={activeStyle}/>
          </div>
          <StyleSwitcher handleStyleChange={handleStyleChange} isDay={isDay} handleClick={handleClick} handleToggle={handleToggle} isOpen={isOpen}/>
      </div>
  );
}

export default App;
