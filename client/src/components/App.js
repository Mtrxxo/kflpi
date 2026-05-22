import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element ={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
