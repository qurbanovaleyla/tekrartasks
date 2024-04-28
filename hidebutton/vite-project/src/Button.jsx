import React from 'react'
import { useState } from 'react'

function Button() {
 const [gorunen,setGorunen]= useState(true)
const funcToogle=()=>{
    setGorunen(!gorunen)
}
    
  
  return (
    <div>
<button onClick={funcToogle}>{gorunen ? 'hide' : 'show'}</button>
{gorunen && <p>This is Text</p>}
    </div>
  
  )
}

export default Button
