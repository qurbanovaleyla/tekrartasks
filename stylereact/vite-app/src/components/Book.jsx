import React from 'react'

function Book({element}) {
  return (
    <div>
        <div className='card'>
            <div >
            <img src={element.imgSrc
            } alt="" />
      <h1 className='latest'>Latest Published Books</h1>
      <div id="latest-published-items">
       
            <h2 className='moonDance'>{element.title}</h2>
            <p> {element.author}</p>
            
          </div>
        
      </div>
        </div>
    <br /><br />
    </div>
    
      
    
  )
}

export default Book
