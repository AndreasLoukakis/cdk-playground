import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './portals/breadcrumb/breadcrumb.component';
import { CardCollectionComponent } from './pages/card-collection/card-collection.component';
import { SimpleTableComponent } from './pages/simple-table/simple-table.component';
import { SimpleModalComponent } from './samples/simple-modal/simple-modal.component';
import { ModalWithPortalComponent } from './samples/modal-with-portal/modal-with-portal.component';
import { ModalActionsPortalComponent } from './portals/modal-actions-portal/modal-actions-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    CardCollectionComponent,
    SimpleTableComponent,
    SimpleModalComponent,
    ModalWithPortalComponent,
    ModalActionsPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
