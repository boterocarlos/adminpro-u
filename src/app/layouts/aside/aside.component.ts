import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styles: [
  ]
})
export class AsideComponent implements OnInit {

  constructor( public _sidebar: SidebarService ) { }

  ngOnInit(): void {
  }

}
