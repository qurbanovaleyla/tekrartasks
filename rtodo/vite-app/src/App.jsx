import { useState } from 'react'
import React from 'react'
import './App.css'
import Todo from './components/TodoCreate'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo=(newTodo)=>{
    setTodos([...todos,newTodo]);
  }
console.log(todos)
  return (
    <>
  <TodoCreate onCreatedTodo={createTodo}/>
  <TodoList todos={todos}/>
    </>
  )
}

export default App
