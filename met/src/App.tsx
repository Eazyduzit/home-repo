import './App.css'
import { useState, useEffect } from 'react'

interface Api {
  properties: {
    timeseries: {
      time: string
      data: {
        instant: {
          details: { air_temperature: number }
        }
      }
    }[]
  }
}

function App() {
  const [showPosts, setShowPosts] = useState<Api>()
  const apiUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58'
  const userAgent = 'm_skjellerud@hotmail.com'

  function pullJson() {
    fetch(apiUrl, {
      headers: {
        'User-Agent': userAgent,
      },
    })
      .then((response) => response.json())
      .then((responseData: Api) => {
        setShowPosts(responseData)
        console.log(responseData)
      })
  }
  // empty array, on first mount
  useEffect(() => {
    pullJson()
  }, [])
  const response = showPosts?.properties.timeseries
  // const temperature = data.instant.details.air_temperature

  return (
    <div className="App">
      <div className="Wrap">
        <div className="Title">
          <h1>Temperatures</h1>
        </div>
        <div className="Data">
          <ul>
            <li>{`${response?.at(-3)?.time} : ${response?.at(-3)?.data.instant.details
              .air_temperature}`}</li>
            <li>
              {`${response?.at(-2)?.time} : ${response?.at(-2)?.data.instant.details
                .air_temperature}`}
            </li>
            <li>
              {`${response?.at(-1)?.time} : ${response?.at(-1)?.data.instant.details
                .air_temperature}`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
