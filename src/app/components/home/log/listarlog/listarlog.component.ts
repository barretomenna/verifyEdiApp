import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Log from '../../../../entidades/log';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-listarlog',
  templateUrl: './listarlog.component.html',
  styleUrls: ['./listarlog.component.scss']
})
export class ListarlogComponent implements OnInit {

  @Input() logs: Array<Log>;
  @Input() searchTerm: string;
  @Output() showModal: EventEmitter<Log> = new EventEmitter();

  data: string;

  constructor() { }

  ngOnInit() {

  }

  openModal(item: Log) {
    this.showModal.emit(item);
  }


}
