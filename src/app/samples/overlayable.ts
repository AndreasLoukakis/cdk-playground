import { OverlayRef } from '@angular/cdk/overlay';

export interface Overlayable {

  ovlRef: OverlayRef;
  close(): void;

}