import {MoviesService} from './../../services/movies.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [],
})
export class MovieComponent implements OnInit {
  movie: any;
  backTo: string = '';
  searchInput: string = '';

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.backTo = params['page'];
      if (params['searchInput']) this.searchInput = params['searchInput'];
      this.movieService
        .getMovie(params['id'])
        .subscribe(movie => (this.movie = movie));
    });
  }
}
