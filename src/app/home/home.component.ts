import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';
import { Theme } from '../model/Theme';
import { User } from '../model/User';
import { PostService } from '../service/post.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post: Post = new Post();
  theme: Theme = new Theme();
  themeList: Theme[];
  themeId: number;
  user: User = new User();
  userId = environment.idUser;

  constructor(
    private router: Router,
    private postService: PostService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.getAllThemes();
  }

  getAllThemes() {
    this.themeService.getAllThemes().subscribe((resp: Theme[]) => {
      this.themeList = resp;
    })
  }

  findByIdTheme() {
    this.themeService.getByIdTheme(this.themeId ).subscribe((resp: Theme) => {
      this.theme = resp;
    })
  }

  toPost() {
    this.theme.idTheme = this.themeId;
    this.post.relatedTheme = this.theme;
    this.user.idUser = this.userId;
    this.post.user = this.user;
    this.postService.postPost(this.post).subscribe((resp: Post) => {
      this.post = resp;
      alert('Postagem realizada com sucesso!');
    })

  }

}
