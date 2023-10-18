import React from 'react';
import { GiGymBag, GiHamburgerMenu } from 'react-icons/gi';
import {VscMenu} from 'react-icons/vsc';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [props.isMenu]);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
        console.log(`toggled to ${isMenuOpen}`);
    };

    return (
        <nav className="w-full h-16">
            <div className="z-10 bg-blue-500 p-1 py-4 flex fixed justify-between w-full h-16" onClick={() => setIsMenuOpen(false)}>
                <div className="flex space-x-3 text-white text-2xl font-bold"><div>ProFit</div><GiGymBag className="relative top-1" /></div>
                <div className="small"><VscMenu className="hover:cursor-pointer" onClick={toggleMenu}/> </div>
                <div className={`${isMenuOpen && "open"} hidden`}>
                    {props.data.map((item, index) => (
                        <div >
                        <div className="m-auto w-20"><button
                            key={item.id}
                            className="text-white font-bold hover:text-blue-700 w-20 m-auto p-1 transition duration-300 ease-in-out"
                            onClick={() => props.active(item.id)}
                        >
                            {item.id===props.active_id ? <span className="text-blue-800">{item.name}</span> : item.name}
                        </button></div>
                        {index !== 7 && <hr className="border-1 border-blue-500" />} 
                        </div>
                    ))}
                </div>

                {/* Centered Buttons */}
                <div className="big flex item-center space-x-4">
                    {props.data.slice(0, 6).map((item) => (
                        <button
                            key={item.id}
                            className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
                            onClick={() => props.active(item.id)}
                        >
                            {item.id===props.active_id ? <span className="text-blue-800">{item.name}</span> : item.name}
                        </button>
                    ))}
                </div>
                {/* Right-Aligned Buttons */}
                <div className="flex big items-center space-x-4">
                {props.data.slice(6, 8).map((item) => (
                        <button
                            key={item.id}
                            className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
                            onClick={() => props.active(item.id)}
                        >
                            {item.id===props.active_id ? <span className="text-blue-800">{item.name}</span> : item.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
