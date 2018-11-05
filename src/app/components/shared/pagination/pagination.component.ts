import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() numberOfPages: number;
  numberOfItens: Array<number>;
  firtPosition: number;
  lastPosition: number;
  actualPosition: number;
  maxItens: number;

  constructor(
    private rota: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.firtPosition = 1;
    this.lastPosition = 9;
    this.maxItens = 10;
    this.actualPosition = 1;
    this.pagination(this.maxItens);
  }


  private pagination(maxItens: number) {
    this.numberOfItens = this.paginationBuilder(this.firtPosition, this.lastPosition, maxItens);
  }

  private paginationBuilder(start: number, finish: number, maxItens: number) {
    const pagination = new Array();

    for (let x = start; x <= finish; x++) {
      pagination.push(x);
    }

    return pagination;
  }

  goTo(pagina: number) {

    this.actualPosition = pagina;

    if (pagina >= this.numberOfPages) {
      return;
    }

    if (this.next(pagina)) {
      return;
    }
    this.back(pagina);
  }

  private next(pagina) {

    const isNext = pagina === this.lastPosition && Math.round(this.lastPosition / 10) < this.numberOfPages;

    if (isNext) {
      this.firtPosition = this.lastPosition;
      this.lastPosition = pagina === this.maxItens ? this.lastPosition + (this.maxItens - 1) : this.lastPosition + this.maxItens;
      this.lastPosition = this.lastPosition > this.numberOfPages ? this.numberOfPages : this.lastPosition;
      this.pagination(10);
      return true;
    }
    return false;
  }

  private back(pagina) {
    const isBack = this.actualPosition === this.firtPosition && pagina > 1;

    if (isBack) {
      this.lastPosition = this.firtPosition;
      this.firtPosition = this.lastPosition - this.maxItens;
      this.firtPosition = this.firtPosition <= 0 ? 1 : this.firtPosition;
      this.pagination(10);
      return true;
    }
    return false;
  }

}
