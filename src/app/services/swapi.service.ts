import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RespostaAPI, Result } from '../shared/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  api_url = 'https://swapi.dev/api';
  constructor(private http: HttpClient) {}

  get(category: string): Observable<any> {
    return this.http
      .get<RespostaAPI>(this.api_url + '/' + category)
      .pipe(tap((results) => console.log(results)));
  }

  search(category: string, value: string): Observable<Result> {
    return this.http
      .get<Result>(this.api_url + '/' + category + '/' + '?search=' + value);
  }
}
