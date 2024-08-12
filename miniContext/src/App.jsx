import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
  <UserContextProvider>
    <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-indigo-50 bg-gray-800' >
    <h1 className="text-3xl font-bold underline">
    Hello world!
    </h1>
    <Login/>
    <Profile/>   
    </div>
  </UserContextProvider>
  
  )
}

export default App
