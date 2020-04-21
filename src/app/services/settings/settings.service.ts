import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes: Ajustes = {
  temaUrl: './assets/css/colors/default-dark.css',
  tema: 'default-dark'
};

  constructor(@Inject(DOCUMENT) private _document) {

    this.cargarAjustes();

   }

  // lo guardo en una llave llamada 'ajustes', localStorage solo graba en formato String por eso con la funcion JSON lo pasamos con el formato String
  guardarAjustes() {
    // console.log('Guardando en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  // JSON.parse() sirve para volver el String a un objeto de javaScript al  que teniamos desde un principio
  cargarAjustes(){
    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log('Cargando del localStorage');

      this.aplicarTema( this.ajustes.tema );
    }else{
      // console.log('Usando valores por defecto');
      this.aplicarTema( this.ajustes.tema );
    }

  }
  aplicarTema( tema: string ){

    let url = `./assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();

  }

}

interface Ajustes{ // Creo una interface para que me controle la forma en que voy a trabajar en los ajustes

  temaUrl: string;
  tema: string;

}