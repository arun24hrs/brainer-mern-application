import Login from './components/Login';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import SignupCard from './components/Signup';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}></Route> 
        <Route path="/login" element={<Login/>}></Route> 
        <Route path="/signup" element={<SignupCard/>}></Route> 
        <Route path="/products" element={<Products/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
