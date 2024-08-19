import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/Vector.png';  
import addIcon from '../assets/galaAdd0.png'; 
import settingsIcon from '../assets/cog.png'; 
import bellIcon from '../assets/bell.png';  
import userIcon from '../assets/Avatar.png'; 
import ModeBtn from "../components/Mode_btn";
import hammenu from '../assets/icons8-menu-50.png';
import cross from '../assets/icons8-cross-30.png';

const Header = () => {
    const [activeItem, setActiveItem] = useState('Cases');
    const [darkMode, setDarkMode] = useState(false);
    const [hamStatus, setHamStatus] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleHamStatus = () => {
        setHamStatus(!hamStatus);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50); // Adjust 50 to your preference
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleDarkModeChange = () => {
            setDarkMode(document.documentElement.classList.contains('dark'));
        };

        handleDarkModeChange();

        const observer = new MutationObserver(handleDarkModeChange);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <header className={`header ${darkMode ? 'dark-mode' : 'light-mode'} ${isSticky ? 'sticky' : ''}`}>
            <div className="logo-container">
                <img src={logo} alt="Jurident Logo" className="logo" />
                <h1 className="brand-name">JURIDENT</h1>
            </div>
            <nav className={`nav ${hamStatus ? 'active' : ''}`}>
                {['Cases', 'Services', 'News', 'About Us'].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className={`nav-link ${darkMode ? 'dark-mode' : 'light-mode'} ${activeItem === item ? 'active' : ''}`}
                        onClick={() => setActiveItem(item)}
                    >
                        {item}
                    </a>
                ))}
            </nav>
            <div className="icon-container">
                <div className="icon">
                    <img src={addIcon} alt="Add" />
                </div>
                <div className="icon">
                    <img src={settingsIcon} alt="Settings" className={darkMode ? 'dark-mode' : ''} />
                </div>
                <div className="icon">
                    <img src={bellIcon} alt="Notifications" className={darkMode ? 'dark-mode' : ''} />
                </div>
                <div className="icon">
                    <img src={userIcon} alt="User" className={darkMode ? 'dark-mode' : ''} />
                </div>
                <div className="mode-btn-container">
                    <ModeBtn />
                </div>
                <div className="mobilescreen" onClick={toggleHamStatus}>
                    <img src={hamStatus ? cross : hammenu} className="hamimg" alt="Menu Icon" />
                </div>
            </div>
        </header>
    );
};

export default Header;
