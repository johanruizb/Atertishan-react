class Player {
  constructor() {
    this.player = { x: 0, y: 0, inventory: [] };

    this.setInventorySpace(5);
  }

  setInventorySpace(size) {
    for (let i = 0; i < size; i++) {
      this.player.inventory.push({ type: 0, count: 0, type_text: "" });
    }
  }

  addToInventory(type, count) {
    for (let i = 0; i < this.player.inventory.length; i++) {

      let sameType = this.player.inventory[i].type === 0 || this.player.inventory[i].type === type;
      let hasSpace = this.player.inventory[i].count < 16;

      if (sameType && hasSpace) {
        if (this.player.inventory[i].type === 0) {
          this.player.inventory[i].type = type;
          this.player.inventory[i].type_text = this.sortOut(type);
        }

        if (this.player.inventory[i].count + count > 16) {
          let resta = 16 - this.player.inventory[i].count;
          this.player.inventory[i].count += resta;
          count -= resta;
        } else {
          this.player.inventory[i].count += count;
          break;
        }
      }
    }

    for (let j = 0; j < this.player.inventory.length; j++) {
      let slot = this.player.inventory[j];
      console.log(slot);
    }
  }
  sortOut(type) {
    switch (type) {
      case 1:
        return "Tronco";
      default:
        return "";
    }
  }

  getPlayer() {
    return this.player;
  }

  getX() {
    return this.player.x;
  }

  getY() {
    return this.player.y;
  }

  getSize() {
    return this.player.size;
  }

  moreX() {
    this.player.x++;
  }
  lessX() {
    this.player.x--;
  }

  moreY() {
    this.player.y++;
  }
  lessY() {
    this.player.y--;
  }
}

export default Player;
