class Move {
  constructor(p1, lz, canvas, sizeWorld, trees) {
    this.player = p1;
    this.tree = trees;
    this.lienzo = lz;
    this.canvasPainter = canvas;
    this.sizeWorld = sizeWorld;

    this.limites = {
      x: Math.floor(this.lienzo.ancho / sizeWorld) - 1,
      y: Math.floor(this.lienzo.alto / sizeWorld) - 1,
    };

    this.velocidad = sizeWorld;
    this.finish = true;
  }

  addEvent() {
    window.addEventListener("keydown", (e) => {
      this.keyControl(e.key.toLowerCase());
    });
  }

  letsMove(mov) {
    if (this.finish) {
      this.finish = false;
      this.clearPlayer();
      switch (mov) {
        case 0:
          if (this.player.getX() > 0) this.player.lessX();
          break;
        case 1:
          if (this.player.getY() > 0) this.player.lessY();
          break;
        case 2:
          if (this.player.getX() < this.limites.x) this.player.moreX();
          break;
        case 3:
          if (this.player.getY() < this.limites.y) this.player.moreY();
          break;
        default:
          console.error("letsMove(mov) default case");
          break;
      }
      this.drawplayer();
      this.finish = true;
    }
  }

  letsInteract() {
    let consulta = this.nearbyTree(this.player.getX(), this.player.getY());
    let nearTree = consulta[0];
    let indexTree = consulta[1];

    console.log("Nearby tree: " + nearTree);
    if (nearTree) {
      let drop = (Math.floor(Math.random() * 2) + 1);
      console.log("Chop " + drop);
      this.tree.cutTree(indexTree);
      this.player.addToInventory(1, drop);
    }
  }

  nearbyTree(x, y) {
    for (let i = 0; i < this.tree.getTrees().length; i++) {
      let e = this.tree.getTrees()[i];

      if (e[0] === x && (e[1] - 1 === y || e[1] + 1 === y)) {
        return [true, i];
      } else if (e[1] === y && (e[0] - 1 === x || e[0] + 1 === x)) {
        return [true, i];
      }
    }

    return [false];
  }

  keyControl(key) {
    if (key === "a" || key === "arrowleft") {
      this.letsMove(0);
    } else if (key === "w" || key === "arrowup") {
      this.letsMove(1);
    } else if (key === "d" || key === "arrowright") {
      this.letsMove(2);
    } else if (key === "s" || key === "arrowdown") {
      this.letsMove(3);
    } else if (key === "e") {
      console.clear();
      console.log("Let's chop");
      this.letsInteract();
    }
  }

  isCollisionWall(intg) {
    switch (intg) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;

      default:
        console.error("isACollision(intg) default case");
        break;
    }

    return;
  }

  isCollisionEnemy(intg) {
    let noEnemyInFront = false;
    switch (intg) {
      case 0:
        noEnemyInFront = true;
        break;
      case 1:
        noEnemyInFront = true;
        break;
      case 2:
        noEnemyInFront = true;
        break;
      case 3:
        noEnemyInFront = true;
        break;

      default:
        console.error("isACollision(intg) default case");
        break;
    }

    return noEnemyInFront;
  }

  drawplayer() {
    // Pintar jugador
    this.canvasPainter.beginPath();
    this.canvasPainter.rect(
      this.player.getX() * this.sizeWorld,
      this.player.getY() * this.sizeWorld,
      this.sizeWorld,
      this.sizeWorld
    );
    this.canvasPainter.fillStyle = "#fff";
    this.canvasPainter.fill();
    this.canvasPainter.closePath();
  }

  clearPlayer() {
    this.canvasPainter.clearRect(
      this.player.getX() * this.sizeWorld,
      this.player.getY() * this.sizeWorld,
      this.sizeWorld,
      this.sizeWorld
    );
  }
}

export default Move;
