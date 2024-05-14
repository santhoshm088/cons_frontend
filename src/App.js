import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminScreen from './screens/AdminScreen';
import AdminSigninScreen from './screens/AdminSigninScreen';
import FinishScreen from './screens/FinishScreen';
import GuidelinesScreen from './screens/GuidelinesScreen';
import HomeScreen from './screens/HomeScreen';
import Inventory from "./screens/Inventory";
import Circuitbreakers from './screens/Circuitbreakers';
import About from './screens/About';
import Login from './screens/Login';

import SigninScreen from './screens/SigninScreen';
import { Store } from './Store';
import { Helmet } from 'react-helmet-async';


function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo, stages, isAdmin } = state;

  return (
    <BrowserRouter>
      <Helmet>
        <title>SNS</title>
       
      </Helmet>
      <ToastContainer
        position="top-right"
        style={{ marginTop: '1%' }}
        limit={1}
      />
      <Routes>
        {!userInfo && <Route path="/signin" element={<SigninScreen />} />}
        {!userInfo && <Route path="/Login" element={<Login />} />}

        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/guidelines" element={<GuidelinesScreen />} />
        {!isAdmin && (
          <Route path="/admin-signin" element={<AdminSigninScreen />} />
        )}
        {isAdmin && <Route path="/admin" element={<AdminScreen />} />}

        {isAdmin && <Route path="/inventory" element={<Inventory />} /> }

        {userInfo && <Route path="/circuitbreakers" element={<Circuitbreakers />} />}
        

{userInfo && stages.includes(7) && (
          <Route path="/finish" element={<FinishScreen />} />
        )}

      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;
