import React from 'react'
import Card from 'react-bootstrap/Card'

function WideImageBanner ({ bannerImage, cardData, details }) {
  return (
    <div className='wide-image-banner'>
      <img style={{ width: '100%', padding:'20px' }} src={bannerImage} alt='Wide Banner' />
      <div className='content'>
        <div className='left-side'>
          {cardData.map((card, index) => (
            <Card key={index}>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className='right-side'>
          <p>{details}</p>
        </div>
      </div>
    </div>
  )
}

export default WideImageBanner
