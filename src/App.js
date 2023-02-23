import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Conrado Lanusse (the best)
        </p>
        <h2>Coderhouse inc.</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos react
        </a>
      </header>
    </div>
  );
}

export default App;
