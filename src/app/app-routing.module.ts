import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { PostsComponent} from './components/posts/posts.component';
import { PostComponent} from './components/post/post.component';


const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'posts', component:PostsComponent},
  { path:'posts/:textSearch', component:PostsComponent},
  { path:'post/:id', component:PostComponent},
  { path:'**', pathMatch: 'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
