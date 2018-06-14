import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(){
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/151/');
    tempObservable.subscribe(data => console.log("Got the Pokemon!", data));
  }
}
