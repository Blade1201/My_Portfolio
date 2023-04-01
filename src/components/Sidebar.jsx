import React from 'react';

const Sidebar = ({alternateStyles, activeStyle, renderMenuItems}) => {

    return (
        <div className="sidebar">
            <div className="logo">
                <a style={alternateStyles[activeStyle]} href="#home"> <span>P</span>ortfólió </a>
            </div>

            <ul className="nav" style={alternateStyles[activeStyle]}>
                <ul className="nav">{renderMenuItems()}</ul>
            </ul>
        </div>
    );
};

export default Sidebar;