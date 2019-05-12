import React, { Component } from 'react'
import axios from 'axios'
import BeerCard from './BeerCard'
import Nav from './Nav'

class SingleBeer extends Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params

    axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
      .then(({ data }) => this.setState({ beer: data }))
      .catch(err => console.log(err))
  }

  render() {
    const { beer } = this.state
    return (
      <div className="container">
        <Nav />
        <div className="columns">
          <div className="column">
            <div className="box">
              <BeerCard {...beer} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleBeer