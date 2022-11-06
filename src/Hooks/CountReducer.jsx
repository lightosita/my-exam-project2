import React from 'react';
// import '../index.css';



const startingState = { value: 0 }
const reducerCounter = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { value: state.value + 1 }
    case 'decrement':
          return { value: state.value !== 0 ? state.value - 1 : (state.value = 0) }
      case 'reset':
          return {value:0}
    default:
      throw new Error('Error occured in counter')
  }
}
export default function CountReducer() {
  const [state, dispatch] = React.useReducer(reducerCounter, startingState)
  return (
    <div >
      <h1 className="reducer">light's useReducer Counter </h1>
      <div>
        <h2>{state.value}</h2>
        <button
         
          className="button"
          onClick={() => {
            dispatch({ type: 'decrement' })
          }}
        >
          Decrement
        </button>
        <button
        
          className="button"
          onClick={() => {
            dispatch({ type: 'increment' })
          }}
        >
          Increment
              </button>
              
              <button
         
          className="button"
          onClick={() => {
            dispatch({ type: 'reset' })
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
};
