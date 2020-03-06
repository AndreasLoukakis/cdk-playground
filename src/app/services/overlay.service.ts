
import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef, ComponentType } from '@angular/cdk/overlay';

import { Overlayable } from './../samples/overlayable';
import { SimpleModalComponent } from './../samples/simple-modal/simple-modal.component';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  private overlayRef: OverlayRef;
  private offset: string = '40px';

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().right(this.offset).bottom(this.offset)
    });
  }

  openModal(options: OverlayOptions) {
    options.cmp = options.cmp || SimpleModalComponent;
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
    const portal = new ComponentPortal(options.cmp);
    const componentRef = this.overlayRef.attach(portal);
    options.cmp = componentRef.instance;
    // pass a ref to component, to handle closing etc
    (options.cmp as unknown as Overlayable).ovlRef = this.overlayRef;
  }
  
}

export interface OverlayOptions {
  title: string;
  cmp?: ComponentType<any>
}