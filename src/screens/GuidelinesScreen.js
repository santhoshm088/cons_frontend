import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import '../styles/GuidelinesScreen.css';
import Pipes from '../assets/pipes.jpg';
import Wires from '../assets/wires.jpg';
import Circuit_breakers from '../assets/circuit_breaker.jpg';


export default function GuidelinesScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  return (




    <div className='body'>

      <div className='w-100 top '>
        <div className='w-25'>
          <h1 className='ins my-5 '>PRODUCTS</h1>
        </div>
      </div>

      <div>
        <div className='row'>
          <div className='col-4 col px-5'>
            <div class="card" >
              <img src={Pipes} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Pipes</h5>
                <p class="card-text">Pipes for circuit breakers ensure safe electrical flow, protecting against overload or short circuit, vital for electrical system integrity.</p>
                <Link to="/circuitbreakers" className="anc">
                  Get Products <i className=""></i>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-4 px-5'>
            <div class="card" >
              <img src={Wires} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Wires</h5>
                <p class="card-text">
                  Circuit breakers require appropriately sized wires to safely carry current, preventing overheating and potential hazards within electrical systems.</p>
                <Link to="/circuitbreakers" className="anc">
                  Get Products <i className=""></i>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-4 px-5'>
            <div class="card" >
              <img src={Circuit_breakers} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Circuit Breakers</h5>
                <p class="card-text">
                  Electrical safety devices that automatically interrupt power flow when detecting overcurrents, protecting circuits from damage due to overload or short circuit.</p>
                <Link to="/circuitbreakers" className="anc">
                  Get Products <i className=""></i>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>




    </div>
  );
}
