import React from "react";
import "../styles/circuitbreakers.css";
import Havells from "../assets/mcb/havells3.png";
import Navbar from '../components/Navbar';
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { getError } from "../utils";

function Circuitbreakers(props){

  const location=useLocation();
  const equp=location.state?.equp;


  const [data, setData] = useState(equp);
  const [value,setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        
         await axios.get('users/page', {
          params: {
            value: data
          }
        }
        ).then(res =>{
          console.log(res.data)
          setValue(res.data);
         });
       
       
      
       
      
        
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);





  
    return(

<div>

<div className="circuit_body">
    <Navbar></Navbar>
    <header className="circuit_header my-3">
        <div class="neons">
           <h1 className="equp">{equp}</h1>
          
        </div>
     </header>

<div className="align">
{value.map(item => (
         <div className='row circuit_row my-2'>
         <div className='col-4 col'>
         <div class="card" >
     <img src={Havells} class="card-img-top" alt="..."/>
     <div class="card-body">
     <div className="text-center">
       <h5 class="card-title">{item.manufacturer}</h5>
       </div>
       
       <div className="top_circuit">
          <div> <h1 className="circuit">{item.availibility}</h1></div>
          <div><h1 className="circuit">Stock - {item.stock}</h1></div> 
       </div>
     </div>
   </div>
         </div>
   
         
   
   
       </div>
        ))}
</div>


    

      


    

    


   </div>

</div>
    )
};

export default Circuitbreakers;
