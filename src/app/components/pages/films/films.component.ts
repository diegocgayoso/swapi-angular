import { Component, OnInit } from '@angular/core';

import { SwapiService } from 'src/app/services/swapi.service';
import { Filme } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  constructor(
    private swapiService: SwapiService
  ) {}

  resultFilms: Filme[] = [];
  colunas : string[] = ['title', 'director', 'producer', 'release_date']


  getFilmes() {
    this.swapiService.getFilms().subscribe(
      res => this.resultFilms = res.results
    )
  }

  ngOnInit() {
    this.getFilmes()

  }

  formatarData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
