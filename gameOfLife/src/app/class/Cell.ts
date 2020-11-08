import { Coordinate } from './Coordinate';
import {Color} from './Color';

export class Cell  {
  coordinate: Coordinate;
  alive: boolean;
  adjacentCells: Array<boolean>;
  adjacentColor: Array<any>;
  color: any = '#000000';

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

  getAdjacentColor(): any{
    return this.adjacentColor;
  }
  setAdjacentColor(adjacentColor: any): void{
    this.adjacentColor = adjacentColor;
  }

  getColor(): number{
    return this.color;
  }
  setColor(color: number): void{
    this.color = color;
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
    let color = new Color();
    let colorList = [];
    for (let cell of this.adjacentCells){
      if (cell){
        colorList = this.adjacentColor;
        index++;
      }
    }
    if (this.alive){
     switch (index) {
       case 1:
         this.setAlive(false);
         break;
       case 2:
         if (colorList){
           this.setColor(color.mixColor(colorList));
         }
         this.setAlive(true);
         break;
       case 3:
         if (colorList){
           this.setColor(color.mixColor(colorList));
         }
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
          if (colorList){
            this.setColor(color.mixColor(colorList));
          }
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
