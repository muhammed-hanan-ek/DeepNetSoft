import { useState } from 'react'
import './App.css'
import Header from './Compnents/Header'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Reaservation from './Pages/Reaservation'
import { Route, Routes } from 'react-router-dom'
import Footer from './Compnents/Footer'

function App() {
 

  return (
    <>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reservation' element={<Reaservation/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
