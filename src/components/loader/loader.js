import React from 'react';
import './loader.scss';

export const Loader = () => {
    return (
        <div className="loader">
            {Array(8).fill(null).map((item, index) => (
                <div key={index} />
            ))}
        </div>
    );
};
