import {Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import {GridService} from '../services/grid.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import {Grid} from '../class/Grid';


@Component({
  selector: 'app-grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.css'],
})
export class GridFormComponent implements OnInit {
  grid: Grid;
  form: FormGroup;
  pipetteMode: boolean = false;
  @Output() play = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() off = new EventEmitter<void>();
  @Output() post = new EventEmitter<void>();
  @Output() cellColor = new EventEmitter<void>();

  constructor(private service: GridService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      axeX: new FormControl(
        this.service.grid.axeXLength,
      ),
      axeY: new FormControl(
        this.service.grid.axeYLength,
      ),
      color: new FormControl(
        this.service.grid.colorCell)
    });
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
  sendValue(): void{
    this.service.setValue(this.form.value);
  }
  postGrid(): void{
    this.post.emit();
  }

}
