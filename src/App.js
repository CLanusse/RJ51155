import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clicker from './ejemplos/Clicker';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <Navbar />
      {/* <ItemListContainer greeting={"hola mundo"}/> */}

      <button onClick={handleShow}>Show</button>

      { show 
        ? <Clicker />
        : null 
      }

    </div>
  );
}

export default App;
