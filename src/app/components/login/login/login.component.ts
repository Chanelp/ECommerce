import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: string = 'eve.holt@reqres.in';
  password: string = 'aqert2';

  register = {
    name: '',
    email: '',
    password: ''
  }

  onRegister(){
    console.table(this.register);
    this.register.name = '';
    this.register.email = '';
    this.register.password = '';
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

}
