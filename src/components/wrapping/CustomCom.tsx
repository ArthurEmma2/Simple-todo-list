import React from 'react'
import Greet from '../Greet'

interface Props {}

function CustomCom(props: React.ComponentProps<typeof Greet >) {
    const {isLoggedIn, messageCount} = props

    return (
        <div>
            {messageCount}
            {isLoggedIn}
        </div>
    )
}

export default CustomCom
