import React, { useEffect, useState } from 'react'
import { imagesArray } from './ImageData'

interface ImageSliderProps {
  name: string
}

const ImageSlider: React.FC<ImageSliderProps> = ({ name }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handlePrevious = () => {
    setActiveImageIndex(!activeImageIndex ? imagesArray.length - 1 : activeImageIndex - 1)
  }
  const handleNext = () => {
    setActiveImageIndex((activeImageIndex + 1) % imagesArray.length)
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
          style={activeImageIndex === index ? { display: 'block' } : { display: 'none' }}
          alt="Wallpaper image"
        />
      ))}
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default ImageSlider
