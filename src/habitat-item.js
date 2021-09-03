import React, { Component } from 'react';



class HabitatItem extends Component {


    render() {

        const {habitat, image, id} = this.props.habitat
        const {onChange} =this.props
        return(
            <div className='item-div'>
                <input type='radio' className='habitat-btn' name='habitat-select' value={id} onChange={onChange}/>{habitat}
                    <img className='habitat-img' src= {image} alt={habitat} />
                
            </div>
        )
    }
}

export default HabitatItem