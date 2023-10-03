// Importing necessary components and style
import '../index.css';
import U_val from './u_val';
import Header from './Header.jsx';
import Home from './Home/Home.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/u_val" element={<U_val />} />
      </Routes>
    </div>
  );
}

export default App;