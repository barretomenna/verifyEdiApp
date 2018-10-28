import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Log from '../../../../entidades/log';

@Component({
  selector: 'app-listarlog',
  templateUrl: './listarlog.component.html',
  styleUrls: ['./listarlog.component.scss']
})
export class ListarlogComponent implements OnInit {

  log: Log;
  @Output() showModal: EventEmitter<Log> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openModal(item: Log) {
    this.showModal.emit(item);
  }


}
