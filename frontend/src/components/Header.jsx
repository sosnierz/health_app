import React from 'react';
import { NavLink } from 'react-router-dom'



const Header = () => {
  
    return ( 
        <header>
           <nav className="navbar bg-dark container">
              
           <h1><NavLink to='/'>Health App</NavLink></h1>
            <button type="button" className="btn btn-outline-light"><NavLink to='/user'>Sign in</NavLink> </button>   
            <button type="button" className="btn btn-outline-light"><NavLink to='/form'>Add Info Health</NavLink> </button>   
            </nav>
        </header>
     );
}
 
export default Header;