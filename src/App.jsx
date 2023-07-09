import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import { fetchDataFromApi } from './utils/app';
import Navbar from './components/Navbar/Navbar';
import Allroutes from './Allroutes/Allroutes';
import Footer from './components/footer/Footer';


function App() {



  return (
    <>
      <Navbar />
      <Allroutes />
      <Footer />
    </>
  )
}

export default App
