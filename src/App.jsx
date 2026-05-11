import { useState } from 'react'


import './App.css'
import Navbar from './assets/components/Navbar'
import Banner from './assets/components/Banner'
import Footer from './assets/components/Footer'
import Models from './assets/components/Models'
import Card from './assets/components/Card'

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
    
{/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent gap-10">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40"  aria-label="Models"defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Card"  />
</div>

    <Models modelPromise= {modelPromise} />
    <Card></Card>


    <Footer></Footer>

    </>
  )
}

export default App
