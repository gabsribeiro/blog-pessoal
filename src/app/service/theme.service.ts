import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>('https://blog-gabiribeiro.herokuapp.com/api/theme/all', this.token);
  }

  getByIdTheme(idTheme: number): Observable<Theme> {
    return this.http.get<Theme>(`https://blog-gabiribeiro.herokuapp.com/api/theme/${idTheme}`, this.token);
  }

  postTheme(theme: Theme): Observable<Theme> {
    return this.http.post<Theme>('https://blog-gabiribeiro.herokuapp.com/api/theme/save', theme, this.token);
  }

  putTheme(theme: Theme): Observable<Theme> {
    return this.http.put<Theme>('https://blog-gabiribeiro.herokuapp.com/api/theme/update', theme, this.token);
  }

  deleteTheme(idTheme: number) {
    return this.http.delete(`https://blog-gabiribeiro.herokuapp.com/api/theme/delete/${idTheme}`, this.token);
  }

}
