import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeLista from './ejemplos/PokeApi/PokeLista';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={ <ItemListContainer /> }/>
          <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
          <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/nosotros' element={ <Nosotros /> }/>
          <Route path='/pokeapi' element={ <PokeLista /> }/>
          <Route path='*' element={ <Navigate to={"/"}/> }/>
        </Routes>

        {/* <Footer /> */}

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
