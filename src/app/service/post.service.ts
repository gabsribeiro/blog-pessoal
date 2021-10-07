import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://blog-gabrielaribeiro.herokuapp.com/api/post/all', this.token);
  }

  getByIdPost(idPost: number): Observable<Post> {
    return this.http.get<Post>(`https://blog-gabrielaribeiro.herokuapp.com/api/post/${idPost}`, this.token);
  }

  postPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://blog-gabrielaribeiro.herokuapp.com/api/post/save', post, this.token);
  }

  putPost(post: Post): Observable<Post> {
    return this.http.put<Post>('https://blog-gabrielaribeiro.herokuapp.com/api/post/update', post, this.token);
  }

  deletePost(idPost: number) {
    return this.http.delete(`https://blog-gabrielaribeiro.herokuapp.com/api/post/delete/${idPost}`, this.token);
  }
  
}
