import Nav from 'react-bootstrap/Nav'
import Popup from 'reactjs-popup'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom' // Import Link
import Login from './loginsignup'
import axios from 'axios'
import UserProfile from './UserProfile'
import '../App.css'

function Navigation () {
  const [login, setLogin] = useState('Login/SignUp')
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)

  useEffect(() => {
    // Simulate checking login status (replace with actual logic)
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setLogin(storedUsername)
    }
  }, [])

  const handleLogout = () => {
    const confirmLogout = window.confirm('Do you want to logout?')
    if (confirmLogout) {
      // Simulate logout
      localStorage.removeItem('username')
      setLogin('Login/SignUp')
      setShowProfileDropdown(false)
    }
  }

  console.log('Current Login State:', login)

  return (
    <Row
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        background: '#10194c',
        alignItems: 'center'
      }}
    >
      <Col>
        <Nav
          className='justify'
          style={{ width: '100%', flexDirection: 'row', paddingLeft: '30px' }}
          activeKey='/'
        >
          <Nav.Item className='m-3'>
            <Nav.Link className='text-white' as={Link} to='/movies'>
              Movies
            </Nav.Link>
            {/* Use the 'as' prop to render Link instead of anchor tag */}
          </Nav.Item>
          <Nav.Item className='m-3'>
            <Nav.Link className='text-white' as={Link} to='/activity'>
              Activity
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='m-3'>
            <Nav.Link className='text-white' as={Link} to='/events'>
              Events
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='m-3'>
            <Nav.Link className='text-white' eventKey='link-3'>
              Plays
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col>
        <Nav
          className='justify'
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingLeft: '30px',
            alignItems: 'center'
          }}
          activeKey='/'
        >
          <Nav.Item className='m-3'>
            <Nav.Link className='text-white' eventKey='link-1'>
              ListYourShows
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='m-3'>
            <Nav.Link className='text-white' eventKey='link-2'>
              Corporates
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className='m-3'>
            <Nav.Link className='text-white' eventKey='link-3'>
              Offers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='m-3'>
            <Nav.Link className='text-white' eventKey='link-4'>
              Gift Card
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='m-3'>
            {login === 'Login/SignUp' ? (
              <Popup
                trigger={
                  <Nav.Link className='text-white'>Login/SignUp</Nav.Link>
                }
                modal
                nested
                closeOnDocumentClick
                lockScroll={false}
              >
                {close => <Login onClose={close} setLogin={setLogin} />}
              </Popup>
            ) : (
              <Nav.Link>
                <div
                  className='text-white'
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  style={{ cursor: 'pointer' }}
                >
                  <UserProfile username={login} />
                </div>
                {showProfileDropdown && (
                  <div
                    style={{
                      position: 'absolute',
                      width: '150px',
                      top: '130px',
                      zIndex: '999',
                      right: '26px',
                      background: 'white',
                      padding: '10px',
                      borderRadius: '6px',
                      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
                      color: 'white',
                      backgroundColor: '#10194c'
                    }}
                  >
                    <Button
                      variant='link'
                      style={{ color: 'white', textDecoration: 'none' }}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                )}
              </Nav.Link>
            )}
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  )
}

export default Navigation
