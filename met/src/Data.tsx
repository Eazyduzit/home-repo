import { useState, useEffect } from 'react'

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
  const apiUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58'
  const userAgent = 'm_skjellerud@hotmail.com'

  async function pullJson() {
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': userAgent,
      },
    })
    const responseData = await response.json()

    setShowPosts(responseData)
    console.log(responseData)
  }
  // empty array, on first mount
  useEffect(() => {
    pullJson()
  }, [])
  const showTime = showPosts?.properties.timeseries
  // const showTemp = data.instant.details.air_temperature
  return (
    <div className="Wrap">
      <div className="Title">
        <h1>Temperatures</h1>
      </div>
      <div className="Data">
        <ul>
          <li>{`${showTime?.at(-3)?.time} : ${showTime?.at(-3)?.data.instant.details
            .air_temperature}`}</li>
          <li>
            {`${showTime?.at(-2)?.time} : ${showTime?.at(-2)?.data.instant.details
              .air_temperature}`}
          </li>
          <li>
            {`${showTime?.at(-1)?.time} : ${showTime?.at(-1)?.data.instant.details
              .air_temperature}`}
          </li>
        </ul>
      </div>
    </div>
  )
}
