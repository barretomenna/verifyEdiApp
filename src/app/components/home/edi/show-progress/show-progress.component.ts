import { Component, OnInit, Input } from '@angular/core';
import Log from '../../../../entidades/log';

@Component({
  selector: 'app-show-progress',
  templateUrl: './show-progress.component.html',
  styleUrls: ['./show-progress.component.scss']
})
export class ShowProgressComponent implements OnInit {

  @Input() show: boolean;
  @Input() logs: Array<Log>;

  constructor() { }

  ngOnInit() {
  }

}
