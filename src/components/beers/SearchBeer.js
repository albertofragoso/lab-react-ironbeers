import React from 'react'


const SearchBeer = ({ handleSearch }) => {
  return (
    <div className="box">
      <div className="field">
        <div className="control">
          <input 
            className="input" 
            type="text" 
            name="query"
            placeholder="Search beer..."
            onChange={e => handleSearch(e)}/>
        </div>
      </div>
    </div>
  )
}

export default SearchBeer
