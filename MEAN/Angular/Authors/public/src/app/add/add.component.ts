import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  author :any

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.author = {name: ""};
  }
  add(){
    let observable = this._httpService.addAuthor(this.author);
    observable.subscribe(data => {
      this._router.navigate(['/']);
    })
  }

}
