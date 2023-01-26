import React,{useState, useRef, useEffect} from 'react'

function Mutable() {
    const [timer, setTimer] = useState(0)
    const interValRef =  useRef < number | null >(null)

const stopTimer  = () =>{
    if(interValRef.current)
    window.clearInterval(interValRef.current)
}

useEffect(() =>{
    interValRef.current = window.setInterval(() =>{
        setTimer((timer) => timer + 1)
    }, 100)

    return stopTimer()
})
  return (
    <div>
        Hook timer - {timer}
        <button onClick={() => stopTimer()}>stop timer</button>
    </div>
  )
}

export default Mutable