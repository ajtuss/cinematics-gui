import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {AddMovieComponent} from './movies/add-movie/add-movie.component';


const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'add', component: AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
