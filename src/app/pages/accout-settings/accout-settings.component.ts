import { Component, OnInit , Inject} from '@angular/core';
import { SettingsService } from '../../services/service.index';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: [
  ]
})
export class AccoutSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService, @Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any){

    this.applyCheck(link);

    // let url = `./assets/css/colors/${ tema }.css`;
    // this._document.getElementById('tema').setAttribute('href', url);

    // this._ajustes.ajustes.tema = tema;
    // this._ajustes.ajustes.temaUrl = url;

    this._ajustes.aplicarTema( tema );

  }

  applyCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector'); // Vanilla javaScript esta clase 'selector' la tienen todas las etiquetas a, es la que las une a todas
    for (const key of selectores) {
      key.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){

    const selectores: any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for (const key of selectores) {
        if ( key.getAttribute('data-theme') === tema) {
          key.classList.add('working');
          break; // Con esta instruccion estoy saliendo del ciclo for
        }
    }

  }

}
