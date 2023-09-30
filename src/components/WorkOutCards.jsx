import './WorkOutCards.css';
import React, { useState } from 'react';

function WorkOutCards({ id, title, image, description, explore }) {

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
                <h2 className="text-2xl font-semibold m-2.5">{title}</h2>
                <div className="workout_details">Description - {info}<span className='read' onClick={readClick}>{readMore ? 'show less' : 'read more'}</span></div>
                <div className="workout_details"><button onClick={() => explore(id)}>Start Sweating</button></div>
            </div>
        </div>
    )
}

export default WorkOutCards;