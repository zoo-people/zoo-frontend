import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css'
import Header from './Header.js';
import Authorization from './Auth.js';
import HabitatDetail from './HabitatDetail.js';
import HabitatList from './HabitatList.js';
import Zoo from './Zoo.js';
import AboutUs from './aboutUs';

class HomePage extends Component {
  render() { 
    return ( 
    <>
    <h1 className='title'>Welcome to Zoolander!</h1>
    <div className='welcome-page'>
      <h2>
       The virtual space to create your very own zoo!
       Through this app, you can make a zoo depending on what habitats you want to view.
       </h2>
       <h2>
         Through picking the habitats, you will be able to find different species.
        With Zoolander, you will have the oppurtunity to learn about those animals!
        </h2>
       <h2>
         If you already have an account, just log in and you can check out your zoo. If you have yet to get admission, you can go to create account to make a zoo! Come check out our About Us page to learn about the developers.
        
        </h2>
    </div>
    
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
            <Route path='/zoo'
            render={(routerProps) => 
            this.state.token ? (
              <Zoo
              token={this.state.token}

              {...routerProps} />

            ) : (
              <Redirect to='/login' />
            )
          }
    
            />

          <Route path='/aboutus'
            render={(routerProps) => 
             (
              <AboutUs 
              {...routerProps}/>
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