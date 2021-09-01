import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css'
import Header from './Header.js';
import Authorization from './Auth.js';
import HabitatDetail from './HabitatDetail.js';
import HabitatList from './HabitatList.js';

class HomePage extends Component {
  render() { 
    return ( 
    <>
    <h1 className='title'>Zoo-Lander!</h1>
    
    </>
    )}
}


class App extends Component {
  state = { 
    token: localStorage.getItem('Token'),
   };
   setToken = (val) => {
     this.setState({ token: val })
   };
  render() { 
    return ( 
        <>
          <BrowserRouter>
          <Header />
          <section>
            <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/login' render={(routerProps) => (
              <Authorization
                setToken={this.setToken}
                type='signin'
                {...routerProps}
              />
            )}
          />

          <Route
            path='/createaccount'
            render={(routerProps) => (
              <Authorization
                setToken={this.setToken}
                type='signup'
                {...routerProps}
                />
            )}
            />

          <Route
              exact path='/habitats'
              render={(routerProps) =>
                this.state.token ? (
                  <HabitatList
                  token={this.state.token}
                  
                  {...routerProps} />
                ) : (
                  <Redirect to='/login' />
                )
              }
              
            />
          <Route
              exact path='/habitats/:id'
              render={(routerProps) =>
                this.state.token ? (
                  <HabitatDetail
                  token={this.state.token}
                  
                  {...routerProps} />
                ) : (
                  <Redirect to='/login' />
                )
              }
              
            />
            </Switch>
          </section>
          </BrowserRouter>

        </>
     );
  }
}
 
export default App;