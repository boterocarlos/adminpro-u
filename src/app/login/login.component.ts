import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/settings/user.service';
import { User } from '../models/user.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberme: boolean = false;
  username: string;

  constructor( public router: Router,
               public userService: UserService ) { }

  ngOnInit(): void {
    init_plugins();

    this.username = localStorage.getItem('username') || '';
    if (this.username.length > 1) {
      this.rememberme = true;
    }
  }

  ingresar( forma: NgForm){

    if (forma.invalid) {
      return;
    }

    // Aqui le asigno los valores del atributo name de html a las variables que estan dentro del modelo user,
    // aqui configuro que user_email va hacer null y como email esta en la segunda posicion dentro del modelo user
    const user = new User( forma.value.name, null, forma.value.password );

    this.userService.login(user, forma.value.rememberme)
    .subscribe( resp => this.router.navigate(['/dashboard']) );

    console.log(forma.value.rememberme);

// this.router.navigate(['/dashboard']);

  }
}
