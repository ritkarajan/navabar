import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Thir from './components/Thir';
import Sec from './components/Sec';
import { Route, Routes } from 'react-router-dom';
import Fou from './components/Fou';
import Fivee from './components/Fivee';

function App() {
  return (
    <div className="App">
      <Thir />

     
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/s" element={<Sec/>} />
        <Route path="/z" element={<Fivee/>}/>
      </Routes>
    </div>
  );
}

export default App;
