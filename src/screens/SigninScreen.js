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

export default function SigninScreen() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [rollno, setroll] = useState(1);

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const [{ loading }, dispatch] = useReducer(reducer, { loading: false });

  const navigate = useNavigate();

  const registerHandler = async (e) => {

  
  if(password==password1)
  {

    e.preventDefault();
   
      try{
            await Axios.post("https://cons-backend-1.onrender.com/users/signup",{
                name,email,password
            }).then(res =>{
                if(res.data==="exist"){
                    toast.error("User email already exist");
                    
                }
                else{
                  toast.success("Account created")
                    
                    navigate('/login');
                   
                   
                   
                }
            })
        } catch (err) {
     
      dispatch({ type: 'FETCH_FAILED' });
      toast.error(getError(err));
    }
  }
  else{
    window.alert("Password mismatch")
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
            <h1 className='text-center'>SIGN UP</h1>
          </div>
         
          <div className="input-field-tags">
            <label>
              Name <div className="required-element"> * </div>
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="input-fields"
              required
            />
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

          <div className="input-field-tags">
            <label>
              Re-Password <div className="required-element"> * </div>{' '}
            </label>{' '}
            <input
              type="password"
              onChange={(e) => setPassword1(e.target.value)}
              className="input-fields"
              required
            />{' '}
          </div>{' '}


          
          
          <button type="submit" className="register-button">
            Register{' '}
          </button>{' '}
          <div className='w-100 text-center'>
        <p className='' style={{color:'red'}}>Already have an account <Link to='/login' style={{textDecoration:'none'}}>Login</Link></p>
        </div>
        </form>{' '}
     
     
    </div>

    </div>
  );
}
