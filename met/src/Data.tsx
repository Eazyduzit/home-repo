import { useState, useEffect } from 'react'
import { CalendarBlankIcon, ClockIcon } from '@sikt/sds-icons'

interface ApiProps {
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
  const [weatherData, setWeatherData] = useState<ApiProps>()
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
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    pullJson()
  }, [])

  const showTime = weatherData?.properties.timeseries

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
              {`${showTime?.at(-3)?.time} : ${showTime?.at(-3)?.data.instant.details
                .air_temperature}`}
            </li>
            <li>
              <ClockIcon className="ClockIcon" />
              {`${showTime?.at(-2)?.time} : ${showTime?.at(-2)?.data.instant.details
                .air_temperature}`}
            </li>
            <li>
              <ClockIcon className="ClockIcon" />
              {`${showTime?.at(-1)?.time} : ${showTime?.at(-1)?.data.instant.details
                .air_temperature}`}
            </li>
          </ul>
        </div>
      ) : (
        <div className="Error">{errorMessage}</div>
      )}
    </section>
  )
}
