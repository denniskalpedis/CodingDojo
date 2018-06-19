import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  @Input() taskToShow: any;
  constructor() { }

  ngOnInit() {
  }

}
