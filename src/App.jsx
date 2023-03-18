import React, { useEffect, useState } from 'react'
import './App.css'

export const App = () => {
   const[randomAdvice , setRandomAdvice] = useState('')

   useEffect(()=>{
    getAdvice();
   },[])

   const getAdvice = async ()=>{
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setRandomAdvice(data.slip.advice)
   }


  return (
    <div className="app">
      <div className="card">
        <h1 className='heading'>{randomAdvice}</h1>
        <button onClick={getAdvice}><span>GIVE ME ADVICE!</span></button>
      </div>
    </div>
    
  )
}
