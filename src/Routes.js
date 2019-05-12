import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import AllBeers from './components/beers/AllBeers'
import SingleBeer from './components/beers/SingleBeer'
import RandomBeer from './components/beers/RandomBeer';
import NewBeer from './components/beers/NewBeer';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ HomeContainer } />
    <Route exact path='/all' component={ AllBeers }/>
    <Route exact path='/random' component={ RandomBeer } />
    <Route exact path='/single/:id' component={ SingleBeer }/>
    <Route exact path='/new' component={ NewBeer } />
    <Route component={() => <p>404 😞</p>} />
  </Switch>
)

export default Routes