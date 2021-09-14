import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {


  public intervalSubs: Subscription;

  constructor() {


    // this.retornoObservable().pipe(
    //   retry()
    // ).subscribe(
    //   value => console.log('Subs: ', value),
    //   err => console.warn('Error', err),
    //   () => console.info('Obs Terminado')

    //   );
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      // take(10),
      map(value =>  value + 1), 
      filter(value => value % 2 === 0),
    );
    
  }

  retornoObservable(): Observable<number> {
    const obs$ = new Observable<number>(observer => {

      let i = -1;

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 500)
    });
    return obs$;
  }

}
