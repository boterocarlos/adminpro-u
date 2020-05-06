import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component implements OnInit {

    graficos: any = {
      grafico1: {
        labels: ['Termitas', 'Crawling Control', 'Garden Spray'],
        data:  [24, 30, 46],
        type: 'doughnut',
        leyenda: 'Servicios mas recurridos'
      },
      grafico2: {
        labels: ['Hombres', 'Mujeres'],
        data:  [4500, 6000],
        type: 'doughnut',
        leyenda: 'Entrevistados'
      },
      grafico3: {
        labels: ['Si', 'No'],
        data:  [95, 5],
        type: 'doughnut',
        leyenda: '¿Le dan gases los frijoles?'
      },
      grafico4: {
        labels: ['No', 'Si'],
        data:  [85, 15],
        type: 'doughnut',
        leyenda: '¿Le importa que le den gases?'
      },
    };

  constructor() { }

  ngOnInit(): void {
  }

}
