import React from 'react';
import Counter from './Counter';




const Home = () => {
    return (
        <div className="homepage">
           
    
            <div className="counter">
                <Counter  value ={0} />
                
    
                </div>
            
        </div>
    )
};
export default Home;