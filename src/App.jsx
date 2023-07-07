import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import { fetchDataFromApi } from './utils/app';
import Navbar from './components/Navbar/Navbar';
import Allroutes from './Allroutes/Allroutes';


function App() {

const getapi = () => {
  fetchDataFromApi('configuration')
  .then((res)=>console.log(res))
  .catch((error)=>console.log(error))
}
useEffect(()=>{
//getapi()
  
},[])

  return (
    <>
      <Navbar />
      <Allroutes />
    </>
  )
}

export default App
