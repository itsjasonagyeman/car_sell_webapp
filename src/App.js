import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DiscoverPage from './pages/DiscoverPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/discover' element={<DiscoverPage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </div>
  );
}

export default App;
