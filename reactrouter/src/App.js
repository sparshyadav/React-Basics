import Home from './components/Home.js';
import About from './components/About.js';
import Product from './components/Product.js';
import Support from './components/Support.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Support />} />
        <Route path='/product' element={<Product />} />
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
