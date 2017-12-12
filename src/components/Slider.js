import React from 'react'

function Slider({
    content,
    genre
  }) 
  
  { 
    return (
      <div>
        <h3>
          { genre.toUpperCase() } 
        </h3>
        <ul className="items">
          { content.map((show) => (
            <li>
              <div 
                class="bg-img" 
                style={{ backgroundImage: `url(${ show.Poster })` }}
                alt="Hello"
              >
              </div>
              <a href={ `${ show.link }` }>
                <div class="content">
                  <h2>{ show.Title }</h2>
                </div>
              </a>
            </li>
          )) }  
      </ul>
      </div>
    )
  }
  
  export default Slider