import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import './footer.css'
const MyClass = () => {
  return (
    <div className='containerSetFooter mt-5'>
      {/* Footer */}
      <footer
        className='text-center text-lg-start text-white'
        style={{ backgroundColor: '#1c2331' }}
      >
        {/* Section: Social media */}
        <section
          className='d-flex justify-content-between p-4'
          style={{ backgroundColor: '#6351ce' }}
        >
          <div className='me-5'>
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href='#' className='text-white me-4'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href='#' className='text-white me-4'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href='#' className='text-white me-4'>
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href='#' className='text-white me-4'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='#' className='text-white me-4'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='#' className='text-white me-4'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          {/* Right */}
        </section>
        <section className>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold'>Company name</h6>
                <hr
                  className='mb-4 mt-0 d-inline-block mx-auto'
                  style={{
                    width: '60px',
                    backgroundColor: '#7c4dff',
                    height: '2px'
                  }}
                />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Got a show, event, activity or a great experience?
                  Partner with us & get listed on BookMyStream
                </p>
              </div>
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold'>Support</h6>
                <hr
                  className='mb-4 mt-0 d-inline-block mx-auto'
                  style={{
                    width: '60px',
                    backgroundColor: '#7c4dff',
                    height: '2px'
                  }}
                />
                <p>
                  <a href='#!' className='text-white'>
                    Trending Articles
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-white'>
                    Sports
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-white'>
                    Cinemas in Bangaluru
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-white'>
                    Plays in Bangaluru
                  </a>
                </p>
              </div>
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold'>Useful links</h6>
                <hr
                  className='mb-4 mt-0 d-inline-block mx-auto'
                  style={{
                    width: '60px',
                    backgroundColor: '#7c4dff',
                    height: '2px'
                  }}
                />
                <p>
                  <a href='#!' className='text-white'>
                    Your Account
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-white'>
                    Events and Cermonies
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-white'>
                    Special Shows
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-white'>
                    Help
                  </a>
                </p>
              </div>
              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold'>Contact</h6>
                <hr
                  className='mb-4 mt-0 d-inline-block mx-auto'
                  style={{
                    width: '60px',
                    backgroundColor: '#7c4dff',
                    height: '2px'
                  }}
                />
                <p>
                  <i className='fas fa-home mr-3' /> New York, NY 10012, US
                </p>
                <p>
                  <i className='fas fa-envelope mr-3' /> info@example.com
                </p>
                <p>
                  <i className='fas fa-phone mr-3' /> + 01 234 567 88
                </p>
                <p>
                  <i className='fas fa-print mr-3' /> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className='text-center p-3'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2023 Copyright: &nbsp;
          <a className='text-white' href='#'>
            BookMyStream.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
    /* End of .container */
  )
}

export default MyClass
