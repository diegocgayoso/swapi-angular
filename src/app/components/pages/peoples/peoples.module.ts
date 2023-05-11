import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplesComponent } from './peoples.component';
import { PeoplesRoutingModule } from './peoples-routing.module';

@NgModule({
  declarations: [
    PeoplesComponent
  ],
  imports: [
    CommonModule,
    PeoplesRoutingModule
  ]
})
export class PeoplesModule { }
