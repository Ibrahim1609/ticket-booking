import React from 'react'
import event1 from '../assets/event_1.avif'
import event2 from '../assets/event_2.avif'
import event3 from '../assets/event_3.avif'
import event4 from '../assets/event_4.avif'
import event5 from '../assets/event_5.avif'
import event6 from '../assets/event_6.avif'
import event7 from '../assets/event_7.avif'
import event8 from '../assets/event_8.avif'
import event9 from '../assets/event_9.avif'
import event10 from '../assets/event_10.avif'
import left_arr from '../assets/left_arrow.png'
import right_arr from '../assets/right_arrow.png'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import '../index.css'
const cardData = [
  {
    title: 'Card 1',
    content: 'This is the content of Card 1',
    imageSrc: event1
  },
  {
    title: 'Card 2',
    content: 'This is the content of Card 2',
    imageSrc: event2
  },
  {
    title: 'Card 3',
    content: 'This is the content of Card 3',
    imageSrc: event3
  },
  {
    title: 'Card 4',
    content: 'This is the content of Card 4',
    imageSrc: event4
  },
  {
    title: 'Card 5',
    content: 'This is the content of Card 4',
    imageSrc: event5
  },
  {
    title: 'Card 6',
    content: 'This is the content of Card 4',
    imageSrc: event6
  },
  {
    title: 'Card 7',
    content: 'This is the content of Card 4',
    imageSrc: event7
  },
  {
    title: 'Card 8',
    content: 'This is the content of Card 4',
    imageSrc: event8
  },
  {
    title: 'Card 9',
    content: 'This is the content of Card 4',
    imageSrc: event9
  },
  {
    title: 'Card 10',
    content: 'This is the content of Card 4',
    imageSrc: event10
  }
]

function CarouselWithCards ({eventName}) {
  const itemsPerSlide = 5 // Number of cards to display per slide
  const totalSlides = Math.ceil(cardData.length / itemsPerSlide)
  return (
    <div>
      <h3 style={{ paddingLeft: '4em' }}>{eventName}</h3>
      <Carousel
        interval={null}
        className='movies-carousel'
        nextIcon={
          <span
            style={{
              background: 'black',
              color: 'white',
              width: '50%',
              borderRadius: '2em'
            }}
          >
            <img
              style={{ width: '40px', padding: '10px' }}
              src={right_arr}
              alt='right_arrow'
            />
          </span>
        }
        prevIcon={
          <span
            style={{
              background: 'black',
              color: 'white',
              width: '50%',
              borderRadius: '2em'
            }}
          >
            <img
              style={{ width: '40px', padding: '10px' }}
              src={left_arr}
              alt='left_arrow'
            />
          </span>
        }
      >
        {[...Array(totalSlides)].map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              {cardData
                .slice(
                  slideIndex * itemsPerSlide,
                  (slideIndex + 1) * itemsPerSlide
                )
                .map((event, index) => (
                  <Col key={index} xs={12} sm={6} md={2} lg={2} xl={2}>
                    <Link
                      style={{ cursor: 'pointer' }}
                      variant='danger'
                      to={event.link}
                    >
                      <Card>
                        <Card.Img variant='top' src={event.imageSrc} />
                        {/* <Card.Body>
                          <Card.Title>{event.title}</Card.Title>
                          <Card.Text>{event.content}</Card.Text>
                        </Card.Body> */}
                      </Card>
                    </Link>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselWithCards
