import React from 'react';
import { useState } from 'react';
// import './index.css';


const useCounter = (initialValue) => {
    const [value, setValue] = React.useState(initialValue || 0);
    const increment = () => setValue((c) => c + 1);
    const decrement = () => setValue((c) => c - 1);
    const reset = () => setReset(initialValue || 0);
    

    return (
        [value, increment, decrement, reset]
    );
}
export default useCounter;