import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar/NavBarpractice'


// root app...
const App = () => {

  const curr_theme = localStorage.getItem('curr_theme');
  const [theme,setTheme] = useState(curr_theme ? curr_theme : 'light')

  useEffect (() => {
    localStorage.setItem('curr_theme', theme)
  },[theme])
  return (
    <div className = {`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
