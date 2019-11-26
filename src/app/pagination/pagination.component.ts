import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Page} from './models/page';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() page: Page<any>;
  @Output() nextPageEvent = new EventEmitter();
  @Output() previousPageEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  nextPage(): void {
    this.nextPageEvent.emit(null);
  }

  previousPage(): void {
    this.previousPageEvent.emit(null);
  }

  from() {
    return this.page.number * this.page.size + 1;
  }

  to() {
    const val = (this.page.number + 1) * this.page.size;
    return  this.page.totalElements > val ? val : this.page.totalElements;
  }
}
