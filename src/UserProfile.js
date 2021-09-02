import React, { Component } from 'react';
import { getProfilePic } from  './Utils.js';
import './UserProfile.css'
class UserProfile extends Component {
    state = {  }


    
    
    render() { 
     const profile = getProfilePic();
     console.log(profile);
        return ( 

         
            <div className='profile'>
                <img className='profile-pic' width='60' src={profile} alt='avatar' />
                <p>Profile Picture</p>
            </div>

         

         );
    }
}
 
export default UserProfile;