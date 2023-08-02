import Login from './components/Login';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import SignupCard from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}></Route> 
        <Route path="/login" element={<Login/>}></Route> 
        <Route path="/signup" element={<SignupCard/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
