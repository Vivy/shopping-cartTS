import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import { ShoppingCartProvider } from './context/shoppingcartcontext';
import About from './pages/about';
import Home from './pages/home';
import Store from './pages/store';

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
