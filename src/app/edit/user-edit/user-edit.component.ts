import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();
  idUser: number;
  confirmPassword: string;
  typeUser: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.router.navigate(['/login']);
    }

    this.idUser = this.activatedRoute.snapshot.params['idUser'];
    this.findByIdUser(this.idUser);
  }

  passwordConfirm(event: any) {
    this.confirmPassword = event.target.value;
  }

  userType(event: any) {
    this.typeUser = event.target.value;
  }

  toUpdate(event: any) {
    this.user.type = this.typeUser;

    if (this.user.password != this.confirmPassword) {
      alert('A senha está incorreta');
    } else {
      this.authService.atualizar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/inicio']);
        alert('Usuário atualizado com sucesso, faça o login novamente!');
        environment.token = '';     
        environment.name = '';    
        environment.photo = '';    
        environment.idUser = 0;
        this.router.navigate(['/login']);     
      })
    }
  }

  findByIdUser(idUser: number) {
    this.authService.getByIdUser(idUser).subscribe((resp: User) => {
      this.user = resp;
    })
  }

}
