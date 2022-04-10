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

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Orders from './Orders';

const promise = loadStripe('pk_test_51KmFgtSIz2e7Mgp51TxhYrh7B4qckVZ5NTCKZQbvCAhcxgYdv8JbOpeFzUbr6isTRCTbbQ7lhxjfj4Se3AGSl0Vq00goAwhLGX');

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
            element={<><Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            </>} />

        <Route path='/orders' element={<Orders />} />

      </Routes>
    </div>
  );
}

export default App;
