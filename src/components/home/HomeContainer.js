import React, { Component } from 'react'
import HomeCard from './HomeCard'

const directions = [
  { img: 'https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/master/img/beers.png', title: 'All Beers', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel omnis molestiae excepturi accusamus saepe pariatur, hic aperiam officiis reprehenderit. Soluta provident commodi doloremque error nemo aut nostrum odit fugiat.', url:'/all' },
  { img: 'https://github.com/ironhack-labs/lab-react-ironbeers/blob/master/img/new-beer.png?raw=true', title: 'Random Beer', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel omnis molestiae excepturi accusamus saepe pariatur, hic aperiam officiis reprehenderit. Soluta provident commodi doloremque error nemo aut nostrum odit fugiat.', url:'/random' },
  { img: 'https://github.com/ironhack-labs/lab-react-ironbeers/blob/master/img/random-beer.png?raw=true', title: 'New Beer', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel omnis molestiae excepturi accusamus saepe pariatur, hic aperiam officiis reprehenderit. Soluta provident commodi doloremque error nemo aut nostrum odit fugiat.', url:'/new' }
]

class HomeContainer extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            { directions.map((direction, i) => <HomeCard key={i} {...direction } />) }
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContainer