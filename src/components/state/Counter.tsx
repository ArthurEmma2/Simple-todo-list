import React, {useReducer} from 'react'

type CounterState = {
    count:number
}

type UpdateAction = {
    type : "increment" | "decrement"
    payload: number
}
type ReseAction = {
    type : "reset"
} 
type CounterAction =  UpdateAction | ReseAction


const initialState = {count:0}


function reducer(state:CounterState, action:CounterAction,){
    if(action.type === "increment"){
        return {count:state.count + action.payload}
    }else if(action.type === "decrement"){
        return {count:state.count - action.payload}
    }else if(action.type === 'reset'){
        return initialState
    }
    return state
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
     Count: {state.count}

     <button onClick={()=> dispatch({type:'increment', payload: 10})}>Increment 10</button>
     <button onClick={()=> dispatch({type:'decrement', payload: 10})}>Decrement 10</button>
     <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
    </>
   
  )
}

export default Counter