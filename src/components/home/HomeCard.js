import React from 'react'
import { Link }  from 'react-router-dom'

const HomeCard = ({img, title, description, url}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <Link to={url}>
            <img src={img} alt={title} />
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <Link to={url}>
            <p className="title is-4">{title}</p>
          </Link>
          {description}
        </div>
      </div>
    </div>
  )
}

export default HomeCard