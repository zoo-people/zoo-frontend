import React, { Component } from 'react';
import HabitatItem from './habitat-item.js';

class Habitat extends Component {
    state = { 
        habitats: [],
        
     }

     componentDidMount = async () => {
         this.fetchHabitats()
     }

     fetchHabitats = async () => {
         const data = getHabitats(this.props.token);
         this.setState({ habitats: data })
     };

     handleSubmit = async (e) => {
         e.preventDefault();
         const data = await chooseHabitat(this.props.token, {
            name:'x',
        });

         this.setState({ zoo_habitats:'x' })
         this.setState((prevState) => ({
             habitats: [...prevState.habitats, data],
         }));

    // handleSelected = async (habitat) => {
    //     habitat.submited = habitat.submited;
    //     await updateZoo()
    // }
     };
    render() { 
        return ( 
            <>
                <h1>Habitats</h1>
                    <div>
                        {this.props.habitats.map((item) => {
                            return <HabitatItem key={item.habitat} choice={item} url={item.image} />
                        })}
                    </div>
                
            </>
         );
    }
}
 
export default Habitat;