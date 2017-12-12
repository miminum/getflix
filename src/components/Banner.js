import React from 'react'

const Banner = ({
    logo,
    description
}) => {

  return (
    <div className="description">
        <img className="show-logo" src={logo}/>
        <div>
            <p>{description}</p>
        </div>
    </div>
    )
  }
  
  export default Banner