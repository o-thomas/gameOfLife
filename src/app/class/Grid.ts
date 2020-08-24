import { Cell } from './Cell';
import { Coordinate } from './Coordinate';
export class Grid {
  axeYLength: number;
  axeXLength: number;
  generation: number;
  cellAlive: number;
  cellList: Array<Cell>;

  constructor(axeYLength: number, axeXLength: number) {
    this.axeYLength = axeYLength;
    this.axeXLength = axeXLength;
  }

  getAxeYLength(): number {
    return this.axeYLength;
  }

  setAxeYLength(axeYLength): void {
    this.axeYLength = axeYLength;
  }

  getGeneration(): number {
    return this.generation;
  }

  setGeneratiob(generation): void {
    this.generation = generation;
  }

  getCellAlive(): number {
    return this.cellAlive;
  }

  setCellAlive(cellAlive): void {
    this.cellAlive = cellAlive;
  }

  getAxeXLength(): number {
    return this.axeXLength;
  }

  setAxeXLength(axeXLength): void {
    this.axeXLength = axeXLength;
  }

  getCellList(): any {
    return this.cellList;
  }

  setCellList(cellList): void {
    this.cellList = cellList;
  }

  createCells(): void {
    let cellList = [];
    for (let i = 0; i < this.axeYLength; ++i) {
      for (let j = 0; j < this.axeXLength; ++j) {
        let coordinate = new Coordinate(j, i);
        let cell = new Cell(coordinate, false);
        cellList.push(cell);
        this.cellList = cellList;
      }
    }
    this.detectAdjacentCell();
  }

  detectAdjacentCell(): void {
    for (let cell of this.cellList) {
      let listCell: Array<boolean> = [];
      let coordinatesList: Array<Coordinate> = [];
      let x = cell.coordinate.x;
      let y = cell.coordinate.y;
      coordinatesList[0] = new Coordinate(x + 1, y);
      coordinatesList[1] = new Coordinate(x - 1, y);
      coordinatesList[2] = new Coordinate(x, y + 1);
      coordinatesList[3] = new Coordinate(x, y - 1);
      coordinatesList[4] = new Coordinate(x + 1, y + 1);
      coordinatesList[5] = new Coordinate(x + 1, y - 1);
      coordinatesList[6] = new Coordinate(x - 1, y + 1);
      coordinatesList[7] = new Coordinate(x - 1, y - 1);
      for (let target of this.cellList) {
        for (let coordinate of coordinatesList) {
          if (target.coordinate.getX() === coordinate.x && target.coordinate.getY() === coordinate.y) {
            listCell.push(target.getAlive());
          }
        }
      }
      cell.setAdjacentCells(listCell);
    }
  }

  initGame(): void {
    for (let cell of this.cellList) {
      cell.deadOrAlive();
    }
  }
  howCellAlive(): number{
    this.generation = 0;
    for (let cell of this.cellList) {
      if(cell.alive){
        this.generation++
      }
    }
    return this.generation
    }

  clearGrid(): void {
    for (let cell of this.cellList) {
      cell.setAlive(false);
    }
  }
}
