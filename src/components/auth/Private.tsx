import React from 'react'
import Login from './Login'

import {ProfileNameProp} from './Profile'

type PrivateProps = {
    isLoggedIn: boolean
    Component: React.ComponentType<ProfileNameProp>
}



function Private({isLoggedIn, Component}: PrivateProps) {
 if(isLoggedIn){
    return(
        <div>
              <Component  name = "Arthur Emmanuel"/>
        </div>
    )
 }else{
    return(
        <div>
          <Login />
        </div>
    )
 }
}

export default Private