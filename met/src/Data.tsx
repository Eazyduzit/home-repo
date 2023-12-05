import { useState, useEffect } from 'react'
import { CalendarBlankIcon, ClockIcon } from '@sikt/sds-icons'

interface ApiState {
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

export const GetData = () => {
  const [weatherData, setWeatherData] = useState<ApiState>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const apiUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58'
  const userAgent = 'm_skjellerud@hotmail.com'

  async function pullJson() {
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const responseData = await response.json()
      setWeatherData(responseData)
      console.log(responseData)
    } catch (error) {
      setErrorMessage('Unable to retrieve weather data')
      //   console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    pullJson()
  }, [])

  const showTime = (numParam: number) => {
    return weatherData?.properties.timeseries.at(numParam)?.time
  }
  const showTemp = (numParam: number) => {
    return weatherData?.properties.timeseries.at(numParam)?.data.instant.details.air_temperature
  }

  return (
    <section className="Wrap">
      <header className="Title">
        <h1>Temperatures</h1>
        <CalendarBlankIcon className="CalendarIcon" />
      </header>
      {weatherData ? (
        <div className="Data">
          <ul>
            <li>
              <ClockIcon className="ClockIcon" />
              {`${showTime(-3)} : ${showTemp(-3)}°`}
            </li>
            <li>
              <ClockIcon className="ClockIcon" />
              {`${showTime(-2)} : ${showTemp(-2)}°`}
            </li>
            <li>
              <ClockIcon className="ClockIcon" />
              {`${showTime(-1)} : ${showTemp(-1)}°`}
            </li>
          </ul>
        </div>
      ) : (
        <div className="Error">{errorMessage}</div>
      )}
    </section>
  )
}
