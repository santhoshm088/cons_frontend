import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/HomeScreen.css';

export default function HomeScreen() {
  return (
    
<div className='body' >

   <div className="black-overlay"></div>
      <Navbar />
       {/* <header className="cognizance my-3">
        <div class="neons">
           <h1>COGNIZANCE'24</h1>
        </div>
     </header>

     <section className="club-container my-5">
     <p>Cse Coding Club Presents</p>
      </section> */}

<div className='eventname w-100 text-center'>
      
        <h1>WELCOME TO </h1><br></br>
        <h1>SNS ELECTRICAL SHOP</h1>
        
      </div>


         <div className="get-started-button-container">
         <Link to="/guidelines" className="get-started-button">
           Get products <i className="fa-solid fa-arrow-right arrows"></i>
         </Link>
       </div>

 
<div className='over'>
      <div className="glowing">
        <span style={{'--i': 1}}></span>
        <span style={{'--i': 2}}></span>
        <span style={{'--i': 3}}></span>
      </div>
      <div className="glowing">
        <span style={{'--i': 1}}></span>
        <span style={{'--i': 2}}></span>
        <span style={{'--i': 3}}></span>
      </div>
      <div className="glowing">
        <span style={{'--i': 1}}></span>
        <span style={{'--i': 2}}></span>
        <span style={{'--i': 3}}></span>
      </div>
      <div className="glowing">
        <span style={{'--i': 1}}></span>
        <span style={{'--i': 2}}></span>
        <span style={{'--i': 3}}></span>
      </div>
    </div>

 

</div>
  );
}
