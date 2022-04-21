import { useRef, useEffect } from "react";
import GameBackground from "./background";
import Move from "./move";
import Player from "./player";
import Trees from "./trees";

let canvas;
let canvasPainter;

let lienzo;
var sizeWorld = 60;

let player = new Player();
let movimiento;
let background;
let trees;

function main() {
  canvas.width = lienzo.ancho;
  canvas.height = lienzo.alto;

  trees = new Trees(lienzo, sizeWorld);
  trees.drawTrees();

  movimiento = new Move(player, lienzo, canvasPainter, sizeWorld, trees);
  movimiento.addEvent();
  movimiento.drawplayer();

  background = new GameBackground(lienzo, sizeWorld);
  background.main();
}

const GameCanvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (canvasPaint) => {
    canvas = canvasRef.current;
    canvasPainter = canvasPaint;

    lienzo = {
      ancho: document.body.offsetWidth,
      alto: document.body.offsetHeight,
    };

    main();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    //Our draw come here
    draw(context);
  }, [draw]);

  //render()
  return <canvas ref={canvasRef} {...props}></canvas>;
};

export default GameCanvas;
