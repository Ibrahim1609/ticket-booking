import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import formbg from '../assets/formLogo.png'

export default function SignUp ({ setLogin = () => {} }) {
  const [username, setusername] = useState('')
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [password, setpassword] = useState('')
  const [city, setcity] = useState('')

  // Dynamic Validation State
  const [validationState, setValidationState] = useState({
    email: null,
    password: null,
    username: null,
    name: null,
    city: null,
    number: null
  })

  // Users Array State
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  // Reusable Validation Function
  const validateField = (fieldName, value, regex) => {
    if (!value) {
      // Show null state initially
      setValidationState(prevState => ({ ...prevState, [fieldName]: false }))
      return false
    }

    const isValid = regex.test(value)
    setValidationState(prevState => ({ ...prevState, [fieldName]: isValid }))
    return isValid
  }

  // Validation functions
  const validateEmail = () => validateField('email', email, /^\S+@\S+\.\S+$/)
  const validatePassword = () => validateField('password', password, /.{6,}/) // Minimum 6 characters
  const validateUsername = () => {
    const isValid = /.{3,}/.test(username)
    setValidationState(prevState => ({ ...prevState, username: isValid }))
    return isValid
  }
  const validateName = () => validateField('name', name, /\S+/) // At least one non-space character
  const validateCity = () => validateField('city', city, /\S+/) // At least one non-space character
  const validateNumber = () => validateField('number', number, /^\d{10}$/) // 10 digits

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check all fields for validity before submitting
    const isFormValid =
      validateEmail() &&
      validatePassword() &&
      validateUsername() &&
      validateName() &&
      validateCity() &&
      validateNumber()

    if (isFormValid) {
      // Store submitted values in the Users array
      const newUser = {
        name: name,
        password: password,
        email: email,
        city: city,
        number: number,
        username: username
      }

      setUsers(prevUsers => [...prevUsers, newUser])

      // Store Users array in local storage
      localStorage.setItem('Users', JSON.stringify([...users, newUser]))
      // Set a flag in local storage to indicate a new user signed up
      localStorage.setItem('newUserSignedUp', 'true')
      setLogin(username)
      let path = `/ticket-booking`
      navigate(path)
    }
  }

  return (
    <div>
      {/* Your image at the top */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px'
        }}
      >
        <img
          src={formbg}
          alt='signup-image'
          style={{ width: '50px', height: 'auto', marginBottom: '2px' }} // Adjust the styling as needed
        />
        <h5 style={{ fontSize: '18px', marginLeft: '5px' }}>Sign Up Form</h5>
      </div>
      <Form
        style={{
          margin: '20px 100px 20px 100px',
          padding: '10px 180px'
        }}
      >
        <Row className='mb-3'>
          <Form.Group
            onChange={e => setemail(e.target.value)}
            as={Col}
            controlId='formGridEmail'
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onBlur={validateEmail}
              isValid={validationState.email}
              isInvalid={validationState.email === false}
            />
            <Form.Control.Feedback type='invalid'>
              Invalid email address
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            onChange={e => setpassword(e.target.value)}
            as={Col}
            controlId='formGridPassword'
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onBlur={validatePassword}
              isValid={validationState.password}
              isInvalid={validationState.password === false}
            />
            <Form.Control.Feedback type='invalid'>
              Password must be at least 6 characters
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Col xs='auto'>
          <Form.Label
            onChange={e => setusername(e.target.value)}
            htmlFor='inlineFormInputGroup'
            visuallyHidden
          >
            Username
          </Form.Label>
          <InputGroup className='mb-2'>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              id='inlineFormInputGroup'
              placeholder='Username'
              onBlur={validateUsername}
              isValid={validationState.username}
              isInvalid={validationState.username === false}
              onChange={e => setusername(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Username is required
            </Form.Control.Feedback>
          </InputGroup>
        </Col>

        <Form.Group
          onChange={e => setname(e.target.value)}
          className='mb-3'
          controlId='formGridName'
        >
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder='Enter your name...'
            onBlur={validateName}
            isValid={validationState.name}
            isInvalid={validationState.name === false}
          />
          <Form.Control.Feedback type='invalid'>
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Row className='mb-3'>
          <Form.Group
            onChange={e => setcity(e.target.value)}
            as={Col}
            controlId='formGridCity'
          >
            <Form.Label>City</Form.Label>
            <Form.Control
              onBlur={validateCity}
              isValid={validationState.city}
              isInvalid={validationState.city === false}
            />
            <Form.Control.Feedback type='invalid'>
              City is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            onChange={e => setnumber(e.target.value)}
            as={Col}
            controlId='formGridNumber'
          >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onBlur={validateNumber}
              isValid={validationState.number}
              isInvalid={validationState.number === false}
            />
            <Form.Control.Feedback type='invalid'>
              Enter a valid 10-digit phone number
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' id='formGridCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>

        <Button onClick={handleSubmit} variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
