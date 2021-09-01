import React, { Component } from 'react';
import { getAnimalsByHabitat } from './Utils.js';


class HabitatDetail extends Component {
    state = { 
        animals: []
            }
        componentDidMount() {
            this.fetchAnimals()
        }

        fetchAnimals = async () => {
        
            const data = await getAnimalsByHabitat(this.props.token, this.props.match.params.id);
            this.setState({ animals: data });
            console.log(data);
        }

    render() { 
        return (
            <>     
                <h1>
                    animals
                 </h1>
                <div>
                    {this.state.animals.map((item) => (
                        <div>{item.name}</div>
                    ))} 
                    
                </div>
            </> );
    }
}
 
export default HabitatDetail;