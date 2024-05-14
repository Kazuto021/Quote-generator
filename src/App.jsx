import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [status, setStatus] = useState('')

  const clearStatus = (event)=>{
    setStatus('')
  }

  return (
    <>
      <form action="">
        <input className="inp" type="text" value={status} onChange={(event) => {
          setStatus((currentValue)=>{
            return event.target.value
          })
        }} />
        <button type="reset" onClick={clearStatus}>Reset</button>
      </form>
      <div className="output">
        {status}
      </div>
    </>
  )
}

export default App
