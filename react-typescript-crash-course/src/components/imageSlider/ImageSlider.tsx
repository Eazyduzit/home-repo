import React from 'react'

interface ImageSliderProps {
  name: string
}

const ImageSlider: React.FC<ImageSliderProps> = ({ name }) => {
  return (
    <>
      <h3>{name}</h3>
      <div></div>
    </>
  )
}

export default ImageSlider
