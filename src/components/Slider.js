import Carousel from 'react-bootstrap/Carousel'
import Image1 from '../assets/images/slider1/banner_1.avif'
import Image2 from '../assets/images/slider1/banner_2.avif'
import Image3 from '../assets/images/slider1/banner_3.avif'
import Image4 from '../assets/images/slider1/banner_4.avif'
import Image5 from '../assets/images/slider1/banner_5.avif'
import Image6 from '../assets/images/slider1/banner_6.avif'
import React from 'react'
const slideData = [
  {
    time: '2800',
    image: Image1,
    alt: 'First Slide'
  },
  {
    time: '2100',
    image: Image2,
    alt: 'Second Slide'
  },
  {
    time: '2100',
    image: Image3,
    alt: 'Third Slide'
  },
  {
    time: '2100',
    image: Image4,
    alt: 'Four Slide'
  },
  {
    time: '2100',
    image: Image5,
    alt: 'Five Slide'
  },
  {
    time: '2100',
    image: Image6,
    alt: 'Six Slide'
  }
]
function Slider () {
  return (
    <Carousel variant='dark'>
      {slideData.map((movie, index) => (
        <Carousel.Item key={index} interval={movie.time}>
          <img className='d-block w-100' src={movie.image} alt={movie.alt} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
