import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { PlanetsRoutingModule } from './planets-routing.module';



@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
