import React from "react";
import './Trick.css';

const Trick = ({stance, name, obstacle, tutorial}) => {
    return (
    <article className='trick'>
        <h2>{stance + ' ' + name}</h2>
        <p>Obstacle: {obstacle}</p>
        <p>Link to Tutorial:</p>
        <p>{tutorial}</p>
    </article>
    )
}

export default Trick;