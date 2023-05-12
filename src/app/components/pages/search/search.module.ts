import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    CardModule
  ]
})
export class SearchModule { }
