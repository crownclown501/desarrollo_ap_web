import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuariosScreenComponent } from './registro-usuarios-screen.component';

describe('RegistroUsuariosScreenComponent', () => {
  let component: RegistroUsuariosScreenComponent;
  let fixture: ComponentFixture<RegistroUsuariosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroUsuariosScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUsuariosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
