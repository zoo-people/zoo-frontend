import React, { Component } from 'react';
import { getAnimalsByHabitat, postZoo } from './Utils.js';


class HabitatDetail extends Component {

    state = { 
        animals: [],
        selectedIds: []
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
               animal_ids: this.state.selectedIds,
               
               
           });
           console.log(e.target)
          
   
           this.redirect();
           
       };

        redirect  = (e) => {
            this.props.history.push(`/zoo`)
        }

        handleSelected = async (id) => {
            if(this.state.selectedIds.includes(id)) {
                this.setState(prevState => ({ selectedIds: prevState.selectedIds.filter((item) => item !== id) }))
            } else {
                this.setState(prevState => ({ selectedIds: [...prevState.selectedIds, id] }))
            }
           console.log(id);
        }

    render() { 
        return (
            <>   
               
                <h1 className='animal-title'>
                    Animals
                </h1>
                <div>
                 
                <form onSubmit={this.handleSubmit}> 

                    {this.state.animals.map((item) => (
                        <> 
                        <div className='animal-card'>
                        <input type="checkbox" name="animal-pic" value={item.id} onChange={() => this.handleSelected(item.id)}>
                        </input>
                        <h1>{item.name}</h1>
                        <img className='animal-icon' src={item.icon_url} key={item.name} alt={item.name} />
                        </div>
                        </>
                    )
                    )} 
                    <button >Submit Animals</button>
                </form>
                </div>
                 
            </> );
    }
}
 
export default HabitatDetail;