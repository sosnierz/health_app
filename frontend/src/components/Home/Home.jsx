import React from 'react';
import { NavLink } from 'react-router-dom'

import './home.css'

const Home = () => {
    return ( 
    <main>
       
        <section className='container'>
           
           <div className="pic1">
           
                <h2>Data i godzina</h2>
            
            </div>
           
            <div className="pic2">
              
                <h2>Pogoda</h2>
              
            </div>
            <div className="pic1">
             <h2>Witaj Natalia!</h2>
                
            </div>
            <div className="pic1">
              <h2>tetno</h2>
           
            </div>
           
            <div className="pic2">
            <NavLink to='/form'>
            <h2>ilość wody</h2>
            </NavLink>
            </div>  
            

            <div className="pic1">
           <h2>wzrost</h2>
                
            </div>
            <div className="pic1">
             <h2>waga</h2>
               
            </div>
            <div className="pic2">
              <h2>BMI</h2>
                
            </div>
            <div className="pic2">
            <h2>kcal</h2>
                
            </div>
            <div className="pic2">
            <h2>trening</h2>
               
            </div>
            <div className="pic2">
              <h2>sen</h2>
              
            </div>
      
        </section>
    </main>
    );
}
 
export default Home;