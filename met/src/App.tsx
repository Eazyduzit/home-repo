import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [showPosts, setShowPosts] = useState<any>()
  const apiUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58'

  // interface Api {
  //   properties: object
  //   timeseries: Array
  // }

  function pullJson() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(typeof responseData)
        setShowPosts(() => (
          <div>
            <ul>
              <li>
                {`${responseData.properties.timeseries.at(-3).time} : ${
                  responseData.properties.timeseries.at(-3).data.instant.details.air_temperature
                }`}
              </li>
              <li>
                {`${responseData.properties.timeseries.at(-2).time} : ${
                  responseData.properties.timeseries.at(-2).data.instant.details.air_temperature
                }`}
              </li>
              <li>
                {`${responseData.properties.timeseries.at(-1).time} : ${
                  responseData.properties.timeseries.at(-1).data.instant.details.air_temperature
                }`}
              </li>
            </ul>
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
