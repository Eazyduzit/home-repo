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
    setActiveImageIndex(activeImageIndex - 1)
  }
  const handleNext = () => {
    setActiveImageIndex(activeImageIndex + 1)
  }

  return (
    <>
      <h3>{name}</h3>
      <button onClick={handlePrevious}>Previous</button>
      <img src={imagesArray[activeImageIndex]} alt="Wallpaper image" />
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default ImageSlider
