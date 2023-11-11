import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function BookingModal ({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Booking Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display success or failure message here */}
        {/* You can customize this based on your requirements */}
        Your Booking is {show ? 'Successful!' : 'Failed!'}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
