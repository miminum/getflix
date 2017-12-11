import React from 'react'

function Slider({
    content,
    genre

  }) { 
    return (
      <div>
        <h3>
          { genre }
        </h3>
        <ul className="items">
          { content.map((show) => (
            <li>
              <div 
                class="bg-img" 
                style={ `background-image: url(${ show.imageURL });` }
              >
              </div>
              <a href={ `${ show.link }` }>
                <div class="content">
                  <h2>{ show.title }</h2>
                </div>
              </a>
            </li>
          )) }  
      </ul>
      </div>
    )
  }
  
  export default Slider