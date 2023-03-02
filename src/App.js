import { Noticias } from './components/Noticias';
import { Tutor } from './components/Tutor';
import { Tutores } from './components/Tutores';
import './App.css'
import { ContenedorTurquesa } from './components/ContenedorTurquesa';
import Boton from './components/Boton';

function App() {

  return (
    <div>

      <h2>Coder 51155</h2>
      <hr/>

      <Noticias>
          <h4>Noticias</h4>
      </Noticias>

      <Tutores />

      <ContenedorTurquesa>
        <h2>Titulo</h2>
        <p>Blablalbal lksajdñlkf asjdñgl j</p>
        <small>un texto chiquito</small>

        <section>
          <h4>Otro titulo mas chiquito</h4>
          <p>Otro texto</p>
        </section>
      </ContenedorTurquesa>

      <Boton>
        Click me
        💣
      </Boton>
      
      
      <Tutor 
        nombre="Fede Blautzik" 
        curso="ReactJS" 
        edad={28}
        comision={51155} 
      />

      <Tutor 
        nombre="Julián Debranbandere"
        curso="Javascript"
        edad={19}
        comision={42355}
      />

    </div>
  );
}

export default App;
