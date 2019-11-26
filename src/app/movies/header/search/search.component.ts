import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MoviesService} from '../../movies.service';

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
  }

}
