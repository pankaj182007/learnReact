import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'



function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  const lightTheme=()=>{
    setThemeMode("light")
  }

  // actual change in theme

  useEffect(()=>{
    const theme=document.querySelector('html').classList
    theme.remove("light","dark")
    theme.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
             <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                     <Card/>
                    </div>
                </div>
            </div>
     </ThemeProvider>
  )
}

export default App
