import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }
  getAuthorsFromService() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      for (var author of data['authors']) {
        this.authors.push(author);
      }
    });
  }
  delete(id){
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      this.authors = [];
      this.getAuthorsFromService();
    })
  }
}
