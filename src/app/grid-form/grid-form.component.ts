import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.css'],
})
export class GridFormComponent implements OnInit {
  @Output() loading = new EventEmitter<void>();
  axeY: number;
  axeX: number;
  @Output() play = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() off = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {
  }
  stop(): void{
    this.off.emit();
  }
  clearGrid(): void{
    this.clear.emit();
  }
  start(): void{
    this.play.emit();
  }

}
