import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserProfile from './UserProfile'
import SignUp from './Signup'
export default function Login ({ onClose, setLogin }) {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [error, setError] = useState('')
  const [usernameValid, setUsernameValid] = useState(true)

  useEffect(() => {
    // Check if there is a stored username in local storage
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setLogin(storedUsername)
    }
  }, [setLogin])

  function username1 (e) {
    const value = e.target.value
    setusername(value)
    setUsernameValid(!!value)
  }

  function password1 (e) {
    const value = e.target.value
    setpassword(value)
  }
  const submit = e => {
    e.preventDefault()

    // Basic form validation
    if (!username || !password) {
      setError('Please fill in all the required fields.')
      return
    }

    // Simulate a successful login (replace with actual validation logic)
    setLogin(username)
    onClose()
    // Store filled values in local storage
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    // Display values in the console
    console.log('Username:', username)
    console.log('Password:', password)
  }

  const logout = () => {
    // Clear user data from local storage
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    setLogin('Login/SignUp')
  }

  return (
    <div>
      {username !== 'Login/SignUp' ? (
        <Form
          style={{
            width: '700px',
            margin: 'auto auto',
            backgroundColor: 'white',
            padding: '50px 50px 50px 50px',
            borderRadius: '10px',
            position: 'relative'
          }}
        >
          <Button
            variant='danger'
            size='sm'
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px'
            }}
            onClick={onClose}
          >
            X
          </Button>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>
              Username<span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Form.Control
              value={username}
              onChange={username1}
              type='text'
              placeholder='Enter Username'
              style={{
                borderColor: !usernameValid ? 'red' : username ? 'green' : ''
              }}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>
              Password<span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Form.Control
              onChange={password1}
              type='password'
              placeholder='Password'
            />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={submit}>
            Submit
          </Button>

          <Link to='/signup'>
            <Button style={{ marginLeft: '10px' }} variant='secondary'>
              SignUp
            </Button>
          </Link>
          <div style={{ color: 'red', marginTop: '10px', textAlign: 'left' }}>
            {error}
          </div>
        </Form>
      ) : (
        <UserProfile username={username} onLogout={logout} />
      )}
    </div>
  )
}
