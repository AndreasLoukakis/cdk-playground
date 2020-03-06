import { Component, OnInit } from '@angular/core';
import { Overlayable } from './../overlayable';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-modal-with-portal',
  templateUrl: './modal-with-portal.component.html',
  styleUrls: ['./modal-with-portal.component.scss']
})
export class ModalWithPortalComponent implements OnInit, Overlayable {
  
  ovlRef: OverlayRef;
  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.ovlRef.detach();
  }

}
