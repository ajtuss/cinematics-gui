import {Sort} from './sort';

export class Pageable {
  sort: Sort;
  pageSize: number;
  pageNumber: number;
  offset: number;
  unpaged: boolean;
  paged: boolean;

  public constructor() {
    this.pageSize = 10;
    this.pageNumber = 0;
  }
}
