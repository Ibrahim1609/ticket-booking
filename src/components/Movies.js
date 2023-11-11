// Movies.js

import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import left_arr from '../assets/left_arrow.png'
import right_arr from '../assets/right_arrow.png'
import '../index.css'

function Movies ({ movieCollectionName, data, showBookButton }) {
  const itemsPerSlide = 5 // Number of cards to display per slide
  const totalSlides = data ? Math.ceil(data.length / itemsPerSlide) : 0;

  return (
    <div>
      <h3 style={{ paddingLeft: '4em', marginTop: '2em' }}>
        {movieCollectionName}
      </h3>
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
              {data
                .slice(
                  slideIndex * itemsPerSlide,
                  (slideIndex + 1) * itemsPerSlide
                )
                .map((item, index) => (
                  <Col key={index} xs={12} sm={6} md={2} lg={2} xl={2}>
                    <Card style={{ border: 'none', cursor: 'pointer' }}>
                      <Card.Img
                        variant='top'
                        style={{ borderRadius: '6px' }}
                        src={item.image}
                      />
                      <Card.Body className='px-0'>
                        <Card.Title style={{ fontSize: '1.1em' }}>
                          {item.title}
                        </Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        {showBookButton && (
                          <Link to={item.link}>
                            <Button
                              style={{ cursor: 'pointer' }}
                              variant='danger'
                            >
                              Book
                            </Button>
                          </Link>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Movies
