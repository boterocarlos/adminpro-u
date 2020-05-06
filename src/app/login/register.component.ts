import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../services/settings/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public userService: UserService,
    public  router: Router) { }

  sonIguales(campo1: string, campo2: string){

    return (group: FormGroup) => {

      const pass1: string = group.controls[campo1].value;
      const pass2: string = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      } 

      return {
        sonIguales: true
      };
    };
  }

  ngOnInit(): void {
    init_plugins();

    this.forma = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    },{ validators: this.sonIguales('password', 'password2') });

  }

  registerUser(){

    if (this.forma.invalid) {
      return;
    }

    if (!this.forma.value.condiciones) {
      Swal.fire(
        'Important!',
        'you must accept the conditions',
        'warning'
      );
      return;
    }

    const user = new User(
      this.forma.value.name,
      this.forma.value.email,
      this.forma.value.password
    );

    this.userService.createUser(user)
    .subscribe( resp => this.router.navigate(['/login']));
  }

}
