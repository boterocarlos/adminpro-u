import { Component, OnInit } from '@angular/core';

// asi se puede llamar cualquier Script que este por fuera de angular y este ubicado en un archivo de javaScript
// Esto sirve para Plugins carruseles Tooltip y muchas cosas mas que esten javaScript y no se encuentran JS y angular
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ],
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    init_plugins();
  }

}
