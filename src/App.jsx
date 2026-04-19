import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Kin from './pages/Kin';
import Contact from './pages/Contact';
import Scene from './components/Scene';
import Cursor from './components/Cursor';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Scene />
        <Navigation />
        <Cursor />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kin" element={<Kin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
