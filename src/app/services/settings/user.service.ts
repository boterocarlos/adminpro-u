import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { User } from '../../models/user.model';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string;
  username: string;
  useremail: string;

  constructor(public http: HttpClient, public router: Router) {
    this.cargarStorage();
  }

  estaLogueado(){
    if (this.token.length > 5) {
      return true;
    } else {
      return false;
    }
  }

  logout(){
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');

    this.router.navigate(['/login']);
  }

  guardarStorage(token: string, username: string, useremail: string){

    localStorage.setItem('token', token);
    localStorage.setItem('user_name', username);
    localStorage.setItem('user_email', useremail);

    this.token = token;
    this.username = username;
    this.useremail = useremail;

  }

  cargarStorage(){

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.username = localStorage.getItem('user_name');
      this.useremail = localStorage.getItem('user_email');
    } else {
      this.token = '';
      this.username = '';
      this.useremail = '';
    }

  }

  login(user: User, remember: boolean = false){

    if (remember) {
      localStorage.setItem('username', user.user_name);
    }else {
      localStorage.removeItem('username');
    }
    // console.log(remember);
    const url = URL_SERVICES + '/api/signin';

    // console.log(user);

    return this.http.post(url, user)
    .pipe( map( (resp: any ) => {

      this.guardarStorage(resp.accessToken,  resp.user_name, resp.user_email);

      return true;

    })
    );


  }

  createUser( user: User ){

    const url = URL_SERVICES + '/api/signup';

    return this.http.post( url, user )
    .pipe( map( (resp: any ) => {
      Swal.fire({
        icon: 'success',
        title: 'User create',
        showConfirmButton: false,
        timer: 2100
      });

      return resp.user;
    }),
    catchError( (err: any) => {

      Swal.fire({
        icon: 'warning',
        title: 'The username or password already exist',
        showConfirmButton: false,
        timer: 3800
      });
      return err.user;
    })
    );

  }


}
