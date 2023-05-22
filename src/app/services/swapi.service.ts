import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme, RespostaAPI } from '../shared/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private api_url = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getFilms(filterTitle?: string): Observable<RespostaAPI<Filme>> {
    let url = `${this.api_url}/films`;
    if(filterTitle){
      url += `?search=${filterTitle}`
    }
    return this.http
      .get<RespostaAPI<Filme>>(url);
  }
}