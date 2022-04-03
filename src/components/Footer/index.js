import React from 'react';

function Footer() {
    return(
        <footer className='flex-row px-1'>
                <ul className='footer-items'>
                    <li className="footer-links">
                        <a href="https://github.com/CJThom98">
                            GitHub
                        </a>
                    </li>
                    <li className="footer-links">
                        <a href='https://www.linkedin.com/in/cory-thompson-a73a321a9/'>
                            LinkedIn
                        </a>
                    </li>
                    <li className="footer-links">
                        <a href="mailto: cory.thompson98@gmail.com">
                            Email
                        </a>
                    </li>
                </ul>
        </footer>
    );
}

export default Footer;