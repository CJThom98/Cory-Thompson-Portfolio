import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/img/band_browser.png";

function Projects() {
    const currentCategory = {
        name: "Front End",
        description:
            "Technology: HTML, CSS, Javascript"
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div className="flex-row">
                <a href='https://cjthom98.github.io/band-browser/'>
                    <img 
                        src={photo}
                        alt="Fron End Image"
                        className="img-thumbnail mx-1"
                    />
                </a>
            </div>
        </section>
    );
}

export default Projects;