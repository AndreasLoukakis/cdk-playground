import { Component, OnInit } from '@angular/core';
import { OverlayOptions, OverlayService } from './../../services/overlay.service';
import { ModalWithPortalComponent } from './../../samples/modal-with-portal/modal-with-portal.component';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.scss']
})
export class CardCollectionComponent implements OnInit {

  title: string = 'Some projected title';
  constructor(private ols: OverlayService) { }

  ngOnInit(): void {
  }

  openOverlay() {
    this.ols.openModal({title: 'foo'})
  }

  openOverlayWithPortal() {
    this.ols.openModal({ title: 'modal with portal', cmp: ModalWithPortalComponent });
  }

}
