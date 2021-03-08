import React from 'react';

import './Box.css';

const Box = ({ image, alt, heading, para }) => {
    return (
    <>
        <div className="image">
            <img className="image1" src={image} alt={alt}/>
        </div>
        <div className="text">
            <h4>{heading}</h4>
            <p>{para}</p>
        </div>
    </>
    )
}

export default Box;
 