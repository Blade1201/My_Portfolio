import { useState, useEffect } from "react";

export const useScrollToggler = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    return [isOpen, handleToggle];
};



export const useStyleChanger = () => {
    const [activeStyle, setActiveStyle] = useState("default");

    const handleStyleChange = (style) => {
        setActiveStyle(style);
    };

    const alternateStyles = {
        default: {
            "--skin-color": "#37b182",
        },
        red: {
            "--skin-color": "#ec1839",
        },
        orange: {
            "--skin-color": "#fa5b0f",
        },
        blue: {
            "--skin-color": "#1854b4",
        },
        pink: {
            "--skin-color": "#f021b2",
        },
    };

    return [activeStyle, handleStyleChange, alternateStyles];
};



export const useDayNightToggler = () => {
    const [isDay, setIsDay] = useState(false);

    const handleClick = () => {
        const icon = document.querySelector(".day-night i");
        icon.classList.toggle("fa-sun");
        icon.classList.toggle("fa-moon");
        document.body.classList.toggle("sun");
        setIsDay(!isDay);
    };

    return [isDay, handleClick];
};



export const useMenuItemClick = () => {
    const [activeItem, setActiveItem] = useState("home");

    const handleItemClick = ({ name }) => setActiveItem(name);

    const menuItems = [
        { name: "home", label: "Kezdőlap", icon: "home" },
        { name: "about", label: "Rólam", icon: "user" },
        { name: "portfolio", label: "Munkáim", icon: "briefcase" },
        { name: "contact", label: "Elérhetőség", icon: "comments" },
    ];

    const renderMenuItems = () =>
        menuItems.map(({ name, label, icon }) => (
            <li key={name}>
                <a
                    href={`#${name}`}
                    className={activeItem === name ? "active" : ""}
                    onClick={() => handleItemClick({ name })}
                >
                    <i className={`fa fa-${icon}`}></i>
                    {label}
                </a>
            </li>
        ));

    return [renderMenuItems];
};
