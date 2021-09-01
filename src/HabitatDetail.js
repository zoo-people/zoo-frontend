import React, { Component } from 'react';
import { getAnimalsByHabitat, postZoo } from './Utils.js';
import './Habitat-item.css';


class HabitatDetail extends Component {
    state = { 
        animals: [],
        animalsSelected: false
    
            }
        componentDidMount() {
            this.fetchAnimals()
        }

        fetchAnimals = async () => {
        
            const data = await getAnimalsByHabitat(this.props.token, this.props.match.params.id);
            this.setState({ animals: data });
            console.log(data);
        }
        handleSubmit = async (e) => {
                 e.preventDefault();
                 await postZoo(this.props.token, {
                   
                    user_id: 1,
                    animal_ids: this.state.animals,
                    
                    
                });
               
        
                this.redirect();
                
            };
            redirect  = (e) => {
                this.props.history.push(`/zoos/${this.state.animals.habitat_id}`)
            }
            handleSelected = async (e) => {
               this.setState({animals:[...this.state.animals, e.target.value]})
            }
    render() { 
        return (
            <>   
               
                <h1>
                    Animals
                </h1>
                <div>
                <form onSubmit={this.handleSubmit}> 
              
                    {this.state.animals.map((item) => (
                        <>
                        <div className='animal-card'>
                        <h1>{item.name}</h1>
                        <input type="checkbox" name="animal-pic" value={item.id} onChange={this.handleSelected} >
                        </input>
                        <img src={item.icon_url} key={item.name} alt={item.name} />
                        </div>
                        </>
                    ))} 
                    <button >Submit Animals</button>
                </form>
                </div>
                 
            </> );
    }
}
 
export default HabitatDetail;