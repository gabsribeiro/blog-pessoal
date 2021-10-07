import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserDTO } from '../model/UserDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDto: UserDTO = new UserDTO()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  login() {
    this.authService.entrar(this.userDto).subscribe((resp: UserDTO) => {
      this.userDto = resp;

      environment.idUser = this.userDto.idUser;
      environment.name = this.userDto.name;
      environment.token = this.userDto.token;
      environment.photo = this.userDto.photo;

      console.log(environment.idUser)

      this.router.navigate(['/inicio'])
    }, error => {
      if (error.status == 401) {
        alert('Usuário ou senha estão incorretos')
      }
    })
  }

}
