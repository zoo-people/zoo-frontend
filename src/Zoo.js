import React, { Component } from 'react';
import { getZoos, deleteAnimal } from './Utils.js'




class Zoo extends Component {
    state = { 
        isActive: false,
        zoos: [],
        selectedIds:[]
    }

    componentDidMount() {
        this.fetchZoos()
    }

    fetchZoos = async () => {
        const data = await getZoos(this.props.token);
        this.setState({ zoos: data});
    }

    handleToggle = (e) => {
        e.preventDefault();
        this.setState({ isActive: !this.state.isActive });
    };

    handleDelete = (e) => {
        this.setState({ selectedIds: [...this.state.selectedIds, e.target.value] })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await deleteAnimal(this.props.token, {
           
           user_id: 1,
           animal_ids: this.state.selectedIds,
           
           
       });
       console.log(e.target)
      

       this.redirect();
       
   };
   redirect  = (e) => {
       this.props.history.push(`/zoo`)
   }

    
    render() { 
        const isActive = this.state.isActive
        return (  
            <>
            <h1>Hello</h1>
            <form>
            {this.state.zoos.map((item) => (
                <div key={item.id} >
                    <input type='checkbox' className={isActive ? 'hidden' : null} value={item.id} onChange={this.handleDelete}></input>
                    <img src={item.icon_url} alt={item.name} />
                    {/* <img src={item.habitat_id.habitat_url} key={item.name} alt={item.name} /> */}
                    <p>{item.description}</p>
                </div>
            ))}
            <button onClick={this.handleToggle}>Delete</button>
            <button onSubmit={this.handleSubmit} className={isActive ? 'hidden' : null}>Update</button>
            </form>
            
            </>
            //delete toggle/button converts divs to form
            //on change reveals checkboxes
            //new submit to remove animals from zoo
            //cancel form
        );
    }
}
 
export default Zoo;