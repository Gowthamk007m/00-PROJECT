import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Projects from './pages/Projects';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';

function App() {
  return (
     
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router> 
   
  );
}

export default App;




