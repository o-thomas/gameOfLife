import { Injectable } from '@angular/core';
import {Grid} from '../class/Grid';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class GridService {
  loading: boolean = false;
  grid = new Grid( 'newGrid', 50, 50);
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
      this.grid.setColorCell(obj.color);    }
  }

  saveGrid(jojo){
    return this.http.get(this.saveGridUrl);
  }
}
