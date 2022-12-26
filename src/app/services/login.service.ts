import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(usuario: string, password: string): Observable<any>{
    
    let body = {
      usuario : usuario,
      password: password
    }

    return this.http.post('https://reqres.in/api/login', body);
  }
}
