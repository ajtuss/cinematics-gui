import {Injectable} from '@angular/core';
import {Page} from './models/page';
import {Pageable} from './models/pageable';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() {
  }

  public getNextPage(page: Page<any>): Pageable {
    if (!page.last) {
      page.pageable.pageNumber = page.pageable.pageNumber + 1;
    }
    return page.pageable;
  }

  public getPreviousPage(page: Page<any>): Pageable {
    if (!page.first) {
      page.pageable.pageNumber = page.pageable.pageNumber - 1;
    }
    return page.pageable;
  }

}
