import React from 'react';
type inputProps = {
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: inputProps) {
    const handleClick = (event:React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event)
        
    }
  return (
 <input type='text'  value={props.value} 
 onChange={handleClick} />
  )
}

export default Input