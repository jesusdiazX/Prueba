import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudclienteArticuloComponent } from './crudcliente-articulo.component';

describe('CrudclienteArticuloComponent', () => {
  let component: CrudclienteArticuloComponent;
  let fixture: ComponentFixture<CrudclienteArticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudclienteArticuloComponent]
    });
    fixture = TestBed.createComponent(CrudclienteArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
