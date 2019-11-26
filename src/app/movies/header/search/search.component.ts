import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MoviesService} from '../../movies.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchField: FormControl = new FormControl();

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.moviesService.setSearch(this.searchField.valueChanges.pipe(debounceTime(200)));
  }

}
