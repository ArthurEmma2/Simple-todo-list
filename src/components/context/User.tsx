import React from 'react'

import { useContext } from 'react'
import { UserContext } from './UserContext';

function User() {
  const userContext = useContext(UserContext)
    const handleLogin = ()=>{
        userContext.setUser({
          name:"emmanuel",
          email: "aeydhd@gmail"
        })
    } 
    const handleLogout = ()=>{
     userContext.setUser(null)
    } 
  return (
    <>
     <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>Your Name is {userContext.user?.name}</div>
    <div>Your Email is {userContext.user?.email}</div>
    </>

  )
}

export default User