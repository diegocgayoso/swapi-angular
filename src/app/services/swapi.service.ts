import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ApiResult, FilmInfo, Item } from '../shared/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  api_url = 'https://swapi.dev/api';
  constructor(private http: HttpClient) { }

  get(categoria: string): Observable<FilmInfo[]> {
    return this.http
      .get<ApiResult>(this.api_url + '/' + categoria)
      .pipe(
        tap(results => console.log(results)),
        map((results) => results.results),
        tap(results => console.log(results)),
      )
  }
}
