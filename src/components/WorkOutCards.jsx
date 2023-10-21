import { NavLink } from 'react-router-dom';
import './WorkOutCards.css';
import React, { useState } from 'react';

function WorkOutCards({ id, title, tag, image, description, explore }) {

    const [readMore, setReadMore] = useState(false);

    const readClick = () => {
        setReadMore(!readMore);
    }

    let info = '';
    if (description.length > 50) {
        info = readMore ? `${description}` : `${description.substring(0, 50)}...`;
    }
    else {
        info = readMore ? `${description}` : `${description}...`;
    }

    return (
        <div className="workout_cards text-white">
            <div className="workout_image">
                <img src={image} alt="workout_image" />
            </div>
            <div>
                <div className="m-2.5">
                <span className="text-2xl font-semibold">{title}</span>
                <span className="w-fit ml-2.5 p-1 rounded-lg bg-gray-700">{tag}</span></div>
                <div className="workout_details">Description - {info}<span className='read' onClick={readClick}>{readMore ? 'show less' : 'read more'}</span></div>
                <div className="workout_details my-[10px]"><NavLink className="py-[5px] px-[10px] cursor-pointer my-[10px] bg-blue-500 rounded-md " to="/explore" onClick={() => explore(id)}>Start Sweating</NavLink></div>
            </div>
        </div>
    )
}

export default WorkOutCards;