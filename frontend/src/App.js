import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DiscoverPage from './pages/DiscoverPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import CarDetailsPage from './pages/CarDetailsPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/discover' element={<DiscoverPage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/cardetails/:id' element={<CarDetailsPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
        </Routes>
      </div>
  );
}

export default App;
