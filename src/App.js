import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Navbar_one from './components/Navbar_top'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './components/Slider'
import Movies from './components/Movies'
import SignUp from './components/Signup'
import BookTicket from './components/Bookticket'
import CarouselWithCards from './components/Events'
import Banner from './components/Banner'
import bannerImg_1 from './assets/icc_banner.avif'
import bannerImg_2 from './assets/icc_banner_2.avif'
import WideImageBanner from './components/WideBanner'
import MyClass from './components/Footer'
import Image1 from './assets/images/Movies/1.avif'
import Image2 from './assets/images/Movies/2.avif'
import Image3 from './assets/images/Movies/3.avif'
import Image4 from './assets/images/Movies/4.avif'
import Image5 from './assets/images/Movies/5.avif'
import Image6 from './assets/images/Movies/6.avif'
import Image7 from './assets/images/Movies/7.avif'
import Image8 from './assets/images/Movies/8.avif'
import Image9 from './assets/images/Movies/9.avif'
import Image10 from './assets/images/Movies/10.avif'
import event1 from './assets/images/Events/fun_1.avif'
import event2 from './assets/images/Events/fun_2.avif'
import event3 from './assets/images/Events/fun_3.avif'
import event4 from './assets/images/Events/fun_4.avif'
import event5 from './assets/images/Events/fun_5.avif'
import event6 from './assets/images/Events/fun_6.avif'
import event7 from './assets/images/Events/fun_7.avif'
import event8 from './assets/images/Events/fun_8.avif'
import event9 from './assets/images/Events/fun_9.avif'
import event10 from './assets/images/Events/fun_10.avif'

function App () {
  const [signup, setLogin] = useState('Login/SignUp')

  const moviesData = [
    {
      title: 'Tiger 3',
      image: Image1,
      link: '/bookingblack',
      description: 'Action/Thriller'
    },
    {
      title: 'The Marvels',
      image: Image2,
      link: '/bookingblack',
      description: 'Action/Adventure/Fantacy'
    },
    {
      title: 'Keedaa Cola',
      image: Image10,
      link: '/bookingblack',
      description: 'Comedy/Crime'
    },
    {
      title: 'Tagarupalya',
      image: Image3,
      link: '/bookingblack',
      description: 'Comedy/Drama'
    },
    {
      title: 'Japan',
      image: Image4,
      link: '/bookingblack',
      description: 'Action/Comedy/Crime'
    },
    {
      title: 'Leo',
      image: Image5,
      link: '/bookingblack',
      description: 'Action/Thriller'
    },
    {
      title: 'Ghost',
      image: Image9,
      link: '/bookingblack',
      description: 'Action/Thriller'
    },
    {
      title: 'Garadi',
      image: Image6,
      link: '/bookingblack',
      description: 'Action/Drama'
    },
    {
      title: 'Jigarthanda Double X',
      image: Image7,
      link: '/bookingblack',
      description: 'Action/Comedy/Period'
    },
    {
      title: '12th Fail',
      image: Image8,
      link: '/bookingblack',
      description: 'Drama'
    }
  ]
  const eventData = [
    {
      title: 'Speed Dating ',
      image: event1,
      link: '/bookingblack',
      description: 'SmallWorld: Koramangala 5th block, Bengaluru'
    },
    {
      title: 'Wonderla Amusement Park Bangalore',
      image: event2,
      link: '/bookingblack',
      description: 'Wonderla Amusement Park: Bengaluru'
    },
    {
      title: 'Jawaharlal Nehru Planetarium, Bengaluru (Kannada)',
      image: event3,
      link: '/bookingblack',
      description: 'Jawaharlal Nehru Planetarium: Bengaluru'
    },
    {
      title: 'Reboot Wedneday At Sunburn Union',
      image: event4,
      link: '/bookingblack',
      description: 'Sunburn Union Bangalore'
    },
    {
      title: 'Ladies Night At House Of Commons Koramangala',
      image: event5,
      link: '/bookingblack',
      description: 'House of Commons, Koramangala: Bengaluru'
    },
    {
      title: 'Curiouscity Science Discovery Centre',
      image: event6,
      link: '/bookingblack',
      description: 'CURIOUSCITY Science Center: Bengaluru'
    },
    {
      title: 'Hamleys Haunted Maze (Phoenix Marketcity, Beng)',
      image: event7,
      link: '/bookingblack',
      description: 'Hamleys (Phoenix Market City): Bangalore'
    },
    {
      title: 'Mystic Monday s Cocktail Party',
      image: event8,
      link: '/bookingblack',
      description: 'Ottoman Themed Restobar: Bengaluru'
    },
    {
      title: 'Sundrunch',
      image: event9,
      link: '/bookingblack',
      description: 'Byg Brewski Brewing Company: Bengaluru'
    },
    {
      title: 'Indian Music Experience Museum ',
      image: event10,
      link: '/bookingblack',
      description: 'Indian Music Experience: Bengaluru'
    }
  ]
  return (
    <div className='Nav_head'>
      <Routes>
        <Route
          path='/ticket-booking'
          element={
            <>
              <Navbar_one />
              <Slider />
              <ParentComponent bannerImg={bannerImg_1} />
              <Movies
                movieCollectionName='Recommended Movies'
                data={moviesData}
                showBookButton={true}
              />
              <ParentComponent bannerImg={bannerImg_2} />
              <CarouselWithCards eventName='Top Events' />
              <ParentComponent bannerImg={bannerImg_1} />
              <Movies
                movieCollectionName='Explore Fun Activities'
                data={eventData}
                showBookButton={false}
              />
              <MyClass />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <Movies
              movieCollectionName='Recommended Movies'
              data={moviesData}
              showBookButton={false}
            />
          }
        />
        <Route
          path='/activity'
          element={
            <Movies
              movieCollectionName='Explore Fun Activities'
              data={eventData}
              showBookButton={false}
            />
          }
        />
        <Route path='/events' element={<CarouselWithCards eventName='Top Events' />} />
        <Route path='/bookingblack' element={<BookTicket name='black' />} />
        <Route path='/bookingbhediya' element={<BookTicket name='bhediya' />} />
        <Route
          path='/signup'
          element={
            <>
              <SignUp setLogin={setLogin} />
            </>
          }
        />
      </Routes>
    </div>
  )
}

function ParentComponent ({ bannerImg }) {
  const [imageUrl, setImageUrl] = useState(bannerImg)

  const handleImageChange = imageUrl => {
    // Change the image URL when needed
    setImageUrl(imageUrl)
    console.log('Image Changed.')
  }

  return (
    <div style={{ padding: '20px' }}>
      <Banner
        className='bannerSuite'
        imageUrl={imageUrl}
        onClick={handleImageChange}
      />
    </div>
  )
}

export default App
