import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addAuthor(data){
    return this._http.post('/api/author/', data);
  }
  getAuthors(){
    return this._http.get('/api/authors');
  }
  getAuthor(data){
    return this._http.get('/api/author/'+ data);
  }
  editAuthor(id, author){
    return this._http.put('/api/edit/author/'+ id, author);
  }
  deleteAuthor(id){
    return this._http.delete('/api/delete/' + id);
  }
}
