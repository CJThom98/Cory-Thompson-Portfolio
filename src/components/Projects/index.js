import React from 'react';
import photo from "../../assets/img/band_browser.png";
import photo2 from "../../assets/img/pw_gen.png";
import photo3 from "../../assets/img/PNP.png";
import photo4 from "../../assets/img/bug_track.png";
import photo5 from "../../assets/img/chore_wheel.png";

function Projects() {

    return (
        <section>
            <h1>Projects</h1>
            <br />
            <div className=''>
                <h3>Band Browser</h3>
                <p>Technology: HTML, CSS, Javascript</p>
                <a href="https://github.com/CJThom98/band-browser">
                    <p>Github Repo</p>
                </a>
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
                <a href="https://github.com/CJThom98/password_generator">
                    <p>Github Repo</p>
                </a>
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
                <h3>Pawnee Parks and Recreation</h3>
                <p>Technology: HTML, CSS, Javascript, MySQL, Express.js, Node.js</p>
                <a href="https://github.com/CJThom98/pawnee_parks_and_rec">
                    <p>Github Repo</p>
                </a>
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
                <a href="https://github.com/CJThom98/track-my-money">
                    <p>Github Repo</p>
                </a>
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
            <div>
                <h3>Wheel of Chore Prototype</h3>
                <p>Technology: MongoDB, Express.js, React, HTML, CSS, Javascript</p>
                <a href="https://github.com/teresacabell/wheel-of-chore">
                    <p>Github Repo</p>
                </a>
                <div className="flex-row">
                    <a href="https://teresacabell.github.io/wheel-of-chore/">
                        <img 
                            src={photo5}
                            alt="Wheel of Chore Image"
                            className="img-thumbnail mx-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;