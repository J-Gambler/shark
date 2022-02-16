import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route href="/" element={Home} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
