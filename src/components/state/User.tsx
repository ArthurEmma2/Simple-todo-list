import React,{useState} from 'react'
type UserInfo = {
    email: string
    name: string
}



function User() {
    const [user, setUser] = useState<UserInfo>({} as UserInfo)
    const handleLogin = () =>{
        setUser({
            name:"arthur",
            email:"arthur@gmail.com",
        })
    }
    const handleLogout = () =>{
        setUser({
            name:"",
            email:"",
        })
    }
  return (
    <>
     <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Login</button>
     <div>user name is {user.name}</div>
    <div>user email is {user.email}</div>
    </>
   
  )
}

export default User