import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes> */}
      <Home/>
    </div>
  )
}

export default App;