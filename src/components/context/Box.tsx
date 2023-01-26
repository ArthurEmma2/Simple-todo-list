import React, { useContext } from 'react'
import { ThemeContexts } from './ThemeContext'


function Box() {
    const theme = useContext(ThemeContexts)
  return (
   <div  style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>
    theme context
   </div>
  )
}

export default Box