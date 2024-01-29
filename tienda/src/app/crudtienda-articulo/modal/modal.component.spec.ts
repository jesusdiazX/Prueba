import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTienda_articuloComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalTienda_articuloComponent;
  let fixture: ComponentFixture<ModalTienda_articuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTienda_articuloComponent]
    });
    fixture = TestBed.createComponent(ModalTienda_articuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
