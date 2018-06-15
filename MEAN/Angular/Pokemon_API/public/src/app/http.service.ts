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
    tempObservable.subscribe(data => {console.log("Got the Pokemon!", data)
      for(var ability of data['abilities']){
        console.log (data['name'] + " ability : " + ability['ability']['name']);
        let abilityCount = this._http.get(ability['ability']['url']);
        abilityCount.subscribe(data => console.log(data['pokemon'].length + " pokemon have the ability " + data['name'] + "!"));
      }
    });
  }
}
