class GameBackground {
  constructor(lienzo, sizeWorld) {
    this.canvas = document.getElementById("game-bg");
    this.canvasPainter = this.canvas.getContext("2d");
    this.lienzo = lienzo;
    this.sizeWorld = sizeWorld;
  }

  drawRules() {
    for (let i = 0; i < parseInt(this.lienzo.ancho / this.sizeWorld) + 1; i++) {
      this.canvasPainter.beginPath();
      this.canvasPainter.moveTo(this.sizeWorld * i, 0);
      this.canvasPainter.lineTo(this.sizeWorld * i, this.lienzo.alto);
      this.canvasPainter.lineWidth = 1;
      this.canvasPainter.stroke();
    }
    for (let i = 0; i < parseInt(this.lienzo.alto / this.sizeWorld) + 1; i++) {
      this.canvasPainter.beginPath();
      this.canvasPainter.moveTo(0, this.sizeWorld * i);
      this.canvasPainter.lineTo(this.lienzo.ancho, this.sizeWorld * i);
      this.canvasPainter.lineWidth = 1;
      this.canvasPainter.stroke();
    }
  }

  main() {
    this.canvas.width = this.lienzo.ancho;
    this.canvas.height = this.lienzo.alto;

    this.drawRules();
  }
}

export default GameBackground;
