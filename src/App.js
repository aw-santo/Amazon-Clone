import './App.css';
import Header from './Header';
import Home from './Home';

import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {

  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('User: ', authUser);

      if (authUser) {
        // the user just logged in
        dispatch({
          type: 'SET-USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET-USER',
          user: null
        })
      }
    })
    // eslint-disable-next-line
  }, [])
  

  return (
    <div className="App">
      {/* <h1>Hi this is San!😁</h1> */}
      
      <Routes>

        <Route exact path="/"
          element={<><Header /> <Home /></>} />

        <Route exact path="/login"
          element={<Login />} />

        <Route path="/checkout"
            element={<><Header /> <Checkout /></>} />

        <Route path="/payment"
            element={<><Header /> <Payment /></>} />

      </Routes>
    </div>
  );
}

export default App;
