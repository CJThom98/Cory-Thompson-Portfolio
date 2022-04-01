import React from 'react';

function Footer() {
    return(
        <footer className='flex-row px-1'>
                <ul className='footer-items'>
                    <li>
                        <a href="https://github.com/CJThom98">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/cory-thompson-a73a321a9/'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="mailto: cory.thompson98@gmail.com">
                            Email
                        </a>
                    </li>
                </ul>
        </footer>
    );
}

export default Footer;