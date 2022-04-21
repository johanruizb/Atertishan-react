import "./App.css";
import "./js/script";
import GameCanvas from "./js/script";
import GameBackground from "./js/background";
import "./css/styles.css";

function App() {
  //<GameCanvas id="game-canvas"></GameCanvas>
  //<GameMedia id="game-md"></GameMedia>
  return (
    <div className="App">
      <canvas id="game-bg"></canvas>
      <canvas id="game-md"></canvas>
      <GameCanvas id="game-canvas"></GameCanvas>
    </div>
  );
}

export default App;
