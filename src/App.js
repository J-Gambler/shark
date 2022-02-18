import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Catch from './pages/Catch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catch" element={<Catch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
