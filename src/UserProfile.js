import React, { Component } from 'react';
import { getProfilePic } from  './Utils.js';
import './UserProfile.css'
class UserProfile extends Component {
    state = {  }    
    
  render() { 
    const profile = getProfilePic();
      return (          
        <div className='profile'>
            <img 
              className='profile-pic' 
              src={profile} 
              alt='avatar' 
            />
            <p className='zoo-p'>Your Zoo</p>
        </div>
      );
  }
}
 
export default UserProfile;