import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map} from 'rxjs/operators';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo: string | undefined;
  public tituloSubs$:Subscription;

  constructor(private router: Router) {
    this.tituloSubs$ = this.getRouteData().subscribe(({title}) => {
      this.titulo = title;
      document.title = title;
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getRouteData(){
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
    );
  }
}
