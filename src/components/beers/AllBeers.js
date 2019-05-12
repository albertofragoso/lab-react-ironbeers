import React, { Component } from 'react'
import Nav from './Nav';
import axios from 'axios'
import BeerCard from './BeerCard'
import SearchBeer from './SearchBeer';

class AllBeers extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => this.setState({ beers: data }))
      .catch(err => console.log(err))
  }

  handleSearch = e => {
    const query = e.target.value
    axios.get(`https://ih-beer-api.herokuapp.com/beers/search?q=${query}`)
      .then(({ data }) => this.setState({ beers: data}))
      .catch(err => console.log(err))
  }

  render() {
    const { beers } = this.state
    return (
      <div className="container">
        <Nav />
        <div className="columns">
          <div className="column">
            <SearchBeer beers={beers} handleSearch={this.handleSearch}/>  
            <div className="box">
              {beers.map(beer => <BeerCard key={beer._id} {...beer} />)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AllBeers
