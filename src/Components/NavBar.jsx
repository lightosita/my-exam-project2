import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {
    
         <div className="links">
         <div><ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/UseCounter">Custom hook</Link>
      </li>
      <li>
        <Link to="/CountReducer">Reducer hook</Link>
      </li>
      </ul>
        </div>

    </div>
};
export default NavBar;