import React from "react";
import "../styles/circuitbreakers.css";
import Havells from "../assets/mcb/havells3.png";
import Navbar from '../components/Navbar'

function Circuitbreakers(){
    return(
<div className="circuit_body">
    <Navbar></Navbar>
    <header className="circuit_header my-3">
        <div class="neons">
           <h1>CIRCUIT BREAKERS</h1>
        </div>
     </header>

<div>
    <div className='row circuit_row my-5'>
      <div className='col-4 col px-5'>
      <div class="card" >
  <img src={Havells} class="card-img-top" alt="..."/>
  <div class="card-body">
  <div className="text-center">
    <h5 class="card-title">Siemens</h5>
    </div>
    
    <div className="top_circuit">
       <div> <h1 className="circuit">Avaliable</h1></div>
       <div><h1 className="circuit">Stock - 6</h1></div> 
    </div>
  </div>
</div>
      </div>

      <div className='col-4 col px-5'>
      <div class="card" >
  <img src={Havells} class="card-img-top" alt="..."/>
  <div class="card-body">
  <div className="text-center">
    <h5 class="card-title">Legrand</h5>
    </div>
    
    <div className="top_circuit">
       <div> <h1 className="circuit">Avaliable</h1></div>
       <div><h1 className="circuit">Stock - 10</h1></div> 
    </div>
  </div>
</div>
      </div>
      <div className='col-4 col px-5'>
      <div class="card" >
  <img src={Havells} class="card-img-top" alt="..."/>
  <div class="card-body">
    <div className="text-center">
    <h5 class="card-title">Havells</h5>
    </div>
    <div className="top_circuit">
       <div> <h1 className="circuit">Avaliable</h1></div>
       <div><h1 className="circuit">Stock - 4</h1></div> 
    </div>
  </div>
</div>
      </div>


    </div>

    <div className='row circuit_row my-5'>
      <div className='col-4 col px-5'>
      <div class="card" >
  <img src={Havells} class="card-img-top" alt="..."/>
  <div class="card-body">
  <div className="text-center">
    <h5 class="card-title">hgghgh</h5>
    </div>
    
    <div className="top_circuit">
       <div> <h1 className="circuit">Avaliable</h1></div>
       <div><h1 className="circuit">Stock - 2</h1></div> 
    </div>
  </div>
</div>
      </div>

      <div className='col-4 col px-5'>
      <div class="card" >
  <img src={Havells} class="card-img-top" alt="..."/>
  <div class="card-body">
  <div className="text-center">
    <h5 class="card-title">hgghgh</h5>
    </div>
    
    <div className="top_circuit">
       <div> <h1 className="circuit">Avaliable</h1></div>
       <div><h1 className="circuit">Stock - 2</h1></div> 
    </div>
  </div>
</div>
      </div>
      <div className='col-4 col px-5'>
      <div class="card" >
  <img src={Havells} class="card-img-top" alt="..."/>
  <div class="card-body">
    <div className="text-center">
    <h5 class="card-title">hgghgh</h5>
    </div>
    <div className="top_circuit">
       <div> <h1 className="circuit">Avaliable</h1></div>
       <div><h1 className="circuit">Stock - 2</h1></div> 
    </div>
  </div>
</div>
      </div>


    </div>


   </div>

</div>
    )
};

export default Circuitbreakers;
