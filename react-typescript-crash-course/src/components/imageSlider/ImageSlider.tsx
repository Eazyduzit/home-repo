import React, { useEffect, useState } from 'react'
import { imagesArray } from './ImageData'
import { ImageSliderProps, ImageSliderState } from './types/ImageSliderTypes'

const ImageSlider: React.FC<ImageSliderProps> = ({ name }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<ImageSliderState>({ counter: 0 })

  const handlePrevious = () => {
    setActiveImageIndex({
      counter: !activeImageIndex.counter ? imagesArray.length - 1 : activeImageIndex.counter - 1,
    })
  }
  const handleNext = () => {
    setActiveImageIndex({
      counter: (activeImageIndex.counter + 1) % imagesArray.length,
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext()
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [activeImageIndex])

  return (
    <>
      <h3>{name}</h3>
      <button onClick={handlePrevious}>Previous</button>
      {imagesArray.map((url, index) => (
        <img
          key={url}
          src={url}
          style={activeImageIndex.counter === index ? { display: 'block' } : { display: 'none' }}
          alt="Wallpaper image"
        />
      ))}
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default ImageSlider
