import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edi',
  templateUrl: './edi.component.html',
  styleUrls: ['./edi.component.scss']
})
export class EdiComponent implements OnInit {

  item: any;

  constructor() { }

  ngOnInit() {
  }

  log(evento) {
    console.log(evento);
  }

}
