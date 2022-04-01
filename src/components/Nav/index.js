import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    const categories = [
        {
          name: "front end",
          description:
            "create an interactive front end project with a group"
        },
        { 
          name: "generator", 
          description: "create the javascript for a password generator site"
        },
        { 
          name: "full stack", 
          description: "create a full stack site with a group" 
        },
        { 
          name: "budget", 
          description: "create offline capablities for a budget tracker site" 
        },
    ];
    
    const handleClick = () => {
        console.log("click handled")
    }

    return(
        <header date-testid="header" className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Cory Thompson
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="about" href='#about' onClick={() => handleClick()}>
                            About Me
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick()}>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name} >
                            <span onClick={() => { handleClick(); }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;