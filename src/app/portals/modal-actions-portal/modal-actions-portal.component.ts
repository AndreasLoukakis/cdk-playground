import {
  Component,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef,
  ApplicationRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import {
  DomPortalHost,
  TemplatePortal,
  PortalHost,
  CdkPortal
} from '@angular/cdk/portal';

@Component({
  selector: 'app-modal-actions-portal',
  template: `
  <ng-template cdk-portal>
    <ng-content></ng-content>
  </ng-template>
  `,
  styles: ['']
})
export class ModalActionsPortalComponent implements OnInit {

  private portalHost: PortalHost;
  @ViewChild(CdkPortal) portal;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalHost(
      document.querySelector('#modal-actions'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    // Attach portal to host
    this.portalHost.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }

}
