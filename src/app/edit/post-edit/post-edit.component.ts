import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { Theme } from 'src/app/model/Theme';
import { PostService } from 'src/app/service/post.service';
import { ThemeService } from 'src/app/service/theme.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post: Post = new Post();
  theme: Theme = new Theme();
  themeList: Theme[];
  themeId: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    
    if (environment.token == '') {
      this.router.navigate(['/login']);
    }

    let idPost = this.activatedRoute.snapshot.params['idPost'];
    this.findByIdPost(idPost);
    this.findAllThemes();
  }

  findByIdPost(idPost: number) {
    this.postService.getByIdPost(idPost).subscribe((resp: Post) => {
      this.post = resp;
    })
  }

  findByIdTheme() {
    this.themeService.getByIdTheme(this.themeId).subscribe((resp: Theme) => {
      this.theme = resp;
    })
  }

  findAllThemes() {
    this.themeService.getAllThemes().subscribe((resp: Theme[]) => {
      this.themeList = resp;
    })
  }

  updatePost() {
    this.theme.idTheme = this.themeId;
    this.post.relatedTheme = this.theme;
    this.postService.putPost(this.post).subscribe((resp: Post) => {
      this.post = resp;
      alert('Postagem atualizada!')
      this.router.navigate(['/inicio'])
    })
  }

}
