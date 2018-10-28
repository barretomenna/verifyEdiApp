import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show: false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeModal.emit(false);
  }

}
