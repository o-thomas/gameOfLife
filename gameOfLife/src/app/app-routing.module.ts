import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { GridFormComponent } from './grid-form/grid-form.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent},
  { path: 'griiid', component: GridFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
