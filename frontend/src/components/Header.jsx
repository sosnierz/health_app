import React from 'react';
import { NavLink } from 'react-router-dom'
i


const Header = () => {
  
    return ( 
        <header>
           <nav>
           <NavLink to={'/'}><h1>Health App</h1></NavLink> 
           </nav>
        </header>
     );
}
 
export default Header;