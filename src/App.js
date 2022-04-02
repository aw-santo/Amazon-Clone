import './App.css';
import Header from './Header';
import Home from './Home';

import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      {/* <h1>Hi this is San!😁</h1> */}
      <Header />
      <Routes>

        <Route exact path="/"
          element={<Home />} />

        <Route path="/checkout"
            element={<Checkout />} />

      </Routes>
    </div>
  );
}

export default App;
