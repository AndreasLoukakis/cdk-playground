import { Component, OnInit } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { Overlayable } from './../overlayable';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements Overlayable, OnInit {

  ovlRef: OverlayRef;
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.ovlRef.detach();
  }

}
