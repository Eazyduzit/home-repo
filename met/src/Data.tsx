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
  const [showPosts, setShowPosts] = useState<ApiProps>()
  const [error, setError] = useState<string>()
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
      setShowPosts(responseData)
      console.log(responseData)
    } catch (error) {
      setError('Error fetching data')
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    pullJson()
  }, [])
  const showTime = showPosts?.properties.timeseries
  // const showTemp = data.instant.details.air_temperature
  return (
    <section className="Wrap">
      <header className="Title">
        <h1>Temperatures</h1>
        <CalendarBlankIcon className="CalendarIcon" />
      </header>
      {showPosts ? (
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
        <div className="Error">{error}</div>
      )}
    </section>
  )
}
