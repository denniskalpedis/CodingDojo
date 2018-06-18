import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  singleTask = {};

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    // this.getTasksFromService();
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      for (var task of data['tasks']) {
        this.tasks.push(task);
      }
    });
  }
  getTaskFromService(id) {
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      this.singleTask= data['tasks'];
      console.log(data['tasks']);
    });
  }
}