import { SwapiService } from 'src/app/services/swapi.service';
import { Component, OnInit } from '@angular/core';
import { Nave } from 'src/app/shared/models/interfaces';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
})
export class StarshipsComponent implements OnInit {
  resultStarShips: Nave[] = [];

  colunas: string[] = ['name', 'model', 'manufacturer', 'hyperdrive_rating'];
  showSpinner = false;

  totalStarships!: number;
  paginaAtual = 1;

  detailsStarships: Nave[] = [];

  constructor(private swapiService: SwapiService) {}
  ngOnInit(){
    this.getStarShips();
  }

  getStarShips(page = 1) {
    this.showSpinner = true;
    this.swapiService.getStarShips(page).subscribe((res) => {
      this.totalStarships = res.count;
      console.log(this.totalStarships);

      this.resultStarShips = res.results;
      this.showSpinner = false;
    });
  }
  changePagination(e: PageEvent){
    this.paginaAtual = e.pageIndex + 1;
    this.getStarShips(this.paginaAtual);
  }
  clickedRow(row: Nave){
    if(this.detailsStarships){
      this.detailsStarships = [];
      this.detailsStarships.push(row);
      console.log(row);

    }
  }


}
