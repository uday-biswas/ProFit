import React from 'react';
import { GiGymBag } from 'react-icons/gi';

const Navbar = (props) => {
    return (
        <nav className="bg-blue-500 py-4">
            <div className="container mx-auto flex justify-between">
                <div className="flex space-x-3 text-white text-2xl font-bold"><div>ProFit</div><GiGymBag className="relative top-1" /></div>
                {/* Centered Buttons */}
                <div className="flex item-center space-x-4">
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
                <div className="flex items-center space-x-4">
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
