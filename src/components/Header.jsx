import React, { useState, useEffect } from 'react';
import logo from '../assets/Vector.png';  
import addIcon from '../assets/galaAdd0.png'; 
import settingsIcon from '../assets/cog.png'; 
import bellIcon from '../assets/bell.png';  
import userIcon from '../assets/Avatar.png'; 
import ModeBtn from "../components/Mode_btn";

const Header = () => {
    const [activeItem, setActiveItem] = useState('Cases');
    const [darkMode, setDarkMode] = useState(false);

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
        <header className={`flex justify-between items-center p-4 ${darkMode ? 'bg-[#060125] text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className="flex items-center">
                <img src={logo} alt="Jurident Logo" className="h-8 mr-4" />
                <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>JURIDENT</span>
            </div>
            <nav className="flex gap-8">
                {['Cases', 'Services', 'News', 'About Us'].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className={`relative text-base p-2 ${
                            activeItem === item
                                ? `after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-500 ${darkMode ? 'text-white' : 'text-gray-900'}`
                                : darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                        onClick={() => setActiveItem(item)}
                    >
                        {item}
                    </a>
                ))}
            </nav>
            <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <img className="w-6" src={addIcon} alt="Add" />
                </div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <img className={`w-6 ${darkMode ? 'filter invert' : ''}`} src={settingsIcon} alt="Settings" />
                </div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <img className={`w-6 ${darkMode ? 'filter invert' : ''}`} src={bellIcon} alt="Notifications" />
                </div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <img className={`w-6 ${darkMode ? 'filter invert' : ''}`} src={userIcon} alt="User" />
                </div>
                <ModeBtn />
            </div>
        </header>
    );
};

export default Header;
