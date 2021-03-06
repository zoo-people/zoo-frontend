import React, { Component } from 'react';
import { getZoos, deleteAnimal } from './Utils.js'
import './zoo.css';
import UserProfile from './UserProfile.js';
import './UserProfile.css';


class Zoo extends Component {
    state = { 
        isActive: false,
        zoos: [],
        selectedIds:[]
    }
    componentDidMount() {
        this.fetchZoos()
        console.log(this.state.zoos)
    }
    
    fetchZoos = async () => {
        const data = await getZoos(this.props.token);
        this.setState({ zoos: data})
        
    }

    handleToggle = () => {
       
        this.setState({ isActive: !this.state.isActive });
    };

    handleDelete = (e) => {
        this.setState({ selectedIds: [...this.state.selectedIds, e.target.value] })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.selectedIds.map(async(item) => {
            console.log('HELLO I AM HEREa')
            await deleteAnimal(this.props.token, {
               user_id: 1,
               animal_id: item,
            });
            this.fetchZoos();
        })
 
               
        console.log(this.state.selectedIds);

       console.log(e.target)
      

       this.redirect();
       
   };
   redirect  = (e) => {
       this.props.history.push(`/zoo`)
   }
   redirectHabitat  = (e) => {
    this.props.history.push(`/habitats`)
}
   
    render() { 
        const isActive = this.state.isActive
        return (  
            <>
            <UserProfile />
            <form>
                <section className='zoo-section'>
            {this.state.zoos.map((item) => (
                <><div
                    className='zoo-div' key={item.animal_id}>
                    <img className='habitat-background' src={item.image} key={item.name} alt={item.name} />

                    <img className='animal-class' src={item.icon_url} alt={item.name} />

                    <section className='animal-info'>
                        
                    <input type='checkbox' className={isActive ? 'isActive' : 'inActive' } value={item.animal_id} onChange={this.handleDelete}></input>

                    <h1 className='animal-name'>{item.name}</h1>
                    <h2>{item.species_name}</h2>
                    <h3>{item.diet}</h3>
                    <p>{item.description}</p>
                    </section>

              
                </div>
                
                </>
               
            ))}
            </section>
            <button onClick={this.handleSubmit} id="submit" className={isActive ? 'isActive' : 'inActive'}>Update</button>
            </form>
            <button onClick={this.handleToggle}>Delete</button>
            <button onClick={this.redirectHabitat}>Add More Animals</button>
            
            </>
            //delete toggle/button converts divs to form
            //on change reveals checkboxes
            //new submit to remove animals from zoo
            //cancel form
        );
    }
}
 
export default Zoo;