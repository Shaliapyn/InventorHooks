import React, { useReducer } from 'react'

import "./style.css"

const Reducer = () => {
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  EVENODDNUMB: "evenOddNumb"
}

const reducer = (state, action) => {
  switch(action.type){
    case "increment" :
      return {count: state.count + 1};
    case "decrement" : 
      return {count: state.count - 1};
    case "evenOddNumb" : 
      return {count: state.count, text: `${state.count % 2 === 0 ? "This is zero or even number" : "This is odd number"}`};
    default: 
      return state
  }
}

 const [state, dispatch] = useReducer(reducer, {count: 0, text: "This is zero or even number"})

 const increment = () => {
   dispatch({type: ACTIONS.INCREMENT })
   dispatch({type: ACTIONS.EVENODDNUMB})  
 }
 const decrement = () => {
  dispatch({type: ACTIONS.DECREMENT });
  dispatch({type: ACTIONS.EVENODDNUMB})
}

  return (
    <>
      <div className='count-block'>
        <button className='btn' onClick={increment}>+</button>
        <span>{state.count}</span>
        <button className='btn' onClick={decrement}>-</button>
      </div>
      { <span className='count-text'>{state.text}</span> }

    </>
  )
}

export default Reducer