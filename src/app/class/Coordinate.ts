export class Coordinate{
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getY(): number{
    return this.y;
  }
  setY(y): void{
    this.y = y;
  }
  getX(): number{
    return this.x;
  }
  setX(x): void{
    this.x = x;
  }
}
