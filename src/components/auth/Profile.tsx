import React from 'react'

export type ProfileNameProp = {
    name: string
}



function Profile({name}:ProfileNameProp) {
  return (
    <div>
        <h3>Your Profile name is {name}</h3>
    </div>
  )
}

export default Profile