import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActionsPortalComponent } from './modal-actions-portal.component';

describe('ModalActionsPortalComponent', () => {
  let component: ModalActionsPortalComponent;
  let fixture: ComponentFixture<ModalActionsPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalActionsPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalActionsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
