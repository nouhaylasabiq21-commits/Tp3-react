import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="site-title">Mon Site React</h1>
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;