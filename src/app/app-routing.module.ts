import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDeleteComponent } from './delete/post-delete/post-delete.component';
import { ThemeDeleteComponent } from './delete/theme-delete/theme-delete.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { ThemeEditComponent } from './edit/theme-edit/theme-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: RegisterComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'tema', component: ThemeComponent },
  { path: 'editar-tema/:idTheme', component: ThemeEditComponent },
  { path: 'deletar-tema/:idTheme', component: ThemeDeleteComponent },
  { path: 'editar-postagem/:idPost', component: PostEditComponent },
  { path: 'deletar-postagem/:idPost', component: PostDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
