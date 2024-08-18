import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <h1>Redux ToolKit Todo</h1> 
        <AddTodo/>
        <Todos/>
      
      </div>
        
    </>
  )
}

export default App
