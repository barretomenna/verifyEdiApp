import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiComponent } from './edi.component';

describe('EdiComponent', () => {
  let component: EdiComponent;
  let fixture: ComponentFixture<EdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
