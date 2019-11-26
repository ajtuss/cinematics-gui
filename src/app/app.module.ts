import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MoviesComponent} from './movies/movies.component';
import {AddMovieComponent} from './movies/add-movie/add-movie.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './movies/header/header.component';
import {PaginationComponent} from './pagination/pagination.component';
import { ImageComponent } from './movies/image/image.component';
import { SearchComponent } from './movies/header/search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AddMovieComponent,
    HeaderComponent,
    PaginationComponent,
    ImageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
