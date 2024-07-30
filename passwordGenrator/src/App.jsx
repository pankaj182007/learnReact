import { useCallback, useEffect, useRef, useState } from 'react'
 


function App() {
  const [length, setLength] = useState(5)
  const[numAllow,setNumAllow]=useState(false)
  const[charAllow,setCharAllow]=useState(false)
  const[password,setPassword]=useState("gcsuy7s")

  //useRef hook
  const passRef=useRef(null)

  const passwardGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str+="0123456789"
    if(charAllow) str+="~!@#$%^&*_?."

    for(let i=1; i<=length; i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setPassword(pass)

  },[length,numAllow,charAllow,setPassword])

  const copyToClip=useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,99)

    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwardGenerator()
  },[length,numAllow,charAllow,passwardGenerator])

 
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>

     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
         <input type="text" 
         value={password} 
        className='outline-none w-full py-1 px-3' 
        placeholder='password'
        readOnly
        ref={passRef}/>
        <button onClick={copyToClip} className='outline-none bg-blue-700 text-white
        px-3 py-0.5 shrink-0'>Copy</button>
     </div>

     <div className='flex text-sm gap-x-2'>

       <div className='flex items-center gap-x-1'>
         <input type="range"
         onChange={(e)=>setLength(e.target.value)}
         min={6}
         max={100}
         value={length} 
          className='cursor-pointer'
         />
           <label > Lendth : {length}</label>
        </div>

       <div className='flex items-center gap-x-1'>
         <input type="checkbox"
         defaultChecked={numAllow}
         id='numInput'
         onChange={()=>{
          
          setNumAllow((prev)=>!prev)
          
          }} />
          <label>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
         <input type="checkbox"
         defaultChecked={charAllow}
         id='charInput'
         onChange={()=>{
          
          setCharAllow((prev)=>!prev)
          
          }} />
          <label>Charecter</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
