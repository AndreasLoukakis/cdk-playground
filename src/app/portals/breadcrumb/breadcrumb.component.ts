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
  selector: 'app-breadcrumb-portal',
  template: `
  <ng-template cdk-portal>
    <ng-content></ng-content>
  </ng-template>
  `,
  styles: ['']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit, OnDestroy {

  private portalHost: PortalHost;
  @ViewChild(CdkPortal) portal;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalHost(
      document.querySelector('#breadcrumb-host'),
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
