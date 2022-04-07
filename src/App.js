import './App.css';
import Header from './Header';
import Home from './Home';

import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';

function App() {
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

      </Routes>
    </div>
  );
}

export default App;
