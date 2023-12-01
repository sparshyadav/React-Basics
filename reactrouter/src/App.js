
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>This is Home Page</div>} />
        <Route path='/about' element={<div>This is About Page</div>} />
        <Route path='/support' element={<div>This is Support Page</div>} />
        <Route path='/product' element={<div>This is Product Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
