import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author:any;
  id:number;
  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private _router: Router
  ) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getAuthor();
    });

  }

  ngOnInit() {
    this.author = {name: "" };
  }
  edit(){
    let observable = this._httpService.editAuthor(this.id, this.author);
    observable.subscribe(data => {
      this._router.navigate(['/']);
    })
  }
  getAuthor(){
    let observable = this._httpService.getAuthor(this.id);
    observable.subscribe(data => {
      this.author = data['author'];
    })
  }

}
