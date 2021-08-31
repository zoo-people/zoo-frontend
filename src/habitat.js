import React, { Component } from 'react';
import HabitatItem from './habitat-item.js';
import { getHabitats, getAnimalsByHabitat } from './Utils.js'




class Habitat extends Component {
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



    fetchAnimals = async () => {
        
        const data = await getAnimalsByHabitat(this.props.token, {hab_id:this.state.radio_selected} );

        this.setState({ animals: data });
    }

    getHabitatId = (e) => {

        this.setState({radio_selected:e.target.value})
    }

    //  handleSubmit = async (e) => {
    //      e.preventDefault();
    //      const data = await chooseHabitat(this.props.token, {
    //         name:'x',
    //     });

    //      this.setState({ zoo_habitats:'x' })
    //      this.setState((prevState) => ({
    //          habitats: [...prevState.habitats, data],
    //      }));

    // handleSelected = async (habitat) => {
    //     habitat.submited = habitat.submited;
    //     await updateZoo()
    // }
    //  };
    render() { 
        return ( 
            <>
                <h1>Habitats</h1>
                    <div>
                        {this.state.habitats.map((item) => {
                            return <HabitatItem key={item.id} habitat={item}  onChange={this.getHabitatId}/>
                        })}
                    </div>
                    <button onClick={this.fetchAnimals}>Get Animals</button>
                
            </>
         );
    }
}
 
export default Habitat;