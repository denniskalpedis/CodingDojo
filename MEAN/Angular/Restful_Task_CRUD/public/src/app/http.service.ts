import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getTask();
  }
  getTasks(){
    // let tempObservable = this._http.get('/api/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/api/tasks');
  }
  getTask(id){
    // let tempObservable = this._http.get('/api/tasks/5b217223c3b93669afffb276');
    // tempObservable.subscribe(data => console.log("Got our task!", data));
    return this._http.get('/api/tasks/' + id);
  }
  deleteTask(id){
    return this._http.delete('/api/tasks/delete/' + id);
  }
  editTask(id, data){
    return this._http.put('/api/tasks/update/' + id, data);
  }
  createTask(data){
    return this._http.post('/api/tasks/', data);
  }
}
