import React from 'react';

const StyleSwitcher = ({handleStyleChange, isDay, handleClick, handleToggle, isOpen}) => {

    return (
        <div className={`style-switcher${isOpen ? " open" : ""}`}>
            <div className="style-switcher-toggler s-icon" onClick={handleToggle}>
                <i className="fas fa-cog fa-spin"></i>
            </div>

            <div className="day-night s-icon" onClick={handleClick}>
                <i className={`fas ${isDay ? "fa-moon" : "fa-sun"}`}></i>
            </div>

            <h4> Témák </h4>

            <div className="colors">
                <span className="color-1" onClick={() => handleStyleChange("red")}></span>
                <span className="color-2" onClick={() => handleStyleChange("orange")}></span>
                <span className="color-3" onClick={() => handleStyleChange("default")}></span>
                <span className="color-4" onClick={() => handleStyleChange("blue")}></span>
                <span className="color-5" onClick={() => handleStyleChange("pink")}></span>
            </div>
        </div>
    );
};

export default StyleSwitcher;