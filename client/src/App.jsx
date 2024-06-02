import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getCurrent } from '../dummyTest/dummyRoutes'
import MainWeek from './components/MainWeek.jsx'

function App() {
  const [current, setCurrent] = useState("loading...")

  useEffect(() => { 
    setCurrent(getCurrent())
   }, [])

  return (
    <>
      <h2>Current Week ({current.week})</h2>
      <MainWeek current={current} />
    </>
  )
}

export default App
