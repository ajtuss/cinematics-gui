import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Page} from '../pagination/models/page';
import {Pageable} from '../pagination/models/pageable';
import {Movie} from './movie';
import {log} from 'util';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: string = API_URL + 'movies/';
  private search: Observable<string> = of('');

  constructor(private http: HttpClient) {
  }

  public setSearch(observable: Observable<string>): void {
    this.search = observable;
  }

  public save(movie: Movie): Observable<Movie> {
    if (!movie.id) {
      return this.http.post<Movie>(this.url, movie, httpOptions);
    }
  }

  public getPage(pageable: Pageable): Observable<Page<Movie>> {
    const url = this.url
      + '?page=' + pageable.pageNumber
      + '&size=' + pageable.pageSize;
    return this.http.get<Page<Movie>>(url, httpOptions);
  }

  public findById(id: string): Observable<Movie> {
    const url = `${this.url}/${id}`;
    return this.http.get<Movie>(url, httpOptions);
  }

  public update(movie: Movie): Observable<Movie> {
    const url = `${this.url}/${movie.id}`;
    return this.http.put<Movie>(url, movie, httpOptions);
  }

  public delete(movie: Movie): Observable<void> {
    const url = `${this.url}${movie.id}`;
    return this.http.delete<void>(url, httpOptions);
  }
}
