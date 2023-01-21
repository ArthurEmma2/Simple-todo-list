import React,{useState} from 'react'
function LoggedIn() {
    const [loggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () =>{
        setIsLoggedIn(true)
    }
    const handleLogout = () =>{
        setIsLoggedIn(false)
    }
  return (
    <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Login</button>
    <div>{loggedIn ? "logged in": "logged out"}</div>
    </>
    
  )
}

export default LoggedIn