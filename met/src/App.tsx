import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [showPosts, setShowPosts] = useState<any>()
  const apiUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58'

  // let displayData
  function pullJson() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(typeof responseData)
        setShowPosts(() => (
          <div>
            <p key={responseData.id}>{responseData.properties.timeseries[84].time}</p>
            <p key={responseData.id}>{responseData.properties.timeseries[85].time}</p>
            <p key={responseData.id}>{responseData.properties.timeseries[86].time}</p>
          </div>
        ))
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
      {showPosts}
    </div>
  )
}

export default App
