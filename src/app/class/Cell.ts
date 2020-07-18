import { Coordinate } from './Coordinate';

export class Cell  {
  coordinate: Coordinate;
  alive: boolean;
  adjacentCells: Array<Cell>;

  constructor(coordinate: Coordinate, alive: boolean) {
    this.coordinate = coordinate;
    this.alive = alive;
  }
  getCoordinate(): Coordinate{
    return this.coordinate;
  }
  setCoordinate(coordinate: Coordinate): void{
    this.coordinate = coordinate;
  }
  getAlive(): boolean{
    return this.alive;
  }
  setAlive(alive): void{
    this.alive = alive;
  }
  getAdjacentCells(): any{
    return this.alive;
  }
  setAdjacentCells(adjacentCells): void{
    this.adjacentCells = adjacentCells;
  }

}
