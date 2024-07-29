import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BtnBar from './components/ButtonBar'

function App() {
  
  const [color,setcolor]=useState("olive")

  return (
   <div className="w-full h-screen duration-200 m-0  "
    style={{backgroundColor:color }}>   

    <div className='fixed flex flex-wrap justify-center bottom-12
    inset-x-0 px-2'><div className='flex flex-wrap justify-center
    gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
      <button onClick={()=>setcolor("red")} className='outline-non px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}>Red</button>
      <button onClick={()=>setcolor("yellow")} className='outline-non px-4 rounded-full text-black shadow-lg' style={{backgroundColor:'yellow'}}>Yellow</button>
      <button onClick={()=>setcolor("green")} className='outline-non px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}>Green</button>
      <button onClick={()=>setcolor("blue")} className='outline-non px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}}>Blue</button>
      <button onClick={()=>setcolor("orange")} className='outline-non px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'orange'}}>Orange</button>
      <button onClick={()=>setcolor("black")} className='outline-non px-4 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}}>Black</button>


    </div>
    </div> 
   </div>
  )
}

export default App
