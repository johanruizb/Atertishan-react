import { useRef, useEffect } from 'react';
import Move from './move';
import Player from './player';

let canvas;
let canvasPainter;
let lienzo;
let limites = 10;

let highQ = true;

let buttonQ;

let player = new Player(limites);
let movimiento;


function changeQ() {
    highQ = !highQ;
    console.log("Change to " + highQ);
    buttonQ.innerHTML = "Calidad: " + (highQ ? "FULL" : "MIN");
}

function main() {
    canvas.width = lienzo.ancho;
    canvas.height = lienzo.alto;

    console.log(player.getX());

    buttonQ.onclick = changeQ;
    
    movimiento = new Move(player, limites, 24, highQ, lienzo, canvasPainter);
    movimiento.addEvent();
    movimiento.drawplayer();
}

const GameCanvas = props => {

    const canvasRef = useRef(null)

    const draw = canvasPaint => {
        canvas = canvasRef.current;
        canvasPainter = canvasPaint;
        lienzo = { ancho: document.body.offsetWidth, alto: document.body.offsetHeight };

        buttonQ = document.getElementById('quality-bt');
        main();
    }


    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        draw(context)
    }, [draw])

    //render()
    return <canvas ref={canvasRef} {...props}></canvas>;

}

export default GameCanvas;
