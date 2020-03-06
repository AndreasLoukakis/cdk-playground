import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWithPortalComponent } from './modal-with-portal.component';

describe('ModalWithPortalComponent', () => {
  let component: ModalWithPortalComponent;
  let fixture: ComponentFixture<ModalWithPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWithPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWithPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
