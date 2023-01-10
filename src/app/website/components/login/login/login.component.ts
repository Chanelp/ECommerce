import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: string = 'chacha@gmail.com';
  password: string = 'clave321';
  token = '';

  register = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private usersService: UsersService) { }

  ngOnInit(): void {

  }

  createUser() {
    this.usersService.create({
      name: this.register.name,
      email: this.register.email,
      password: this.register.password,
      role: 'customer'
    })
    .subscribe(rta => {
      Swal.fire({
        title: 'Usuario registrado',
        text: 'Te has registrado',
        icon: 'success',
        confirmButtonText: 'Vale'
      });

      console.log(rta);
      console.table(this.register);

      this.register.name = '';
      this.register.email = '';
      this.register.password = '';
    })
  }

  login(){
    this.authService.loginAndGet(this.register.email, this.register.password)
    .subscribe(user => {
      this.usuario = user.email;
      this.register.name = '';
      this.register.email = '';
      this.register.password = '';
    });
  }

  getProfile() {
    this.authService.getProfile()
    .subscribe(profile => {
      console.log(profile);
      this.usuario = profile.email;
    })
  }

}
