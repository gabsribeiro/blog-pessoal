import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserDTO } from '../model/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userDTO: UserDTO): Observable<UserDTO> {
    return this.http.put<UserDTO>('https://blog-gabrielaribeiro.herokuapp.com/api/user/auth', userDTO);
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://blog-gabrielaribeiro.herokuapp.com/api/user/register', user);
  }

  logged() {
    let ok: boolean = false;
    if (environment.token != '') {
      ok = true;
    }
    return ok;
  }
}
