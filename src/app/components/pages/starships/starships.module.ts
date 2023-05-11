import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { StarshipsRoutingModule } from './starships-routing.module';



@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule
  ]
})
export class StarshipsModule { }
