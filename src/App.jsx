import React from 'react';
import './index.css';
import { Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
 import useCounter from './Hooks/UseCounter';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import CountReducer from './Hooks/CountReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './Components/ErrorBoundary';


function App() {

   const [value, increment, decrement, reset] = useCounter(0);
   


  return (
    
    <div className="App"> 
    <ErrorBoundary>
       <NavBar /> 
       <CountReducer/>

      
      <div>
        <h1>Light's custom Hook counter</h1>
        <h2>{value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick ={decrement}>decrement</button>
      <button onClick ={reset}>Reset</button>
      </div>
      
      
        <Routes>

            <Route path="/" element={<Home/>}>
            {/* <Route path="UseCounter" element={<UseCounter />}/>
            <Route path="CountReducer" element={<CountReducer />}/>  */}

            </Route>
          {/* <Route path=":id" element={<Details/> }></Route> */}

          <Route path="*" element={<PageNotFound/> }></Route>
          
        </Routes>

        
     
      

        
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a> */}
        
      
        </ErrorBoundary>
      </div>

     
  )
};

export default App;
