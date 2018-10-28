import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { TitleBarComponent } from './title-bar/title-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
