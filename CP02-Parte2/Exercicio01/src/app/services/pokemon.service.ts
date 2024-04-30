import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interface/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private request = 'https://demo0860081.mockable.io/pockemon';
  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) { }

  listar(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.request) as Observable<Pokemon[]>;
  }
}


