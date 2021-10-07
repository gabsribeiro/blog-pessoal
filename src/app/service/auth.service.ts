import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../model/UserDTO';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  entrar(userDTO: UserDTO): Observable<UserDTO> {
    return this.http.put<UserDTO>('https://blog-gabiribeiro.herokuapp.com/api/user/auth', userDTO);
  }

  atualizar(user: User): Observable<User> {
    return this.http.put<User>('https://blog-gabiribeiro.herokuapp.com/api/user/update', user);
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://blog-gabiribeiro.herokuapp.com/api/user/register', user);
  }

  getByIdUser(idUser: number): Observable<User> {
    return this.http.get<User>(`https://blog-gabiribeiro.herokuapp.com/api/user/${idUser}`)
  }

  logged() {
    let ok: boolean = false;
    if (environment.token != '') {
      ok = true;
    }
    return ok;
  }

}
