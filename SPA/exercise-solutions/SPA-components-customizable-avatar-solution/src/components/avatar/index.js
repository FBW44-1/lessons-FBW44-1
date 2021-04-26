import React from 'react';
import './styles.css';

function Avatar({
    size='m',
    src,
    type='square',
    alt='avatar'
    }) {
    return (
        <div className={`avatar avatar-${size} avatar-${type}`}>
            <img src={src} alt={alt} />
        </div>  
    );
}

export default Avatar;