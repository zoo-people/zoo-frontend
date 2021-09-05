import React, { Component } from 'react';

import'./aboutUs.css';

class AboutUs extends Component {
    state = { 

        name:'x',
        img:'y',
        description:'z'
     }
    render() { 
        return ( <>
            <section className='about-section'>
                <div className='about-us'>
                    <h1>Evon Perez</h1>
                    <img className='headshot' alt='developer' src='https://media-exp1.licdn.com/dms/image/C4E03AQHLUlJoJru0jw/profile-displayphoto-shrink_200_200/0/1629895114670?e=1635984000&v=beta&t=dZpIaUVdOLWxCpaA8jEBFefmMcGhMFKVs5-srYsYy5w'></img>
                    <p>
                    Software Engineer with strong problem solving and communication skills . Detail-oriented, quick learner, and big believer in team work.
Fun Fact: On my free time, I like to paint/draw.

                    </p>
                    <a href='https://www.linkedin.com/in/evon-c-perez-67b9a0b4/'><img className='li-icon' key='linkedin' src='https://image.flaticon.com/icons/png/128/1384/1384030.png' alt='LinkedIn-icon'   />LinkedIn Profile</a>
                  
                </div>
                <div className='about-us'>
                    <h1>Justin Soto</h1>
                    <img className='headshot' alt='developer' src='https://media-exp1.licdn.com/dms/image/C4D03AQE921pYwVRg2A/profile-displayphoto-shrink_200_200/0/1624289622986?e=1635984000&v=beta&t=WL1Cx29mU0Sd5Wq5K6cnkuntvVFPYSshkM9Ogo2p04o'></img>
                    <p>Software Developer who loves plants and burritos.
                    Software engineer, photographer, and citizen scientist with 10+ years of management experience across multiple disciplines. I have an eye for detail, and I’m always looking ahead to the next challenge. </p>
                    <a href='https://www.linkedin.com/in/justinwsoto/'><img className='li-icon' key='linkedin' src='https://image.flaticon.com/icons/png/128/1384/1384030.png' alt='LinkedIn-icon'   />LinkedIn Profile</a>
                   
                </div>
                <div className='about-us'>
                    <h1>Dylan Greathouse</h1>
                    <img className='headshot' alt='developer' src='https://media-exp1.licdn.com/dms/image/C4E03AQFuaGAwWaASfw/profile-displayphoto-shrink_200_200/0/1625508048937?e=1635984000&v=beta&t=LMUMDYsO4a3HY2bbpyh0z3_KjN_FBlevbwkc84i7ruI'></img>
                    <p>Software Engineer! Developing a passion for front and back end web development. Love any opportunity to design and create. Always looking for a chance to learn and be a better version of myself than I was the day before. Strong interest in game design and cooking.
 Fun fact: I love to collect cook books</p>
                    <a href='https://www.linkedin.com/in/dylan-greathouse-79982a211/'><img className='li-icon' key='linkedin' src='https://image.flaticon.com/icons/png/128/1384/1384030.png' alt='LinkedIn-icon'   />LinkedIn Profile</a>
                  
                </div>
                <div className='about-us'>
                    <h1>Joseph Brown</h1>
                    <img className='headshot' alt='developer' src='https://media-exp1.licdn.com/dms/image/C5603AQH457Wk6hTvBw/profile-displayphoto-shrink_800_800/0/1625424155629?e=1635984000&v=beta&t=Cd2LHMmx6zSWGKod8sBQZ6ls7GkkJl2nhtPtdJk6RcU'></img>
                    <p>Full stack software engineer. Proficient in React, HTML, CSS and interested in new object and script languages. Passionate about creativity in all forms, bilingual, musician and always interested in a new library.  Perpetrator of tech, music, and all things outdoors. Oriented towards sustainability and building a better world. My favorite animal is the red fox. Here is a link to my linkedin profile</p>
                    <a href='https://www.linkedin.com/in/joseph-k-brown/2a211/'><img className='li-icon' key='linkedin' src='https://image.flaticon.com/icons/png/128/1384/1384030.png' alt='LinkedIn-icon'   />LinkedIn Profile</a>
                  
                </div>
            </section>
        </> );
    }
}
 
export default AboutUs;