import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeApi from './ejemplos/PokeApi/PokeApi';
import PokeLista from './ejemplos/PokeApi/PokeLista';

function App() {

  return (
    <div>
      <Navbar />
      {/* <ItemListContainer /> */}

      {/* <PokeApi /> */}
      <PokeLista />

    </div>
  );
}

export default App;
