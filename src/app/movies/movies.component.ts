import {Component, OnInit} from '@angular/core';
import {MoviesService} from './movies.service';
import {Page} from '../pagination/models/page';
import {PaginationService} from '../pagination/pagination.service';
import {Movie} from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  page: Page<Movie> = new Page();

  constructor(
    private movieService: MoviesService,
    private  paginationService: PaginationService
  ) {
  }

  ngOnInit() {
    this.getData();
  }

  public getData(): void {
    this.movieService.getPage(this.page.pageable)
      .subscribe(page => this.page = page);
  }

  public getNextPage(): void {
    this.page.pageable = this.paginationService.getNextPage(this.page);
    this.getData();
  }

  public getPreviousPage(): void {
    this.page.pageable = this.paginationService.getPreviousPage(this.page);
    this.getData();
  }

  public delete(movie: Movie): void {
    this.movieService.delete(movie).subscribe(() => this.getData());
  }

}
