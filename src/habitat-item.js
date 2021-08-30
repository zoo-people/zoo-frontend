import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HabitatItem extends Component {
    render() {
        return(
            <div>
                <input type='radio' className='habitat-btn'>
                    <img src= {this.props.habitat.image} alt={this.props.habitat.name}/>
                </input>
            </div>
        )
    }
}

export default HabitatItem