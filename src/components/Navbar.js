import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import '../styles/Navbar.css';

export default function Navbar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo, isAdmin } = state;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
       
        <div className="waviy">
          <div style={{ '--i': '1' }}> S </div>{' '}
          <div style={{ '--i': '2' }}> N </div>{' '}
          <div style={{ '--i': '3' }}> S </div>{' '}
          <div style={{ '--i': '4' }}> &nbsp; &nbsp; </div>{' '}
          <div style={{ '--i': '5' }}> E </div>{' '}
          <div style={{ '--i': '6' }}> L </div>{' '}
          <div style={{ '--i': '7' }}> E </div>{' '}
          <div style={{ '--i': '8' }}> C </div>{' '}
          <div style={{ '--i': '9' }}> T </div>{' '}
          <div style={{ '--i': '10' }}> R </div>{' '}
          <div style={{ '--i': '11' }}> I </div>{' '}
          <div style={{ '--i': '12' }}> C </div>{' '}
          <div style={{ '--i': '13' }}> A </div>{' '}
          <div style={{ '--i': '14' }}> L </div>{' '}
          <div style={{ '--i': '15' }}> &nbsp; &nbsp; </div>{' '}
          <div style={{ '--i': '16' }}> S </div>{' '}
          <div style={{ '--i': '17' }}> H </div>{' '}
          <div style={{ '--i': '18' }}> O </div>{' '}
          <div style={{ '--i': '19' }}> P </div>{' '}
        </div>{' '}
      </div>{' '}
      <div
        className={
          menuOpen
            ? menuOpen
              ? 'container small-active-container green borderXwidth'
              : 'container small-container green borderXwidth'
            : 'container green borderXwidth'
        }
      >
        <Link to="/"> HOME </Link>{' '}
        <Link
          to="/about
            "
        >
          ABOUT US{' '}
        </Link>{' '}
        {userInfo ? (
          <Link to="/guidelines"> PRODUCTS </Link>
        ) : (
          <Link to="/signin"> PRODUCTS </Link>
        )}{' '}
      </div>{' '}
      <div className="profile">
        {' '}
        {userInfo ? (
          userInfo.name
        ) : (
          <Link to="/signin">
            LOGIN <i className="fa-solid fa-right-to-bracket"> </i>{' '}
          </Link>
        )}{' '}
        {isAdmin ? (
          <Link to="/admin">
            ADMIN <i className="fa-solid fa-user-secret"> </i>{' '}
          </Link>
        ) : (
          <Link to="/admin-signin">
            ADMIN <i className="fa-solid fa-user-secret"> </i>{' '}
          </Link>
        )}{' '}
      </div>{' '}
    </nav>
  );
}
