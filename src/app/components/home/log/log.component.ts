import { Component, OnInit } from '@angular/core';
import Log from '../../../entidades/log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  showModal = false;
  logs = new Array<Log>();
  selectedLog: Log;
  searchTerm: string;
  constructor() { }

  ngOnInit() {
    this.logs.push(new Log('1', 'aaaa', 'teste', new Date()));
    this.logs.push(new Log('1', 'bbbb', 'teste2', new Date()));
    this.logs.push(new Log('1', 'cccc', 'teste3', new Date()));
    this.logs.push(new Log('1', 'dddd', 'teste4', new Date()));
    this.logs.push(new Log('1', 'dada', 'teste5', new Date()));
  }

  openModal(event) {
    this.showModal = true;
    this.selectedLog = event;
  }

  closeModal(event) {
    this.showModal = event;
  }

}
