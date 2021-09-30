import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User;
  passwordConf: string;
  typeUser: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0);    
  }

  passwordConfirm(event: any) {
    this.passwordConf = event.target.value;
  }

  userType(event: any) {
    this.typeUser = event.target.value;
  }

  register(event: any) {
    this.user.type = this.typeUser;

    if(this.user.password != this.passwordConf) {
      alert('A senha está incorreta');
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso');
      })
    }
  }
}
