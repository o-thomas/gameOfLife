import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  loading: boolean = false;
  constructor() { }
}
