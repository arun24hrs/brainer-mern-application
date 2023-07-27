import React from 'react';
import logo from './logo.svg';
import LoginForm from './components/Login';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<LoginForm/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
