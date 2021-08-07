import React from 'react';

const Footer = () => {

    const yr = new Date().getFullYear();
    console.log("yr" + yr);

    return (
        <div>
            <footer>
                <p> Copyright © {yr}</p>
            </footer>
        </div>
    )
}

export default Footer;