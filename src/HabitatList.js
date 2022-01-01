import React, { Component } from 'react';
import HabitatItem from './habitat-item.js';
import { getHabitats } from './Utils.js'


import './Habitat-item.css';




class HabitatList extends Component {
    state = { 
        habitats: [],
        hab_id:0,
        animals:[],
        radio_selected:''
        
     }

     componentDidMount = async () => {
          this.fetchHabitats();
     }

     fetchHabitats = async () => {
         const data = await getHabitats(this.props.token);

         this.setState({ habitats: data });
     };



   

    getHabitatId = (e) => {

        this.setState({radio_selected:Number(e.target.value)})

    }

    redirect  = (e) => {
        this.props.history.push(`/habitats/${this.state.radio_selected}`)
    }

    render() { 
        return ( 
            <>
                <h1 className='habitat-h1'>Choose a Habitat!</h1>
                    <div className='habitat-div'>
                        {this.state.habitats.map((item) => {
                            return <HabitatItem key={item.id} habitat={item}  onChange={this.getHabitatId}/>
                        })}
                    </div>
                    <div className='habitat-btn'>
                    <button onClick={this.redirect}>Get Animals</button>
                    </div>
                
            </>
         );
    }
}
 
export default HabitatList;