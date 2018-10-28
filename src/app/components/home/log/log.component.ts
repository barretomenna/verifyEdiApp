import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  showModal = false;
  constructor() { }

  ngOnInit() {
  }

  openModal(event) {
    console.log('oi');
    this.showModal = true;
  }

  closeModal(event) {
    this.showModal = event;
  }

}
