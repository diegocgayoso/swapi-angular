import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwapiService } from 'src/app/services/swapi.service';
import { Film } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  constructor(
    // private swapiService: SwapiService
    private http: HttpClient
  ) {}

  urlJSONFilms = 'assets/films.json';
  resultFilms: any;
  colunas : string[] = ['title', 'director', 'producer', 'release_date']
  // origem: string = 'films';
  // films!: Film[];
  // subscription!: Subscription;
  // film!: Film;

  getFilmes() {
    this.http.get<any>(this.urlJSONFilms).subscribe((res) => {
      this.resultFilms = res.results;
      console.log(this.resultFilms);
    });
  }

  ngOnInit() {
    this.getFilmes()
    // this.subscription = this.swapiService.getFilms(this.origem).subscribe({
    //   next: (result) => {
    //     this.films = this.filmsToArray(result.results);
    //     console.log(result);
    //   },
    //   error: (erro) => console.error(erro),
    //   complete: () => console.log(this.films),
    // });
  }

  // filmsToArray(items: any) {
  //   const films: Film[] = [];
  //   items.forEach((item: Film) => {
  //     films.push(
  //       (this.film = {
  //         title: item.title,
  //         episode_id: item.episode_id,
  //         opening_crawl: item.opening_crawl,
  //         director: item.director,
  //         characters: item.characters,
  //         url: item.url,
  //       })
  //     );
  //   });
  //   return films;
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  formatarData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
