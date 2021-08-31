import React, { Component } from 'react';


class HabitatItem extends Component {


    render() {

        const {name, image} = this.props.habitat
        return(
            <div>
                <input type='radio' className='habitat-btn'/>
                    <img src= {image} alt={name}/>
                
            </div>
        )
    }
}

export default HabitatItem