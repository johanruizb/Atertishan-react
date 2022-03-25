import logo from './logo.svg';
import './App.css';
import './js/script';
import GameCanvas from './js/script';
import Up from './img/up.png';
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <GameCanvas></GameCanvas>
      <div id="buttons-game">
        <img id="expand-op" src={Up} /><button id="quality-bt">
          Calidad: FULL
        </button>
      </div>
    </div>
  );
}

export default App;
