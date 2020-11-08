import { Injectable } from '@angular/core';
import {Grid} from '../class/Grid';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GridService {
  loading: boolean = false;
  grid = new Grid( 'bla', 50, 50);
  private saveGridUrl: 'http://localhost:3000/grid/grid';

  constructor(private http: HttpClient) { }

  setValue(obj): void{
    if (obj.axeY){
      this.grid.setAxeYLength(obj.axeY);
    }
    if (obj.axeX){
      this.grid.setAxeXLength(obj.axeX);
    }
    if (obj.color){
      this.grid.setColorCell(obj.color);
    }
  }

  setGrid(grid): void{
    this.grid = grid;
  }

  saveGrid(grid): Observable<object>{
    let header = new HttpHeaders({
      'grid': grid
    });
    return this.http.post('http://localhost:3000/grid/grid', grid);
  }

  getGrid(): Observable<object>{
    return this.http.get('http://localhost:3000/grid/grid');
  }
  settGrid(grid): void{
    this.grid = new Grid(grid.name, grid.axeYLength, grid.axeXLength);
    this.grid.setCellList(grid.cellList);
  }
}
