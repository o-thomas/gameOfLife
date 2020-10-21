import {Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import {GridService} from '../services/grid.service';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {Grid} from '../class/Grid';


@Component({
  selector: 'app-grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.css'],
})
export class GridFormComponent implements OnInit {
  grid: Grid;
  form: FormGroup;
  name: string;
  grids: any;

  @Output() play = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() off = new EventEmitter<void>();
  @Output() post = new EventEmitter<void>();
  @Output() cellColor = new EventEmitter<void>();
  @Output() genGrid = new EventEmitter<void>();
  @Output() pipetteMode = new EventEmitter<void>();

  constructor(protected service: GridService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getGrid();
    this.grid = this.service.grid;
    this.form = this.formBuilder.group({
      name: [this.service.grid.name],
      axeX: [this.service.grid.axeXLength],
      axeY: [this.service.grid.axeYLength],
      color: [this.service.grid.colorCell],
      grids: [''],
    });
    this.form.get('name').valueChanges.subscribe(x => {
      this.service.grid.setName(x);
    });
    this.form.get('grids').valueChanges.subscribe(x => {
      this.service.settGrid(x);
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
  generateGrid(): void{
    this.genGrid.emit();
  }
  pipette(): void{
    this.pipetteMode.emit();
  }

  getGrid(): void{
    this.service.getGrid().subscribe(
      res => {
        this.grids = res;
      },
      err => console.log(err)
    );
  }

}
