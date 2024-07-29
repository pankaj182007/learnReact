import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    userName:"puahpendra",
    adderss:"lucknow",
    age:27
  }

  let newarray =[1,2,3,4,5]

  return (
    <>
       <h1 className='mb-4'>TailWind! Test</h1>   
       <Card name="Pankaj" obj={myObj} array={newarray}/> 
    </>
  )
}

export default App
