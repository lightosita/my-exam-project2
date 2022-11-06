import React, { useState } from 'react';



const Counter = () => {
    let [value, setValue] = useState(1);
    const handleIncrement = () => {
        setValue(value + 1)
       
    };

    const handleReset = () => {
        setValue(0)
    };

    const handleDecrement = () => {
        
        if(value > 0){
            setValue(value - 1)
     }
        
    };



  return (
      <div>
          <h1>This is light's counter app</h1>
          <h2>
              {value}
          </h2>
          <button onClick={handleIncrement}>
              Increment
          </button>
          <button onClick={handleReset}>
              Reset
          </button>
          <button onClick={handleDecrement}>
              Decrement
          </button>
    </div>
  )
};
export default Counter;
