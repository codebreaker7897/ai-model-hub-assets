import { useState } from 'react'


import './App.css'
import Navbar from './assets/components/Navbar'
import Banner from './assets/components/Banner'
import Footer from './assets/components/Footer'
import Models from './assets/components/Models'
import Card from './assets/components/Cart'
import Cart from './assets/components/Cart'

// -------------Api start----------------
const getModels = async ()=>{
  const res = await fetch("/models.json")
  return res.json()
}

const  modelPromise = getModels();

// -------------Api end----------------
function App() {

    // ------State start-----

  const [activeTab, seActiveTab]= useState('Models');
  console.log(activeTab)

    // ------State end-----

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    
{/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent gap-10">

  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40"  aria-label="Models"
   onClick={()=> seActiveTab("Models")}
  defaultChecked />

  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" 
  onClick={()=> seActiveTab("Cart")}
  />
</div>

    {activeTab === "Models" && <Models modelPromise= {modelPromise} /> }
    
    {activeTab === "Cart" && <Cart></Cart>  }


    <Footer></Footer>

    </>
  )
}

export default App
