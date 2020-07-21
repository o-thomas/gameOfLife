import { Component, OnInit } from '@angular/core';
import {Grid} from '../class/Grid';
import {Cell} from '../class/Cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  grid: Grid = new Grid(50, 50);
  gridHeight: number = this.grid.getAxeXLength();
  gridWidth: number = this.grid.getAxeYLength();
  containerHeight: number;
  containerWidth: number;
  interval: number;
  cells: Array<Cell>;
  styleCell = {
  };
  constructor() { }
  ngOnInit(): void {
    this.grid.createCells();
    this.cells = this.grid.cellList;
    this.defineDimenssionCells();
  }
  defineDimenssionCells(): void{
    this.containerWidth = document.getElementById('container').offsetWidth;
    let result =  this.containerWidth / this.gridWidth;
    let resultString = result.toString();
    this.styleCell = {
      width: resultString + 'px',
      height: resultString + 'px',
    };
  }
  play(): void{
   this.interval = window.setInterval(() => this.tarin(), 50);
  }
  stop(): void{
    window.clearInterval(this.interval);
  }
  tata(cell): void{
    cell.setAlive(!cell.getAlive());
    this.grid.detectAdjacentCell();
  }
  tarin(): void{
    this.grid.god();
    this.grid.detectAdjacentCell();
  }

/* formule a appliquer pour definir la taille des cellules: containerWidth / gridWidth et
   containerheight / gridheight
 */
}
