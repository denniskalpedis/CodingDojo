import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  author :any

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.author = {name: ""};
  }
  add(){
    let observable = this._httpService.addAuthor(this.author);
    observable.subscribe(data => {
      console.log("______________")
      console.log(data);
      this.author = {name: ""}
      //this.getAuthors;
    })
  }

}
