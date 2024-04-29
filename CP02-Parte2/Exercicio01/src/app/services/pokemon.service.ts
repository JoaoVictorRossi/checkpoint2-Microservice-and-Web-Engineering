import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interface/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private request = 'http://demo5154149.mockable.io/listar-pokemons';
  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) { }

  listar(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.request) as Observable<Pokemon[]>;
  }
}


