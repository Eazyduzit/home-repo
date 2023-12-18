import React, { useState } from 'react'

interface ImageSliderProps {
  name: string
}

const imagesArray = [
  'https://unsplash.com/photos/PBHwSmhyt9w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8MTkyMCUyMHglMjAxMDgwfGVufDB8fHx8MTcwMjkzNDMyMnww&force=true&w=640',
  'https://unsplash.com/photos/W_29nYyiIpA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8MTkyMCUyMHglMjAxMDgwfGVufDB8fHx8MTcwMjkzNDMyMnww&force=true&w=640',
  'https://unsplash.com/photos/YeBI31kK2_4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8MTkyMCUyMHglMjAxMDgwfGVufDB8fHx8MTcwMjkzNDMyMnww&force=true&w=640',
  'https://unsplash.com/photos/mBQIfKlvowM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8MTkyMCUyMHglMjAxMDgwfGVufDB8fHx8MTcwMjkzNDMyMnww&force=true&w=640',
  'https://unsplash.com/photos/RChZT-JlI9g/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8MTkyMCUyMHglMjAxMDgwfGVufDB8fHx8MTcwMjkzNDMyMnww&force=true&w=640',
]

const ImageSlider: React.FC<ImageSliderProps> = ({ name }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handlePrevious = () => {
    setActiveImageIndex(!activeImageIndex ? imagesArray.length - 1 : activeImageIndex - 1)
  }
  const handleNext = () => {
    setActiveImageIndex((activeImageIndex + 1) % imagesArray.length)
  }

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
