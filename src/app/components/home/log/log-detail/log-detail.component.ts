import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Log from '../../../../entidades/log';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.scss'],
  providers: [DataService]
})
export class LogDetailComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  @Input() log: Log;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.log = new Log();
  }

  close() {
    this.closeModal.emit(false);
  }
}
