import React, { Component } from 'react';



class HabitatItem extends Component {


    render() {

        const {name, image, id} = this.props.habitat
        const {onChange} =this.props
        return(
            <div className='habitat-div'>
                <input type='radio' className='habitat-btn' name='habitat-select' value={id} onChange={onChange}/>{name}
                    <img className='habitat-img' src= {image} alt={name} />
                
            </div>
        )
    }
}

export default HabitatItem