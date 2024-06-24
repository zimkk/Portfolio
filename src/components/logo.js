
import React from 'react';
import '../assets/img/logo.png'; // Import the CSS file

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Zimkk Systems Logo" className="logo-image" />
            <div className="logo-text">
                ZIMKK SYSTEMS
            </div>
        </div>
    );
};

export default Logo;
