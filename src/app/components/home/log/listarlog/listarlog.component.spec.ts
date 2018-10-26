import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarlogComponent } from './listarlog.component';

describe('ListarlogComponent', () => {
  let component: ListarlogComponent;
  let fixture: ComponentFixture<ListarlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
