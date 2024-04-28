import React, { useState } from 'react'



function TodoCreate({onCreatedTodo}) {

  const [newTodo,setNewTodo]=useState('')
const clearInput=()=>{
  setNewTodo('')
}


const createTodo=()=>{
if(!newTodo)return;
const request ={
 
  id:Math.random()*99999999999,
  content:newTodo
}
onCreatedTodo(request)
clearInput()
}

  return (
    <div className='created-todo'>
      <div className='formTodo' >
        <input
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value) }
        className='inputTodo' type="text" placeholder='enter ToDo' /> 
      <button onClick={createTodo} className='btn-todo'>Create Todo</button>
      </div>
    </div>
  )
}

export default TodoCreate
