import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { Theme } from 'src/app/model/Theme';
import { PostService } from 'src/app/service/post.service';
import { ThemeService } from 'src/app/service/theme.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  post: Post = new Post();
  idPost: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/login']);
    }

    this.idPost = this.activatedRoute.snapshot.params['idPost'];
    this.findByIdPost(this.idPost);
  }

  findByIdPost(idPost: number) {
    this.postService.getByIdPost(idPost).subscribe((resp: Post) => {
      this.post = resp;
    })
  }
 
  toDelete() {
    this.postService.deletePost(this.idPost).subscribe(() => {
      alert('Postagem deletada com sucesso!');
      this.router.navigate(['/inicio']);
    })
  }


}
