import React from 'react';
import { NavLink } from 'react-router-dom'



const Header = () => {
  
    return ( 
        <header>
           <nav className="navbar navbar-light bg-light">
               <div className="container-fluid">
                        <NavLink to='/'><h1>Health App</h1></NavLink> 
               </div>
               <button type="button" class="btn btn-outline-light"><NavLink to='/form'>Sign in</NavLink> </button>   
               <button type="button" class="btn btn-outline-light"><NavLink to='/form'>Add Info Health</NavLink> </button>   
            </nav>
        </header>
     );
}
 
export default Header;