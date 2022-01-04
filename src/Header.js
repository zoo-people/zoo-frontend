import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import './Header.css'

class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <header>
        <section className='header-section'>
          <section className='titleSect'>
            <NavLink className='home' to='/' exact>
              <span className="titleText">
                ZO
                <img 
                  alt='logo' 
                  src="https://image.flaticon.com/icons/png/512/814/814513.png" 
                  className="rotate"
                />
                LANDER  
              </span>
            </NavLink>
          </section>  
          <section className='navSect'>
            <NavLink className='aboutus' to='/aboutus'>About</NavLink>
            <NavLink className='login' to='/login'>Log In</NavLink>
            <NavLink className='createaccount' to='/createaccount'>Create</NavLink>
          </section>
        </section>
      </header>
            

            

         );
    }
}
 
export default Header;