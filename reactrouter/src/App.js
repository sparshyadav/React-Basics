import Home from './components/Home.js';
import About from './components/About.js';
import Product from './components/Product.js';
import Support from './components/Support.js';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          {/* <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/support'}>Support</Link>
          <Link to={'product'}>Product</Link> */}

          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/support'}>Support</NavLink>
          <NavLink to={'product'}>Product</NavLink>
        </ul>
      </nav>

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
