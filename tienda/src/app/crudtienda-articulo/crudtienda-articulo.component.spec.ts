import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtiendaArticuloComponent } from './crudtienda-articulo.component';

describe('CrudtiendaArticuloComponent', () => {
  let component: CrudtiendaArticuloComponent;
  let fixture: ComponentFixture<CrudtiendaArticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudtiendaArticuloComponent]
    });
    fixture = TestBed.createComponent(CrudtiendaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
