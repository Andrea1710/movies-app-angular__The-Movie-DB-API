import {MoviesService} from './../../services/movies.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  search: string;
  constructor(
    public movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchInput']) {
        this.search = params['searchInput'];
        this.searchMovie();
      }
    });
  }

  searchMovie() {
    if (this.search === '') this.movieService.movies = [];
    if (!this.search.length) return;
    this.movieService.searchMovie(this.search).subscribe();
  }
}
