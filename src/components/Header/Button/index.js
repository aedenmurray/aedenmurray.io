import React from 'react';

const Button = ({ text, icon, href }) => (
    <a href={href} target="_blank" rel="noopener">
        <button className="main-button">
            <div className="icon-wrapper">
                <ion-icon name={icon} />
            </div>
            <div className="text-wrapper">
                <p>{text}</p>
            </div>
        </button>
    </a>
);

export default Button;
