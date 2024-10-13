import React from 'react';
import './eye.css';

const Eye = ({ className }) => {
    return (
        <>
            <div className={`eye ${className}`}>
                <div className="shut">
                    <span></span>
                </div>
                <div className="ball">
                </div>
            </div>
        </>
    );
};

export default Eye;