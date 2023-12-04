import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [showPosts, setShowPosts] = useState<any>()
  const apiUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58'
  const userAgent = 'm_skjellerud@hotmail.com'

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

  function pullJson() {
    fetch(apiUrl, {
      headers: {
        'User-Agent': userAgent,
      },
    })
      .then((response) => response.json())
      .then((responseData: Api) => {
        // console.log(typeof responseData)
        setShowPosts(() => (
          <div className="Data">
            <ul>
              <li>
                {`${responseData.properties.timeseries.at(-3)
                  ?.time} : ${responseData.properties.timeseries.at(-3)?.data.instant.details
                  .air_temperature}`}
              </li>
              <li>
                {`${responseData.properties.timeseries.at(-2)
                  ?.time} : ${responseData.properties.timeseries.at(-2)?.data.instant.details
                  .air_temperature}`}
              </li>
              <li>
                {`${responseData.properties.timeseries.at(-1)
                  ?.time} : ${responseData.properties.timeseries.at(-1)?.data.instant.details
                  .air_temperature}`}
              </li>
            </ul>
          </div>
        ))
        console.log(typeof responseData.properties.timeseries)
        console.log(responseData)
      })
  }
  // empty array, on first mount
  useEffect(() => {
    pullJson()
  }, [])

  return (
    <div className="App">
      <div className="Wrap">
        <div className="Title">
          <h1>Temperatures</h1>
        </div>
        {showPosts}
      </div>
    </div>
  )
}

export default App
