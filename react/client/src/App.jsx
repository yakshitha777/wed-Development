import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar, { Navbar2 as Second } from './components/navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';

function App() {


  return (
    <>
      <Navbar />
      <Greet name="jin" age={31}></Greet>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Second />
      <Navbar />
    </>
  )
}

export default App