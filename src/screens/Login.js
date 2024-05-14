import React, { useContext, useReducer, useState } from 'react';
import '../styles/SigninScreen.css';
import Axios from 'axios';
import { getError } from '../utils.js';
import { Store } from '../Store.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Video from '../assets/login_back.mp4';
import { Link } from 'react-router-dom';


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAILED':
      return { ...state, loading: false };
  }
};

export default function Login() {
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
 

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const [{ loading }, dispatch] = useReducer(reducer, { loading: false });

  const navigate = useNavigate();

  const registerHandler = async (e) => {

  
  

    e.preventDefault();

    try {
        dispatch({ type: 'FETCH_REQUEST' });
        
        const { data } = await Axios.put('/users/signin', {
          email,
          password,
        });
        console.log(data)
        if (data=== "notexist") {
          toast.err("Email not exist")
        } else {
          
          ctxDispatch({ type: 'USER_SIGNIN', payload: data });
          localStorage.setItem('userInfo', JSON.stringify(data));
          dispatch({ type: 'FETCH_SUCCESS' });
          toast.success(data.name + ' logged in successfully!');
          navigate('/guidelines');
        }
      } catch (err) {
        dispatch({ type: 'FETCH_FAILED' });
        toast.error(getError(err));
      }
   
   
  };

  return (
    <div className="sign-in-page">


      {loading && (
        <div className="overlay1">
          <div className="loading-box">
            <ReactLoading
              type="spinningBubbles"
              color="#00a2ff"
              height={'10%'}
              width={'10%'}
            />
          </div>
        </div>
      )}

    
     
        {/* <div className="overlay"> </div> */}

        <video className='video' src={Video} autoPlay loop muted />

  
   
       <div className='login'>
        <form className="register-form my-5" onSubmit={registerHandler}>

          <div>
            <h1 className='text-center'>LOGIN</h1>
          </div>
         
         
          <div className="input-field-tags">
            <label>
              Email <div className="required-element"> * </div>{' '}
            </label>{' '}
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-fields"
              required
            />{' '}
          </div>{' '}
          <div className="input-field-tags">
            <label>
              Password <div className="required-element"> * </div>{' '}
            </label>{' '}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input-fields"
              required
            />{' '}
          </div>{' '}

         


          
          
          <button type="submit" className="register-button">
            Login{' '}
          </button>{' '}

          <div className='w-100 text-center'>
        <p className='' style={{color:'red'}}>Don't have an account <Link to='/signin' style={{textDecoration:'none'}}>Sign up</Link></p>
        </div>
        </form>{' '}
     
     
    </div>

    </div>
  );
}
