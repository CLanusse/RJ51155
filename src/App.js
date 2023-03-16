import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeLista from './ejemplos/PokeApi/PokeLista';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
        <Route path='/nosotros' element={ <Nosotros /> }/>
        <Route path='/pokeapi' element={ <PokeLista /> }/>
        <Route path='*' element={ <Navigate to={"/"}/> }/>
      </Routes>

      {/* <Footer /> */}

    </BrowserRouter>
  );
}

export default App;
