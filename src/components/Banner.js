import React from 'react'
import '../App.css'
function Banner ({ imageUrl }) {
  return (
    <div className='banner'>
      <img className='bannerImg' src={imageUrl} alt='Banner' />
    </div>
  )
}

export default Banner