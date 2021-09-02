import React, { Component } from 'react';
import './Auth.css';
import { getToken } from './Utils.js';

class Authorization extends Component {
    state = { email: '', password: '' };
    getType = () => {
        return this.props.type === 'signin' ? 'Log In' : 'Create Account';
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password,
            },
            this.props.type
        );
        this.props.setToken(token);
        
        this.props.history.push('/habitats')
    }

    render() { 
        return ( 
            <>
            
            <section className='log-section'>
            <div className='title-div'>
            <h1 className='log-title'>{this.getType()}</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="form">
                    <label>Email: </label>
                    <input
                        type='email'
                        placeholder='Email'
                        onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <div className="form">
                    <label>Password: </label>
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <div className='btn-div'>
                <button className='account-btn'>{this.getType()}</button>
                </div>
            </form>
            </section>
            </>

         );
    }
}
 
export default Authorization;