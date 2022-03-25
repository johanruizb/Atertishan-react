class Player {
    constructor(limites) {
        this.player = { x: limites, y: limites, size: 70 };
    }

    getX() {
        return this.player.x;
    }

    getY() {
        return this.player.y;
    }

    getSize(){
        return this.player.size;
    }

    setX(integ) {
        this.player.x = integ;
    } setY(integ) {
        this.player.y = integ;
    }
}

export default Player;