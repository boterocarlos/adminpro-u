import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/settings/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor( public userService: UserService) { }

  ngOnInit(): void {
  }

}
