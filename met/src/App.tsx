import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const apiUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58'
  function pullJson() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
      })
    // return
  }
  // empty array, on first mount
  useEffect(() => {
    pullJson()
  }, [])

  return (
    <div className="App">
      <h1>Hello, World</h1>
    </div>
  )
}

export default App
