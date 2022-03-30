import React from 'react';
import photo from "../../assets/img/band_browser.png";
import photo2 from "../../assets/img/pw_gen.png";
import photo3 from "../../assets/img/PNP.png";
import photo4 from "../../assets/img/bug_track.png";

function Projects() {

    return (
        <section className="">
            <h1>Projects</h1>
            <br />
            <div className=''>
                <h3>Band Browser</h3>
                <p>Technology: HTML, CSS, Javascript</p>
                <div className="flex-row">
                    <a href='https://cjthom98.github.io/band-browser/'>
                        <img 
                            src={photo}
                            alt="Front End Image"
                            className="img-thumbnail mx-1"
                        />
                    </a>
                </div>
            </div>
            <br />
            <div>
                <h3>Password Generator</h3>
                <p>Technology: Javascript</p>
                <div className="flex-row">
                    <a href="https://cjthom98.github.io/password_generator/">
                        <img 
                            src={photo2}
                            alt="PW Javascript Image"
                            className='img-thumbnail mx-1'
                        />
                    </a>
                </div>
            </div>
            <div>
                <h3>Full Stack</h3>
                <p>Technology: HTML, CSS, Javascript, MySQL, Express.js, Node.js</p>
                <div className="flex-row">
                    <a href="https://cjthom98.github.io/pawnee_parks_and_rec/">
                        <img 
                            src={photo3}
                            alt="Parks and Rec Image"
                            className="img-thumbnail mx-1"
                        />
                    </a>
                </div>
            </div>
            <div>
                <h3>Budget Tracker</h3>
                <p>Technology: MongoDB, Express.js, JQuery, Javascript</p>
                <div className="flex-row">
                    <a href='https://pacific-plains-57929.herokuapp.com/'>
                        <img 
                            src={photo4}
                            alt="Budget Tracker Image"
                            className="img-thumbnail mx-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;