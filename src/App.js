import logo from './logo.svg';
import './App.css';
// import hola from './Utils.js'
// import { saludar, chau } from './Utils.js'

function App() {

  // saludar()
  // chau()

  const prof = "Mauro Paul"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          El profesor eso {prof}
        </p>
        <h2>Coderhouse inc.</h2>
      </header>

      
    </div>
  );
}

export default App;
