import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { UserService } from '../../services/settings/user.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styles: [
  ]
})
export class AsideComponent implements OnInit {

  constructor( public _sidebar: SidebarService, public userService: UserService ) { }

  ngOnInit(): void {
  }

}
