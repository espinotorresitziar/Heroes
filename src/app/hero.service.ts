import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable(
  {
    providedIn: 'root',
  }
)
export class HeroService {

  private url = "https://heroes00.herokuapp.com/";

  constructor (
    private http: HttpClient
  ) {}

  getHeroes() {
    return this.http.get(this.url);
  }
  getHero(id: number){
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }
}