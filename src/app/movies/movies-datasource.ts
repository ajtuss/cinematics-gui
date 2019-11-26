// import {CollectionViewer, DataSource} from '@angular/cdk/collections';
// import {BehaviorSubject, Observable, of} from 'rxjs';
// import {MoviesService} from './movies.service';
// import {catchError, finalize} from 'rxjs/operators';
//
// export interface Movie {
//   id: string;
//   name: string;
//   description: string;
//   image: Image;
// }
//
// export interface Image {
//   url: string;
//   filename: string;
// }
//
// export class MoviesDatasource extends DataSource<Movie> {
//
//   private invoiceSubject = new BehaviorSubject<Movie[]>([]);
//   private loadingSubject = new BehaviorSubject<boolean>(false);
//
//   constructor(private moviesService: MoviesService) {
//     super();
//   }
//
//   connect(collectionViewer: CollectionViewer): Observable<Movie[] | ReadonlyArray<Movie>> {
//     return this.invoiceSubject.asObservable();
//   }
//
//   disconnect(collectionViewer: CollectionViewer): void {
//     this.invoiceSubject.complete();
//     this.loadingSubject.complete();
//   }
//
//   loadMovies(sortDirection = 'asc', pageIndex = 0, pageSize = 20) {
//
//     this.loadingSubject.next(true);
//
//     this.moviesService.getAll(pageIndex, pageSize).pipe(
//       catchError(() => of([])),
//       finalize(() => this.loadingSubject.next(false))
//     )
//       .subscribe(invoices => this.invoiceSubject.next(invoices));
//   }
//
// }
