import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SymptomChecker from './pages/SymptomChecker';
import Results from './pages/Results';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checker" element={<SymptomChecker />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
