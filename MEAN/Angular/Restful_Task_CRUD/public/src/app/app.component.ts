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
  newTask: any;
  editedTask: any;
  editID = '';

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getTasksFromService();
    this.newTask = { title: "", description: "" }
    this.editedTask = { title: "", description: "" }
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
    });
  }
  deleteTaskFromService(id) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {console.log(data)});
    this.tasks = [];
    this.getTasksFromService();
  }
  editTaskFromService(id) {
    this.editedTask.updatedAt = new Date().toISOString();
    console.log(this.editedTask);
    let observable = this._httpService.editTask(id, this.editedTask);
    observable.subscribe(data => {console.log(data)});
    this.tasks = [];
    this.getTasksFromService();
  }
  createTaskFromService() {
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {console.log(data)});
    this.tasks = [];
    this.getTasksFromService();
  }
  editTask(id){
    this.editID = id;
    let observable = this._httpService.getTask(id);

    observable.subscribe(data => {
      console.log(data['tasks']);
      this.editedTask = data['tasks'];
      console.log(this.editedTask.title);
    });
    
  }
}