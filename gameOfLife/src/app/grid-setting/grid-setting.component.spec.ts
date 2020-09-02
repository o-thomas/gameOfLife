import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSettingComponent } from './grid-setting.component';

describe('GridSettingComponent', () => {
  let component: GridSettingComponent;
  let fixture: ComponentFixture<GridSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
