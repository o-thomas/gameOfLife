import { Component, OnInit } from '@angular/core';
import {Grid} from '../class/Grid';
import {Cell} from '../class/Cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  grid: Grid = new Grid(20, 20);
  gridHeight: number = this.grid.getAxeXLength();
  gridWidth: number = this.grid.getAxeYLength();
  containerHeight: number;
  containerWidth: number;
  cells: Array<Cell>;
  constructor() { }
  ngOnInit(): void {
    this.grid.createCells();
    this.cells = this.grid.cellList;
    this.defineDimenssionCells();
  }
  defineDimenssionCells(): object{
    this.containerWidth = document.getElementById('container').offsetWidth;
    let result =  (this.containerWidth / this.gridWidth);
    let style = {
      width: result.toString() + 'px',
      height: result.toString() + 'px',

    };
    console.log(style);
    return style;
  }
/* formule a appliquer pour definir la taille des cellules: containerWidth / gridWidth et
   containerheight / gridheight
 */
}
