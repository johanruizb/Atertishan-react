class Trees {
  constructor(lienzo, sizeWorld) {
    this.canvas = document.getElementById("game-md");
    this.canvasPainter = this.canvas.getContext("2d");
    this.lienzo = lienzo;
    this.sizeWorld = sizeWorld;
    this.trees = [[1, 1, 3], [2, 2, 3], [3, 5, 3], [5, 2, 3], [7, 1, 3]];
  }

  getTrees() {
    return this.trees;
  }

  cutTree(index) {
    if (this.trees[index][2] > 0)
      this.trees[index][2]--;

    if (this.trees[index][2] === 0) {
      let x = this.trees[index][0] * this.sizeWorld;
      let y = this.trees[index][1] * this.sizeWorld;
      this.canvasPainter.clearRect(x, y, this.sizeWorld, this.sizeWorld);
      this.trees.splice(index, 1);
    }
  }

  drawTrees() {
    this.canvas.width = this.lienzo.ancho;
    this.canvas.height = this.lienzo.alto;

    for (let i = 0; i < this.trees.length; i++) {
      let element = this.trees[i];

      let x = element[0] * this.sizeWorld + this.sizeWorld / 2;
      let y = element[1] * this.sizeWorld + this.sizeWorld / 2;

      this.canvasPainter.beginPath();
      this.canvasPainter.arc(x, y, 15, 0, 2 * Math.PI);
      this.canvasPainter.fillStyle = "#996633";
      this.canvasPainter.fill();
      this.canvasPainter.stroke();
      this.canvasPainter.closePath();

    }
  }
}

export default Trees;
