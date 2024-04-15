import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/contestants';
import Leaderboard from './pages/Leaderboard';
import NotFoundPage from './pages/404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contestants" element={<Gallery />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        {/* {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
