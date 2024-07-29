import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(5)
  const addValue=()=>
  {
    count++
    (count<=20) ? setCount(count) : alert("value can not increase above 20")
    
    console.log(count)
  }
  const removeValue=()=>{
    count--

    (count>=0 )? setCount(count) : alert("value can not decrease below 0")
    console.log(count)
  }
 
  return (
    <>
      <h1>Project Counter</h1>
      <h2>Counter Value : {count}</h2>

      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
