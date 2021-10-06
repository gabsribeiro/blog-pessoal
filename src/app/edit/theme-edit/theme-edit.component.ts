import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'src/app/model/Theme';
import { ThemeService } from 'src/app/service/theme.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-theme-edit',
  templateUrl: './theme-edit.component.html',
  styleUrls: ['./theme-edit.component.css']
})
export class ThemeEditComponent implements OnInit {

  theme: Theme = new Theme()

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login']);
    }

    let idTheme = this.activatedRoute.snapshot.params['idTheme'];
    this.findByIdTheme(idTheme);
  }


  findByIdTheme(idTheme: number) {
    this.themeService.getByIdTheme(idTheme).subscribe((resp: Theme) => {
      this.theme = resp;
    })
  }

  update() {
    this.themeService.putTheme(this.theme).subscribe((resp: Theme) => {
      this.theme = resp;
      alert('Tema atualizado.');
      this.router.navigate(['/tema']);
    })
  }

}
