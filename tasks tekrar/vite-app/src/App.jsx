import { useState } from 'react'
import React from 'react'

import './App.css'
import Header from './components/Header'

import Main from './components/Main'

import CardList from './components/CardList'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Main/>

<CardList/>



    </>
  )
}

export default App
