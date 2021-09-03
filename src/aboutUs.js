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
                    <p>description</p>
                </div>
                <div className='about-us'>
                    <h1>Justin Soto</h1>
                    <img className='headshot' alt='developer' src='https://media-exp1.licdn.com/dms/image/C4D03AQE921pYwVRg2A/profile-displayphoto-shrink_200_200/0/1624289622986?e=1635984000&v=beta&t=WL1Cx29mU0Sd5Wq5K6cnkuntvVFPYSshkM9Ogo2p04o'></img>
                    <p>description</p>
                </div>
                <div className='about-us'>
                    <h1>Dylan Greathouse</h1>
                    <img className='headshot' alt='developer' src='https://media-exp1.licdn.com/dms/image/C4E03AQFuaGAwWaASfw/profile-displayphoto-shrink_200_200/0/1625508048937?e=1635984000&v=beta&t=LMUMDYsO4a3HY2bbpyh0z3_KjN_FBlevbwkc84i7ruI'></img>
                    <p>description</p>
                </div>
                <div className='about-us'>
                    <h1>Joseph Brown</h1>
                    <img className='headshot' alt='developer' src='https://media-exp1.licdn.com/dms/image/C5603AQH457Wk6hTvBw/profile-displayphoto-shrink_800_800/0/1625424155629?e=1635984000&v=beta&t=Cd2LHMmx6zSWGKod8sBQZ6ls7GkkJl2nhtPtdJk6RcU'></img>
                    <p>description</p>
                </div>
            </section>
        </> );
    }
}
 
export default AboutUs;