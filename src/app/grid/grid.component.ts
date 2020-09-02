import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Grid} from '../class/Grid';
import {Cell} from '../class/Cell';
import {GridService} from '../services/grid.service';

@Component({
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  axeY: number;
  grid: Grid;
  colorCell: number;
  inWork: boolean = false;
  axeX: number;
  gridHeight: number;
  gridWidth: number;
  containerHeight: number;
  containerWidth: number;
  generation: number = 0;
  cellAlive: number = 0;
  interval: number;
  cells: Array<Cell>;
  pipetteMod: boolean = false;
  cellColor: number;
  styleCell = {
    width: '',
    height: '',
    'background-color': ''
  };

  constructor(private service: GridService) { }
  ngOnInit(): void {
    this.grid = this.service.grid;
    this.gridHeight = this.grid.getAxeXLength();
    this.gridWidth = this.grid.getAxeYLength();
    this.initGrid();
  }
  defineDimenssionCells(): void{
    this.containerWidth = document.getElementById('container').offsetWidth;
    let result =  this.containerWidth / this.gridWidth;
    let resultString = result.toString();
    this.styleCell.width  = resultString + 'px';
    this.styleCell.height  = resultString + 'px';
  }

  play(): void{
    this.service.loading = true;
    this.interval = window.setInterval(() => this.initGame(), 200);
  }
  initGrid(): void{
    this.grid.createCells();
    this.cells = this.grid.cellList;
    this.defineDimenssionCells();
  }
  stop(): void{
    this.inWork = false;
    window.clearInterval(this.interval);
    console.log(this.grid.colorCell);
    console.log(this.service.grid.colorCell);
  }
  setAlive(cell): void{
    cell.setAlive(!cell.getAlive());
    cell.setColor(this.grid.colorCell);
    this.grid.detectAdjacentCell();
  }
  initGame(): void{
    this.generation = this.generation + 1;
    this.grid.initGame();
    this.cellAlive = this.grid.howCellAlive();
    this.grid.detectAdjacentCell();
    if(this.cellAlive === 0) {
      this.stop();
    }
    }
  clearGrid(): void{
    stop();
    this.grid.clearGrid();
    this.generation = 0;
  }
  defineGridDimension(): void{
    this.grid.setAxeXLength(this.axeX);
    this.grid.setAxeYLength(this.axeY);
    this.initGrid();
  }
  saveGrid(): any{
    this.service.saveGrid(this.grid).subscribe(
      res => {
        let response = res;
        console.log(response);
      },
      err => {

        let r = err;
        console.log(r)
      }
    );


  }

}
