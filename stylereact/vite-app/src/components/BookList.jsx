import React from 'react'
import Book from './Book'

function BookList({book}) {
  return (
    <div className='cards'>

        {
            book && book.map((element,idx)=>(
                <Book key={element.id} element={element}/>
            ))
        }
      
    </div>
  )
}

export default BookList
