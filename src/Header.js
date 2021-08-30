import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
            <section className='header-section'>
           
            <NavLink className='home' to='/' exact>Home</NavLink>
            
            
            <NavLink className='login' to='/login'>Log In</NavLink>
            <NavLink className='createaccount' to='/createaccount'>Create Account</NavLink>

            <section className='icons'>
            <NavLink  to='/twitter'><img className='twitter-icon' key='twitter' src='https://image.flaticon.com/icons/png/512/1384/1384033.png' alt='twitter-icon'  width />
            </NavLink>

            <NavLink  to='/linkedin'><img className='li-icon' key='linkedin' src='https://image.flaticon.com/icons/png/128/1384/1384030.png' alt='LinkedIn-icon'  width />
            </NavLink>
            </section>
            </section>
            </header>

         );
    }
}
 
export default Header;