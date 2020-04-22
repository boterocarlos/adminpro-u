import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    // this.regresaObservable().pipe(
    //   retry(2) // Esta funcion sirve para repetir N veces la funcion
    // )
    // .subscribe(
    //   numero => console.log('Subs', numero),
    //   error => console.error('Error en el obs', error ),
    //   () => console.log('El observador termino!')
    // );

   this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error ),
      () => console.log('El observador termino!')
    );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  regresaObservable(): Observable<any> {

     return new Observable( (observer: Subscriber<any>) => { // en el observable Recibimos un objeto llamado observer y su tipo es subscriber

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;

        const salida = {
            valor:contador
        };

        // los observables tranajan con una Linea de datos / la funcion next notifica cada vez que la informamcion llegue al codigo que se implemente
        observer.next( salida ); // la funcion next notifica cada vez que llegue un numero de la variable contador

        // if (contador === 5) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }

        // if (contador === 3) {
        //   // clearInterval( intervalo );
        //   observer.error('Auxilio');
        // }

      }, 1000);
    }).pipe(
          map( resp =>  resp.valor), // Con el metodo map expreso la informacion de la manera que yo quiero
          filter( ( valor, index ) => {

            if ( (valor % 2) === 1) {
              return false;
            } else{
              return true;
            }

          })
    );

  }

}
