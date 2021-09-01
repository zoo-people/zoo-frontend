import React, { Component } from 'react';
import { getZoos } from './Utils.js'




class Zoo extends Component {
    state = { 
        zoos: [],
    }

    componentDidMount() {
        this.fetchZoos()
    }

    fetchZoos = async () => {
        const data = await getZoos(this.props.token);
        this.setState({ zoos: data});
    }

    render() { 
        return (  
            <>
            <h1>Hello</h1>
            {this.state.zoos.map((item) => (
                <div>
                    <img src={item.icon_url} key={item.name} alt={item.name} />
                    <p>{item.description}</p>
                </div>
            ))}
            
            </>
        );
    }
}
 
export default Zoo;