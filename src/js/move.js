class Move {
    constructor(p1, limits, fps, hQ, lz, canvas) {
        this.player = p1;
        this.fps = fps;
        this.limites = limits;
        this.highQ = hQ;
        this.lienzo = lz;
        this.canvasPainter = canvas;
    }

    addEvent() {
        window.addEventListener("keydown", (e) => {
            this.keyControl(e.key.toLowerCase());
        });
    }

    keyControl(key) {
        if ((key == "a" || key === "arrowleft") && this.player.getX() - this.fps >= this.limites) {
            if (this.highQ) {
                for (let i = 0; i < this.fps; i++) {
                    setTimeout(() => {
                        if (this.player.getX() - 1 >= this.limites) {
                            this.clearplayer();
                            this.player.setX(this.player.getX() - 1);
                            this.drawplayer();
                        }
                    }, 3 * i);
                }
            } else {
                this.clearplayer();
                this.player.setX(this.player.getX() - this.fps);
                this.drawplayer();
            }


        } else if ((key == "d" || key === "arrowright") && (this.player.getX() + this.fps + this.player.getSize()) <= this.lienzo.ancho - this.limites) {            if (this.highQ) {
                for (let i = 0; i < this.fps; i++) {
                    setTimeout(() => {
                        if (this.player.getX() + 1 + this.player.getSize() <= this.lienzo.ancho - this.limites) {
                            this.clearplayer();
                            this.player.setX(this.player.getX() + 1);
                            this.drawplayer();
                        }
                    }, 3 * i);
                }
            } else {
                this.clearplayer();
                this.player.setX(this.player.getX() + this.fps);
                this.drawplayer();
            }
        } else if ((key == "s" || key === "arrowdown") && (this.player.getY() + this.fps + this.player.getSize()) <= this.lienzo.alto - this.limites) {            if (this.highQ) {
                for (let i = 0; i < this.fps; i++) {
                    setTimeout(() => {
                        if ((this.player.getY() + 1 + this.player.getSize()) <= this.lienzo.alto - this.limites) {
                            this.clearplayer();
                            this.player.setY(this.player.getY() + 1);
                            this.drawplayer();
                        }
                    }, 3 * i);
                }
            } else {
                this.clearplayer();
                this.player.setY(this.player.getY() + this.fps);
                this.drawplayer();
            }
        } else if ((key == "w" || key === "arrowup") && (this.player.getY() - this.fps) >= this.limites) {            if (this.highQ) {
                for (let i = 0; i < this.fps; i++) {
                    setTimeout(() => {
                        if (this.player.getY() - 1 >= this.limites) {
                            this.clearplayer();
                            this.player.setY(this.player.getY() - 1);
                            this.drawplayer();
                        }
                    }, 3 * i);
                }
            } else {
                this.clearplayer();
                this.player.setY(this.player.getY() - this.fps);
                this.drawplayer();
            }
        }
    }

    drawplayer() {
        // Pintar jugador 
        this.canvasPainter.beginPath();
        this.canvasPainter.rect(this.player.getX(), this.player.getY(), this.player.getSize(), this.player.getSize());
        this.canvasPainter.fillStyle = "#fff";
        this.canvasPainter.fill();
        this.canvasPainter.closePath();
    }

    clearplayer() {
        this.canvasPainter.clearRect(this.player.getX(), this.player.getY(), this.player.getSize(), this.player.getSize());
    }
}

export default Move;