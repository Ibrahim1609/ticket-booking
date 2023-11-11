// UserProfile.js
import React from 'react'
import IMAGE from '../assets/profile_1.png'

const UserProfile = ({ username }) => (
  <div
    style={{
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <img
      src={IMAGE}
      alt='user-profile'
      style={{
        marginRight: '8px',
        borderRadius: '50%',
        width: '60px',
        padding: '10px'
      }}
    />
    <span
      style={{
        overflow: 'hidden', // hide overflow
        textOverflow: 'ellipsis' // show ellipsis for overflow
      }}
    >
      {username}
    </span>
  </div>
)

export default UserProfile
