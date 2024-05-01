import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


import './App.css'
import Header from './components/Header/header';
import Main1 from './components/Main1/main1';
import Main2 from './components/Main2/main2';
import BookList from './components/BookList';
import Footer from './components/Footer/footer';


function App() {
  const [book, setBook] = useState([])
const getAllbook=async ()=>{
  let res =await axios.get("http://localhost:3000/books")
  setBook(res.data)
}
useEffect(()=>{
  getAllbook()
},[])
  return (
    <>
    <Header/>
 
     <Main1/>
     <Main2/>
     <BookList book={book}/>
     <Footer/>
   
    </>
  )
}

export default App
