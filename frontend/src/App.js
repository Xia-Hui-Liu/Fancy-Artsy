import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { About, Home, Login, Search, Cart } from './pages';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
