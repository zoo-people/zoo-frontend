import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
            <section className='header-section'>
            <div className='header-div'>
            <NavLink className='home' to='/' exact>
            <span className="App-header-text">
ZOOLANDER
</span>
            </NavLink>
</div>

      
            

            
            <section className='icons'>
            <NavLink className='aboutus' to='/aboutus'>About Us</NavLink>
            <section className='log-auth'>
            <NavLink className='login' to='/login'>Log In</NavLink>
            <NavLink className='createaccount' to='/createaccount'>Create Account</NavLink>
            
            </section>
            </section>
            </section>
            </header>

         );
    }
}
 
export default Header;