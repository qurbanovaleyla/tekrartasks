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
const removeTodo=(todoId)=>{
  setTodos([...todos.filter((todo)=>todo.id !==todoId)])
}


console.log(todos)
  return (
    <>
  <TodoCreate onCreatedTodo={createTodo}/>
  <TodoList todos={todos} onRemoveTodo={removeTodo}/>
    </>
  )
}

export default App
