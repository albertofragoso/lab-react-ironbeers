import React, { Component } from 'react'
import Nav from './Nav'
import axios from 'axios'

class NewBeer extends Component {

  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  }

  handleOnChange = e => {
    const { name, value } = e.target
    this.setState({ 
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    axios.post('https://ih-beer-api.herokuapp.com/beers/new', this.state)
      .then(response => {
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: ''
        })
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <div className="columns">
          <div className="column">
            <form className="box" onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    name="name"
                    value={this.state.name} 
                    onChange={e => this.handleOnChange(e)}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Tagline</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    name="tagline"
                    value={this.state.tagline} 
                    onChange={e => this.handleOnChange(e)}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    name="description"
                    value={this.state.description} 
                    onChange={e => this.handleOnChange(e)}/>
                </div>
              </div>
              <div className="field">
                <label className="label">First Brewed</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    name="first_brewed" 
                    value={this.state.first_brewed}
                    onChange={e => this.handleOnChange(e)}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Brewers Tips</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    name="brewers_tips"
                    value={this.state.brewers_tips}
                    onChange={e => this.handleOnChange(e)}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Attenuation Level</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="number" 
                    name="attenuation_level"
                    value={this.state.attenuation_level}
                    onChange={e => this.handleOnChange(e)}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Contributed By</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    name="contributed_by" 
                    value={this.state.contributed_by}
                    onChange={e => this.handleOnChange(e)}/>
                </div>
              </div>
              <div className="field">
                <button className="button is-info is-Large is-fullwidth is-outlined is-rounded">
                    ADD NEW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewBeer
