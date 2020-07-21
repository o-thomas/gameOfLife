import { Coordinate } from './Coordinate';

export class Cell  {
  coordinate: Coordinate;
  alive: boolean;
  adjacentCells: Array<boolean>;

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
  deadOrAlive(): void{
    let index = 0;
    for (let cell of this.adjacentCells){
      if (cell){
        index++;
      }
    }
    if (this.alive){
     switch (index) {
       case 1:
         this.setAlive(false);
         break;
       case 2:
         this.setAlive(true);
         break;
       case 3:
         this.setAlive(true);
         break;
       case 4:
         this.setAlive(false);
         break;
       case 5:
         this.setAlive(false);
         break;
       case 6:
         this.setAlive(false);
         break;
       case 7:
         this.setAlive(false);
         break;
       case 8:
         this.setAlive(false);
         break;
       default:
         this.setAlive(false);
         break;

       }
     }else{
      switch (index) {
        case 0:
          this.setAlive(false);
          break;
        case 1:
          this.setAlive(false);
          break;
        case 2:
          this.setAlive(false);
          break;
        case 3:
          this.setAlive(true);
          break;
        case 4:
          this.setAlive(false);
          break;
        case 5:
          this.setAlive(false);
          break;
        case 6:
          this.setAlive(false);
          break;
        case 7:
          this.setAlive(false);
          break;
        case 8:
          this.setAlive(false);
          break;
        default:
          this.setAlive(false);
          break;
      }
    }
  }

}
