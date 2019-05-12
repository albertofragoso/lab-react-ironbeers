import React from 'react'
import { Link }  from 'react-router-dom'

const BeerCard = ({_id, image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <Link to={`/single/${_id}`}>
            <img src={image_url} alt={name} style={{width:'80px', margin:'0 auto'}}/>
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="title is-4">
            {name}
            <span className="has-text-grey-lighter">
             {attenuation_level}
            </span>
          </p>
          <p className="subtitle">
            {tagline}
            <span className="has-text-grey-lighter">        {first_brewed}
            </span>
          </p>
          <p>{description}</p>
          <small className="has-text-grey-lighter">{contributed_by}</small>
        </div>
      </div>
    </div>
  )
}

export default BeerCard