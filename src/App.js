
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Navbar from './Page/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
