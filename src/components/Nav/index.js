import React from 'react';

function Nav(props) {
    
    const {
        projectsSelected,
        setProjectsSelected
    } = props

    return(
        <header date-testid="header" className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Cory Thompson
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className={`mx-2 ${'navActive'}`}>
                        <a data-testid="about" href='#about' onClick={() => setProjectsSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className={`mx-2 ${'navActive'}`}>
                        <a href='#contact-form' onClick={() => setProjectsSelected(false)}>
                            Contact
                        </a>
                    </li>
                    <li className={`mx-2 ${projectsSelected && 'navActive'}`}>
                        <span onClick={() => setProjectsSelected(true)}>
                            Projects
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;