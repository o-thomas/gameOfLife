import { Grid } from './Grid';
import { Coordinate } from './Coordinate';

class Cell  {
  grid: Grid;
  id: number;
  coordinate: Coordinate;
  alive: boolean;
  adjacentCell: Array<Cell>;

  constructor(grid: Grid, id: number, coordinate: Coordinate, alive: boolean, adjacentCell: Array<Cell>) {
    this.id = id;
    this.grid = grid;
    this.coordinate = coordinate;
    this.alive = alive;
    this.adjacentCell = adjacentCell;
  }
  getId(): number {
    return this.id;
  }
  setId(id): void{
    this.id = id;
  }
  getCoordinate(): Coordinate{
    return this.coordinate;
  }

  setCoordinate(coordinate: Coordinate): void{
    this.coordinate = coordinate;
  }
  getGrid(): Grid{
    return this.grid;
  }
  setGrid(grid): void{
    this.grid = grid;
  }
  getAlive(): boolean{
    return this.alive;
  }
  setAlive(alive): void{
    this.alive = alive;
  }
  getAdjacentCell(): Array<Cell> {
    return this.adjacentCell;
  }
  setAdjacentCell(adjacentCell): void{
    this.adjacentCell = adjacentCell;
  }

  detectAdjacentCell(): void {
    let adjacentCellTab: Array<any> = [];
    adjacentCellTab[0] = new Coordinate(this.coordinate.x + 1, this.coordinate.y);
    adjacentCellTab[1] = new Coordinate(this.coordinate.x - 1, this.coordinate.y);
    adjacentCellTab[2] = new Coordinate(this.coordinate.x, this.coordinate.y + 1);
    adjacentCellTab[3] = new Coordinate(this.coordinate.x , this.coordinate.y - 1);
    adjacentCellTab[4] = new Coordinate(this.coordinate.x + 1 , this.coordinate.y + 1);
    adjacentCellTab[5] = new Coordinate(this.coordinate.x + 1 , this.coordinate.y - 1);
    adjacentCellTab[6] = new Coordinate(this.coordinate.x - 1 , this.coordinate.y + 1);
    adjacentCellTab[7] = new Coordinate(this.coordinate.x - 1 , this.coordinate.y - 1);
    this.setAdjacentCell(adjacentCellTab);
  }


}
