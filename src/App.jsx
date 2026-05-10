import { useState } from 'react'


import './App.css'
import Navbar from './assets/components/Navbar'
import Banner from './assets/components/Banner'
import Footer from './assets/components/Footer'
import Models from './assets/components/Models'

// -------------Api start----------------
const getModels = async ()=>{
  const res = await fetch("/models.json")
  return res.json()
}

const  modelPromise = getModels();

// -------------Api end----------------
function App() {


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Models modelPromise= {modelPromise} />

    <Footer></Footer>

    </>
  )
}

export default App
