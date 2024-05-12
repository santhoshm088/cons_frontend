import Axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import '../styles/AdminScreen.css';
import { getError } from '../utils';
import ReactLoading from 'react-loading';
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

export default function AdminScreen() {
  const [stage, setStage] = useState(0);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userList, stage1 } = state;

  const [{ loading }, dispatch] = useReducer(reducer, { loading: false });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await Axios.get('/users/logincount');
        localStorage.setItem('userLists', JSON.stringify(data));
        ctxDispatch({ type: 'USER_LISTS', payload: data });
        dispatch({ type: 'FETCH_SUCCESS' });
      } catch (err) {
        dispatch({ type: 'FETCH_FAILED' });
        toast.error(getError(err));
      }
    };
    
    
    fetchUsers();
  }, []);

  const users =
    stage === 1
      ? stage1
     
      : userList;
  return (
    <section className="admin-page">
      <header className="admin-header"> ADMIN </header>{' '}
      {loading && (
        <div className="loading-box">
          <ReactLoading
            type="spinningBubbles"
            color="#00a2ff"
            height={'10%'}
            width={'10%'}
          />
        </div>
      )}
      {!loading && (
        <section className="stage-button-container">
          <button
            className={
              stage === 0
                ? 'stage-button btn0 stage-active'
                : 'stage-button btn0'
            }
            onClick={() => setStage(0)}
          >
            {' '}
            Login Count{' '}
          </button>{' '}
         

          


          <button>
          <Link to="/inventory" className="anc">
           Edit Products <i className=""></i>
         </Link>
          
          </button>{' '}




        </section>
      )}
      {!loading && (
        <main className="stage-table-container">
          <table className="stage-table">
            <thead>
              <tr>
                <th> S.No </th>
                <th> Name </th>
    
                <th> Email </th>
                <th> Time </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((data, idx) => (
                  <tr key={idx + 1}>
                    <td> {idx + 1} </td>
                    <td> {data.name} </td>
                    
                    <td> {data.email} </td>
                    <td> {data.loginTime} </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      )}
    </section>
  );
}
