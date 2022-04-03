import React from 'react';
import ProPhoto from '../../assets/img/profile_picture.jpg';

function About() {
    return (
        <section className='my-5'>
            <h1 id='about'>About Me</h1>
            <img src={ProPhoto} alt="Profile Picture of Cory Thompson" className="img-profile mx-1"></img>
            <p className="about-text">
                I graduated from John Brown University in May of 2020 with my Bachelors of Arts degree in History with a Museum Studies Minor. Since then, I have been working to try to get a jumpstart on a career. Due to graduating in the middle of the COVID-19 Pandemic, it has been a difficult challenge but there hasn't been any lack of trying. <br />
                <br />
                I started out working as a substitute teacher for my local school districts as a way to explore education as a possible career route. I did that for about a year but came to the decision that education wasn't for me. I got a new job working as a customer service agent for Sykes Enterprises, INC., to see if customer service was my career path. After about three months, I left the position after coming to a similar conclusion that customer service wasn't for me. I briefly returned to substituting until I learned about the full stack web developer boot camp from UT Austin. <br />
                <br />
                I enrolled in the program in October 2021 and it has been an extrodinary experience. I've learned the basics of becoming a full stack developer, familiarizing myself with technologies such as HTML, CSS, Javascript, APIs, Express.js, Node.js, MongoDB, React.js, and MERN. I believe that this education will guide me toward a career that I know is right for me. I hope to start out as a front end developer and eventually become full stack once I gain more experience. <br />
                <br />
                However, my ultimate goal is to eventually marry my knowledge of web development with my love for history. I hope to one day use the skills and knowledge I've earned to help the museum industry as they continue to grow and develop their technologies for exhibitions. <br />
            </p>
            <a href="../../resume/Cory_Thompson_Resume_2020.pdf" download="newfilename">
                Resume
            </a>
        </section>
    );
}

export default About;